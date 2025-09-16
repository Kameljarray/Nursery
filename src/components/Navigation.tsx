import React, { useState } from 'react';
import { Menu, X, Heart, Camera } from 'lucide-react';
import { Button } from './ui/button';
import LoginModal from './LoginModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900">Little Stars Nursery</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#cameras" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <Camera size={16} />
              Live Cameras
            </a>
            <a href="#staff" className="text-gray-700 hover:text-blue-600 font-medium">Our Team</a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-600 font-medium">Schedule</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#enrollment" className="text-gray-700 hover:text-blue-600 font-medium">Enroll</a>
            <LoginModal />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#cameras" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Live Cameras</a>
              <a href="#staff" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Team</a>
              <a href="#schedule" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Schedule</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#enrollment" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Enroll</a>
              <div className="px-3 py-2">
                <LoginModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}