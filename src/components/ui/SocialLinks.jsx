import React from 'react';
import * as Icons from 'lucide-react';

const SocialLinks = ({ className = '', iconClassName = 'text-slate-400 hover:text-white' }) => {
  const links = [
    { href: 'https://www.youtube.com/@MarceloBa%C3%ADa-c8h', icon: 'Youtube', label: 'YouTube' },
    { href: 'https://www.linkedin.com/in/marcelo-ba%C3%ADa-29433662/', icon: 'Linkedin', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/share/1K2HTpSdcG/', icon: 'Facebook', label: 'Facebook' },
    { href: 'https://www.instagram.com/advocaciamarcelobaia', icon: 'Instagram', label: 'Instagram' },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`flex h-5 w-5 items-center justify-center ${iconClassName}`}
        >
          {(() => { const IconComponent = Icons[link.icon]; return <IconComponent size={18} strokeWidth={1.25} />; })()}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

