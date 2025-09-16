import React from 'react';
import { Star, Award, Heart } from 'lucide-react';

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  experience: string;
  qualifications: string[];
  message: string;
  rating: number;
}

export default function StaffCard({ name, role, image, experience, qualifications, message, rating }: StaffCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-blue-100"
        />
        <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
        <p className="text-gray-500 text-sm">{experience}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1 justify-center">
          {qualifications.slice(0, 2).map((qual, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <Award size={10} className="inline mr-1" />
              {qual}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Heart size={16} className="text-pink-500 mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-sm italic">"{message}"</p>
        </div>
      </div>
    </div>
  );
}