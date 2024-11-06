import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  
  const featuredProducts = [
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: "$999",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400",
      seller: "John Doe",
      location: "New York",
      condition: "Like New"
    },
    {
      id: 2,
      title: "MacBook Pro M1",
      price: "$1299",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
      seller: "Jane Smith",
      location: "San Francisco",
      condition: "Used"
    },
    {
      id: 3,
      title: "Sony PS5",
      price: "$499",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400",
      seller: "Mike Johnson",
      location: "Los Angeles",
      condition: "New"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="md:hidden relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <section className="bg-gradient-to-r from-[#1c6dd6] to-[#fa9805] text-white rounded-lg p-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to ITZONE</h1>
          <p className="text-lg mb-6">Find amazing deals on products you love</p>
          <button className="bg-white text-[#1c6dd6] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Shopping
          </button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/categories" className="text-[#1c6dd6] hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                />
                <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                  {product.condition}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 truncate">
                  {product.title}
                </h3>
                <p className="text-[#fa9805] font-bold text-lg mb-2">
                  {product.price}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="truncate">{product.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;