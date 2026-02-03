'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  onFilterChange: (category: string) => void;
}

export default function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'cat_all', name: 'All', count: 12 },
    { id: 'cat_case_studies', name: 'Case Studies', count: 4 },
    { id: 'cat_tech_insights', name: 'Tech Insights', count: 3 },
    { id: 'cat_adm_best_practices', name: 'ADM Best Practices', count: 3 },
    { id: 'cat_industry_news', name: 'Industry News', count: 2 },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    onFilterChange(categoryName);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.name)}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
            activeCategory === category.name
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
              : 'bg-black/5 text-foreground hover:bg-black/10'
          }`}
        >
          {category.name}
          <span className="ml-2 opacity-60">({category.count})</span>
        </button>
      ))}
    </div>
  );
}