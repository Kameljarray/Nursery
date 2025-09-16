import React from 'react';
import { Eye, Shield, Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Watch Your Little One
              <span className="text-blue-600 block">Grow & Learn</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay connected with live webcam access to see your child's daily adventures, 
              learning moments, and joyful interactions in our safe, nurturing environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Eye size={20} />
                Access Live Cameras
                <ArrowRight size={16} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Visit
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Secure Access</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye className="text-green-600" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Live Monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="text-pink-600" size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">Peace of Mind</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680368964_cd625bf3.webp" 
              alt="Happy children in nursery"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">8 cameras online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}