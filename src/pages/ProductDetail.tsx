import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, MapPin, User, MessageSquare } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data (in real app, fetch from Firebase)
  const product = {
    id: 1,
    title: "iPhone 13 Pro",
    price: "$999",
    description: "Perfect condition iPhone 13 Pro, 256GB storage, Pacific Blue color. Includes original box, charger, and warranty valid until December 2024. Minor scratches on the screen protector, but the phone itself is in excellent condition.",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=80&w=800",
    ],
    seller: {
      name: "John Doe",
      rating: 4.8,
      memberSince: "Jan 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    location: "New York, NY",
    postedAt: "2 days ago",
    condition: "Like New",
    category: "Electronics",
  };

  const startChat = () => {
    // In real app, create or open chat conversation
    navigate(`/chat`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-3xl font-bold text-[#1c6dd6] mt-2">{product.price}</p>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{product.location}</span>
              <span className="mx-2">•</span>
              <span className="text-sm">{product.postedAt}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={startChat}
              className="flex-1 bg-[#1c6dd6] text-white py-3 rounded-lg font-medium hover:bg-[#1859ac] transition-colors flex items-center justify-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Make Offer
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <h2 className="font-semibold mb-2">Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Condition</span>
                <p>{product.condition}</p>
              </div>
              <div>
                <span className="text-gray-500">Category</span>
                <p>{product.category}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-4">
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{product.seller.name}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>⭐ {product.seller.rating}</span>
                  <span className="mx-2">•</span>
                  <span>Member since {product.seller.memberSince}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;