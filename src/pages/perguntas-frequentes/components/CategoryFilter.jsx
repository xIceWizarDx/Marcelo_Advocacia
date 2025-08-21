import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-inter font-medium text-sm lg:text-base transition-all duration-300 ${
            activeCategory === category?.id
              ? 'bg-brand-accent text-white shadow-md'
              : 'bg-white text-text-primary hover:bg-accent/10 hover:text-brand-accent border border-border'
          }`}
        >
          <Icon name={category?.icon} size={18} />
          <span>{category?.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            activeCategory === category?.id
              ? 'bg-white/20 text-white' :'bg-muted text-text-secondary'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;