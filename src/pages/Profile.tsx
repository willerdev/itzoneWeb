import React from 'react';
import { Settings, Heart, Package, Star, LogOut } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    joinDate: 'Member since Jan 2024',
    rating: 4.8,
    reviews: 23,
  };

  const menuItems = [
    { icon: Package, label: 'My Listings', count: 12 },
    { icon: Heart, label: 'Favorites', count: 8 },
    { icon: Star, label: 'Reviews', count: user.reviews },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.joinDate}</p>
            <div className="flex items-center mt-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{user.rating}</span>
              <span className="mx-1 text-gray-500">·</span>
              <span className="text-sm text-gray-500">{user.reviews} reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="h-5 w-5 text-[#1c6dd6]" />
              <span className="font-medium text-gray-900">{item.label}</span>
            </div>
            {item.count !== undefined && (
              <span className="text-gray-500">{item.count}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;