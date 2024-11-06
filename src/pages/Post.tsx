import React, { useState, useEffect } from 'react';
import { Camera, MapPin, DollarSign} from 'lucide-react';
import { db, storage, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types/firebase';

const categories = {
  electronics: ['Phones', 'Laptops', 'Tablets', 'Cameras', 'Accessories'],
  vehicles: ['Cars', 'Motorcycles', 'Bicycles', 'Auto Parts'],
  property: ['Houses', 'Apartments', 'Land', 'Commercial'],
  fashion: ['Clothing', 'Shoes', 'Watches', 'Accessories'],
  'home-furniture': ['Furniture', 'Appliances', 'Decor', 'Garden'],
};

const Post = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(() => {
    // Initialize form data from localStorage if it exists
    const savedData = localStorage.getItem('postDraft');
    return savedData ? JSON.parse(savedData) : {
      title: '',
      category: '',
      subcategory: '',
      brand: '',
      price: '',
      location: '',
      description: '',
      negotiable: false,
      delivery: 'free' as 'free' | 'charged',
      condition: 'new'
    };
  });
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Add effect to save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('postDraft', JSON.stringify(formData));
  }, [formData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 3);
      setImages(filesArray);
      
      // Create preview URLs
      const urls = filesArray.map(file => URL.createObjectURL(file));
      setImageUrls(urls);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      // Upload images
      const uploadedUrls = await Promise.all(
        images.map(async (image) => {
          try {
            const storageRef = ref(storage, `posts/${Date.now()}-${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            const downloadURL = await getDownloadURL(snapshot.ref);
            return downloadURL;
          } catch (error) {
            console.error('Error uploading image:', error);
            throw new Error(`Failed to upload image: ${image.name}`);
          }
        })
      );

      // Save post data
      const postData: Post = {
        ...formData,
        images: uploadedUrls,
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName || 'Anonymous User',
        createdAt: new Date().toISOString(),
        status: 'active'
      };

      const docRef = await addDoc(collection(db, 'posts'), postData);
      // Clear the draft from localStorage after successful post
      localStorage.removeItem('postDraft');
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Optional: Add a function to clear draft
  const clearDraft = () => {
    localStorage.removeItem('postDraft');
    setFormData({
      title: '',
      category: '',
      subcategory: '',
      brand: '',
      price: '',
      location: '',
      description: '',
      negotiable: false,
      delivery: 'free' as 'free' | 'charged',
      condition: 'new'
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Post Your Item</h1>
        <button
          onClick={clearDraft}
          type="button"
          className="text-sm text-red-600 hover:text-red-800"
        >
          Clear Draft
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Images Upload Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photos (Max 3)
          </label>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="images"
              max={3}
            />
            <label
              htmlFor="images"
              className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#1c6dd6]"
            >
              <Camera className="h-8 w-8 text-gray-400" />
            </label>
            {imageUrls.map((url, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
              placeholder="What are you selling?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value, subcategory: ''})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
              required
            >
              <option value="">Select a category</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subcategory
            </label>
            <select
              value={formData.subcategory}
              onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
              required
            >
              <option value="">Select a subcategory</option>
              {formData.category && categories[formData.category as keyof typeof categories].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price and Negotiation */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand
            </label>
            <input
              type="text"
              value={formData.brand}
              onChange={(e) => setFormData({...formData, brand: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
              placeholder="Enter brand"
            />
          </div>
        </div>

        {/* Location and Delivery */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Condition
            </label>
            <select
              value={formData.condition}
              onChange={(e) => setFormData({...formData, condition: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
              required
            >
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>
        </div>

        {/* Additional Options */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="negotiable"
              checked={formData.negotiable}
              onChange={(e) => setFormData({...formData, negotiable: e.target.checked})}
              className="h-4 w-4 text-[#1c6dd6] focus:ring-[#1c6dd6] border-gray-300 rounded"
            />
            <label htmlFor="negotiable" className="ml-2 text-sm text-gray-700">
              Price is negotiable
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Option
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="free"
                  checked={formData.delivery === 'free'}
                  onChange={(e) => setFormData({...formData, delivery: e.target.value})}
                  className="h-4 w-4 text-[#1c6dd6] focus:ring-[#1c6dd6] border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Free Delivery</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="charged"
                  checked={formData.delivery === 'charged'}
                  onChange={(e) => setFormData({...formData, delivery: e.target.value})}
                  className="h-4 w-4 text-[#1c6dd6] focus:ring-[#1c6dd6] border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Delivery Charges Apply</span>
              </label>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1c6dd6]"
            rows={4}
            placeholder="Describe your item"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1c6dd6] text-white py-3 rounded-lg font-medium hover:bg-[#1859ac] transition-colors disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Post Item'}
        </button>
      </form>
    </div>
  );
};

export default Post;