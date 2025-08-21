import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="search"
          placeholder="Busque por palavras-chave, área de atuação ou tipo de processo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pl-12 pr-12 py-4 text-base"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
          <Icon name="Search" size={20} />
        </div>
        {searchTerm && (
          <button
            onClick={onClearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Limpar busca"
          >
            <Icon name="X" size={20} />
          </button>
        )}
      </div>
      {searchTerm && (
        <p className="mt-2 text-sm text-text-secondary text-center">
          Buscando por: <span className="font-medium text-text-primary">"{searchTerm}"</span>
        </p>
      )}
    </div>
  );
};

export default SearchBar;