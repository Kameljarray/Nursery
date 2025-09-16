import React from 'react';
import { Shield, Camera, Heart, Users, Clock, Award, Phone, MapPin } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Camera size={32} />,
      title: "Live Camera Access",
      description: "Secure webcam feeds from all areas of our facility, accessible 24/7 to registered parents"
    },
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "Comprehensive safety protocols, background-checked staff, and secure entry systems"
    },
    {
      icon: <Heart size={32} />,
      title: "Nurturing Environment",
      description: "Warm, loving care that supports each child's emotional and social development"
    },
    {
      icon: <Users size={32} />,
      title: "Small Class Sizes",
      description: "Low teacher-to-child ratios ensure personalized attention for every little one"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Hours",
      description: "Extended hours from 7:30 AM to 6:00 PM to accommodate working parents"
    },
    {
      icon: <Award size={32} />,
      title: "Qualified Staff",
      description: "Certified early childhood educators with ongoing professional development"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Nursery?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional childcare with transparency, safety, and love at the heart of everything we do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Family?</h3>
              <p className="text-blue-100 mb-6">
                Schedule a tour to see our facilities and meet our caring team. 
                We'd love to show you why parents trust us with their most precious gifts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Tour
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>123 Sunshine Street, Happy Valley, CA 90210</span>
              </div>
              <div className="text-blue-100 text-sm">
                Open Monday - Friday, 7:30 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}