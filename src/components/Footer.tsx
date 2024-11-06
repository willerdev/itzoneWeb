import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c6dd6] text-white py-8 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ITZONE</h3>
            <p className="text-sm">Your trusted marketplace for buying and selling products.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
              <li><a href="/terms" className="hover:text-gray-200">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/electronics" className="hover:text-gray-200">Electronics</a></li>
              <li><a href="/fashion" className="hover:text-gray-200">Fashion</a></li>
              <li><a href="/home" className="hover:text-gray-200">Home & Living</a></li>
              <li><a href="/sports" className="hover:text-gray-200">Sports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <p className="text-sm mb-2">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200">Facebook</a>
              <a href="#" className="hover:text-gray-200">Twitter</a>
              <a href="#" className="hover:text-gray-200">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p>&copy; 2024 ITZONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;