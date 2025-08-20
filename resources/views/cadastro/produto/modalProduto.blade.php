<!-- Script de busca híbrida NCM -->
<script>
// === utilitários ===
function debounce(fn, wait){ let t; return function(...a){ clearTimeout(t); t=setTimeout(()=>fn.apply(this,a),wait); }; }
function normalizeStr(str){ return str.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }

// dataOrUrl: Array local OU URL remota (string)
function initDropdownSearch(dataOrUrl, searchId, hiddenId, resultsId, opts={}){
    const settings = Object.assign({
        minLength: 2,    // a partir de quantos chars buscar no servidor
        perPage: 30,     // itens por página
        openOnFocus: true,
        prefetch: true,  // pré-carregar lista-boot (q='')
        cacheSize: 32    // até 32 termos em cache (LRU simples)
    }, opts);

    const $input   = $('#'+searchId);
    const $hidden  = $('#'+hiddenId);
    const $results = $('#'+resultsId);
    const isRemote = (typeof dataOrUrl === 'string');

    let ignoreDropdownFocus = false;
    let indexAtivo = -1;
    let lastTerm   = '';
    let more       = false;

    // --- cache LRU por termo (inclui a chave especial BOOT) ---
    const BOOT = '__boot__';              // resultados de q=''
    const cache = new Map();              // termo normalizado -> { items, more, page }
    function ck(q){ return q ? normalizeStr(q) : BOOT; }
    function cacheGet(key){ return cache.get(key); }
    function cachePut(key, val){
        if(cache.has(key)) cache.delete(key);
        cache.set(key, val);
        if(cache.size > settings.cacheSize){
            const fk = cache.keys().next().value;
            cache.delete(fk);
        }
    }

    function dropdown(){ return bootstrap.Dropdown.getOrCreateInstance($input[0]); }

    function renderLoading(){
        $results.html('<li><span class="dropdown-item text-muted">Carregando…</span></li>');
    }
    function renderItems(items, {append=false, showMore=false}={}){
        let html = '';
        if(!items || !items.length){
            if(!append) html = '<li><span class="dropdown-item text-muted">Nenhum resultado</span></li>';
        }else{
            items.forEach((item, idx) => {
                const itemId = resultsId + 'Opt' + (append ? (Date.now()+'_'+idx) : idx);
                html += `<li>
                    <a href="#" id="${itemId}" class="dropdown-item" role="option"
                       data-id="${item.id}" data-text="${item.text}">
                       ${item.text}
                    </a>
                </li>`;
            });
        }
        if(!append) $results.html(html); else $results.append(html);
        if(showMore){
            $results.append('<li><a href="#" class="dropdown-item fw-semibold" data-loadmore="1">Carregar mais…</a></li>');
        }
        indexAtivo = 0;
        $input.attr('aria-activedescendant', $results.find('.dropdown-item.active').attr('id') || '');
    }

    // ---- FILTRO LOCAL (para outras listas menores) ----
    function localFilter(val){
        const data = Array.isArray(dataOrUrl) ? dataOrUrl : [];
        const tokens = normalizeStr(val).split(/\s+/).filter(Boolean);
        const resultados = data.filter(n => {
            const txt = normalizeStr(n.text);
            return tokens.every(t => txt.includes(t));
        }).slice(0, 50);
        renderItems(resultados);
    }

    // ---- BUSCA REMOTA (com cache + paginação) ----
    function remoteFetch(val, reset=true){
        const key = (val && val.length >= settings.minLength) ? ck(val) : BOOT;
        const cached = cacheGet(key);
        let page = reset ? 1 : ((cached?.page || 1) + 1);

        if(reset){
            // Se tem cache, mostra INSTANTÂNEO sem ir na rede
            if(cached && cached.items?.length){
                more = !!cached.more;
                renderItems(cached.items, {showMore: more});
                dropdown().show();
                return;
            }
            renderLoading();
        }

        $.getJSON(dataOrUrl, { q: val || '', page, per_page: settings.perPage })
         .done(resp => {
            const state = {
                items: reset ? (resp.items || []) : (cached?.items || []).concat(resp.items || []),
                more: !!resp.more,
                page
            };
            cachePut(key, state);
            more = state.more;
            renderItems(resp.items || [], { append: !reset, showMore: more });
            dropdown().show();
         })
         .fail(() => {
            more = false;
            renderItems([], { append: !reset, showMore: false });
            dropdown().show();
         });
    }

    function showBoot(){
        // Abre instantâneo usando a lista-boot do cache (ou “Carregando…” enquanto chega)
        const cached = cacheGet(BOOT);
        if(cached){
            more = !!cached.more;
            renderItems(cached.items || [], { showMore: more });
        }else{
            renderLoading();
            if(isRemote) remoteFetch('', true);
        }
        dropdown().show();
    }

    function buscar(val, reset=true){
        if(!isRemote){
            localFilter(val || '');
            dropdown().show();
            return;
        }
        if(val && val.length >= settings.minLength){
            remoteFetch(val, reset);
        }else{
            showBoot(); // < minLength: volta para a lista-boot
        }
    }

    // ---- Pré-carregamento da lista-boot (q='') ----
    if(isRemote && settings.prefetch){
        // dispara logo que o script carregar
        $.getJSON(dataOrUrl, { q: '', page: 1, per_page: settings.perPage })
         .done(resp => cachePut(BOOT, { items: resp.items || [], more: !!resp.more, page: 1 }))
         .fail(()     => cachePut(BOOT, { items: [], more: false, page: 1 }));
    }

    // ---- Abertura instantânea no foco/clique ----
    if(settings.openOnFocus){
        $input.on('focus', function(){
            const v = this.value.trim();
            if(!v || v.length < settings.minLength) showBoot(); else buscar(v, true);
        });
        // caso já esteja focado, garante abrir também ao clicar
        $input.on('mousedown', function(){
            const v = this.value.trim();
            setTimeout(() => {
                if(!v || v.length < settings.minLength) showBoot();
            }, 0);
        });
    }

    // ---- Digitação (debounce) ----
    $input.on('input', debounce(function(){
        lastTerm = this.value.trim();
        buscar(lastTerm, true);
    }, 250));

    // ---- Teclado / navegação ----
    $input.on('keydown', function(e){
        const items = $results.find('.dropdown-item').not('[data-loadmore]');
        if(!items.length) return;

        if(e.key === 'ArrowDown'){ e.preventDefault(); if(indexAtivo < items.length - 1){ indexAtivo++; } }
        else if(e.key === 'ArrowUp'){ e.preventDefault(); if(indexAtivo > 0){ indexAtivo--; } }
        else if(e.key === 'Enter'){ e.preventDefault(); $(items[indexAtivo]).trigger('click'); return; }

        items.removeClass('active');
        const activeItem = $(items[indexAtivo]).addClass('active');
        activeItem[0]?.scrollIntoView({block:'nearest'});
        $input.attr('aria-activedescendant', activeItem.attr('id') || '');
    });

    // ---- Hover ativa ----
    $results.on('mouseenter', '.dropdown-item', function(){
        const items = $results.find('.dropdown-item').not('[data-loadmore]');
        items.removeClass('active');
        const activeItem = $(this).addClass('active');
        indexAtivo = items.index(this);
        $input.attr('aria-activedescendant', activeItem.attr('id') || '');
    });

    // ---- Clique em item ----
    $results.on('mousedown', '.dropdown-item', function(){ ignoreDropdownFocus = true; });
    $results.on('click', '.dropdown-item', function(e){
        if($(this).data('loadmore')) return;
        e.preventDefault();
        $input.val($(this).data('text'));
        $hidden.val($(this).data('id'));
        $results.empty();
        ignoreDropdownFocus = true;
        dropdown().hide();
    });

    // ---- Paginação: "Carregar mais" ----
    $results.on('click', '[data-loadmore]', function(e){
        e.preventDefault();
        // quando não há termo suficiente, o "load more" é da lista-boot
        const v = $input.val().trim();
        lastTerm = v;
        remoteFetch(v, /*reset*/false);
        $(this).closest('li').remove();
    });

    // ---- Blur: fecha/limpa ----
    $input.on('blur', function(){
        if (ignoreDropdownFocus){ ignoreDropdownFocus = false; return; }
        dropdown().hide();
        $results.empty();
    });
}
</script>

<script>
const ncmApiUrl = "{{ route('ncm.search') }}";
initDropdownSearch(ncmApiUrl, 'ncmSearch', 'ncm', 'ncmSearchResults', {
  prefetch: true,
  openOnFocus: true,
  minLength: 2,
  perPage: 30
});
</script>

