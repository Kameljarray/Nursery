import React, { useState } from 'react';
import { Eye, Lock, Users } from 'lucide-react';

interface CameraCardProps {
  title: string;
  image: string;
  isLive: boolean;
  viewerCount: number;
  description: string;
}

export default function CameraCard({ title, image, isLive, viewerCount, description }: CameraCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          {isLive ? (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              LIVE
            </span>
          ) : (
            <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              OFFLINE
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <Users size={12} />
          {viewerCount}
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Eye size={16} />
              View Live
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
            <Lock size={14} />
            Secure Access
          </button>
          <span className="text-xs text-gray-500">Updated 2min ago</span>
        </div>
      </div>
    </div>
  );
}