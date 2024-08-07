import React, { useState } from 'react';
import '../App.css';

const Menu = ({ items, onAddToOrder }) => {
  const categories = [...new Set(items.map(item => item.category))];
  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = items.filter(item => item.category === category);
    return acc;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {groupedItems[selectedCategory].map(item => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => onAddToOrder(item)}
          >
            <span className="item-name">{item.name}</span>
            {/* Price is removed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
