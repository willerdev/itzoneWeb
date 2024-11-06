import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Edit } from 'lucide-react';
import type { Post } from '../types/firebase';

const Home = () => {
  const navigate = useNavigate();
  const [draftPost, setDraftPost] = useState<Partial<Post> | null>(null);
  
  useEffect(() => {
    const savedData = localStorage.getItem('postDraft');
    if (savedData) {
      setDraftPost(JSON.parse(savedData));
    }
  }, []);

  const featuredProducts = [
    {
      id: 1,
      title: "Hp elitebook 1040 G5",
      price: "RWF 600,000",
      image: "https://itzone.rw/listing/uploads/autohp-EliteEOOK-x360-1040-G5_Front-Left.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 2,
      title: "Hp 215",
      price: "RWF 160,000",
      image: "https://itzone.rw/listing/uploads/auto71k8l4/m6u6t.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 3,
      title: "Dell latitude 3160",
      price: "RWF 160,000",
      image: "https://itzone.rw/listing/uploads/autodell.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 4,
      title: "Dell latitude 7270",
      price: "RWF 200,000",
      image: "https://itzone.rw/listing/uploads/ff.jpg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 5,
      title: "Lenovo x131e",
      price: "RWF 160,000",
      image: "https://itzone.rw/listing/uploads/ff.webd",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 6,
      title: "HP EliteBook 8470p",
      price: "RWF 180,000",
      image: "https://itzone.rw/listing/uploads/ff.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 7,
      title: "Lenovo N24",
      price: "RWF 180,000",
      image: "https://itzone.rw/listing/uploads/gg.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 8,
      title: "HP x360 11 G1",
      price: "RWF 200,000",
      image: "https://itzone.rw/listing/uploads/vv.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 9,
      title: "Hp elitebook 840 G3",
      price: "RWF 300,000",
      image: "https://itzone.rw/listing/uploads/ff.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 10,
      title: "Lenovo yoga 370",
      price: "RWF 350,000",
      image: "https://itzone.rw/listing/uploads/yy.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 11,
      title: "Lenovo thinkpad T470s",
      price: "RWF 4,350,000",
      image: "https://itzone.rw/listing/uploads/ee.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 12,
      title: "Dell latitude 7270",
      price: "RWF 160,000",
      image: "https://itzone.rw/listing/uploads/22.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 13,
      title: "Lenovo T450s",
      price: "RWF 300,000",
      image: "https://itzone.rw/listing/uploads/aa.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 14,
      title: "Hp elitebook 820 G3",
      price: "RWF 300,000",
      image: "https://itzone.rw/listing/uploads/aa.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 15,
      title: "Lenovo x240",
      price: "RWF 200,000",
      image: "https://itzone.rw/listing/uploads/ss.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 16,
      title: "Dell E7440",
      price: "RWF 250,000",
      image: "https://itzone.rw/listing/uploads/a.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 17,
      title: "Hp elitebook folio",
      price: "RWF 250,000",
      image: "https://itzone.rw/listing/uploads/12.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 18,
      title: "Hp elitebook 840",
      price: "RWF 250,000",
      image: "https://itzone.rw/listing/uploads/14.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 19,
      title: "Hp elite book 820",
      price: "RWF 250,000",
      image: "https://itzone.rw/listing/uploads/12.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 20,
      title: "Hp probook 650 G1",
      price: "RWF 300,000",
      image: "https://itzone.rw/listing/uploads/11.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 21,
      title: "Hp elitebook 1030 G2",
      price: "RWF 450,000",
      image: "https://itzone.rw/listing/uploads/9.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 22,
      title: "Hp elitebook 850 G2",
      price: "RWF 270,000",
      image: "https://itzone.rw/listing/uploads/8.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 23,
      title: "Dell latitude 7280",
      price: "RWF 380,000",
      image: "https://itzone.rw/listing/uploads/7.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 24,
      title: "Hp probook 640 G3",
      price: "RWF 350,000",
      image: "https://itzone.rw/listing/uploads/6.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 25,
      title: "Hp 640 G1",
      price: "RWF 249,391",
      image: "https://itzone.rw/listing/uploads/5.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 26,
      title: "Hp 830G5",
      price: "RWF 400,021",
      image: "https://itzone.rw/listing/uploads/3.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 27,
      title: "Dell latitude 7270",
      price: "RWF 450,003",
      image: "https://itzone.rw/listing/uploads/2.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 28,
      title: "Dell ES480",
      price: "RWF 450,000",
      image: "https://itzone.rw/listing/uploads/1.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 29,
      title: "Lenovo x260",
      price: "RWF 280,004",
      image: "https://itzone.rw/listing/uploads/dell.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 30,
      title: "Dell ES470",
      price: "RWF 35,000",
      image: "https://itzone.rw/listing/uploads/dell%201.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 31,
      title: "Dell latitude E5250",
      price: "RWF 280,000",
      image: "https://itzone.rw/listing/uploads/1648192201718412.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 32,
      title: "Dell latitude 7450",
      price: "RWF 300,000",
      image: "https://itzone.rw/listing/uploads/60ab8e6ef877251df3f89199_106540.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
    },
    {
      id: 33,
      title: "Dell latitude 7270",
      price: "RWF 380,000",
      image: "https://itzone.rw/listing/uploads/e7270.jpeg",
      seller: "Itzone Ltd",
      location: "Kigali",
      condition: "Used"
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

      <section className="bg-[#1c6dd6] text-white rounded-lg p-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to ITZONE</h1>
          <p className="text-lg mb-6">Find amazing deals on products you love</p>
          <button className="bg-white text-[#1c6dd6] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Shopping
          </button>
        </div>
      </section>

      {draftPost && (
        <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-yellow-800">Continue Your Draft</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/post')}
                className="flex items-center text-yellow-800 hover:text-yellow-900"
              >
                <Edit className="h-5 w-5 mr-2" />
                Continue Editing
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('postDraft');
                  setDraftPost(null);
                }}
                className="text-red-600 hover:text-red-700 text-sm"
              >
                Delete Draft
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-gray-900 mb-2">
              {draftPost.title || 'Untitled Post'}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Category:</span>{' '}
                {draftPost.category || 'Not specified'}
              </div>
              <div>
                <span className="font-medium">Price:</span>{' '}
                {draftPost.price ? `RWF ${draftPost.price}` : 'Not specified'}
              </div>
              {draftPost.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {draftPost.location}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/categories" className="text-[#1c6dd6] hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-5 gap-3 md:gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow transform scale-90 lg:scale-70"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative">
              <span className="absolute top-17 left-2 bg-gray-100 px-2 py-3 mt-10 rounded-full text-xs font-medium text-gray-700">
                  {product.condition}
                </span>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg";
                  }}
                />
               
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 mb-1 truncate text-sm">
                  {product.title}
                </h3>
                <p className="text-[#fa9805] font-bold text-base mb-1">
                  {product.price}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
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