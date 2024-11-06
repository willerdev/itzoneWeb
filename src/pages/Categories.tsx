import React from 'react';
import { Grid, Search } from 'lucide-react';

const categories = [
  { id: 1, name: 'Electronics', icon: '📱', count: 1250 },
  { id: 2, name: 'Vehicles', icon: '🚗', count: 856 },
  { id: 3, name: 'Property', icon: '🏠', count: 643 },
  { id: 4, name: 'Fashion', icon: '👕', count: 1432 },
  { id: 5, name: 'Home & Furniture', icon: '🛋️', count: 925 },
  { id: 6, name: 'Services', icon: '🔧', count: 534 },
  { id: 7, name: 'Jobs', icon: '💼', count: 267 },
  { id: 8, name: 'Pets', icon: '🐕', count: 189 },
  { id: 9, name: 'Agriculture', icon: '🌾', count: 312 },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-semibold text-gray-800">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;