import React from 'react';
import CameraCard from './CameraCard';

export default function CameraGrid() {
  const cameras = [
    {
      title: "Main Playroom",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680373067_ab59aa66.webp",
      isLive: true,
      viewerCount: 12,
      description: "it's the paradise"
    },
    {
      title: "Quiet Reading Corner",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680374820_387a6a9e.webp",
      isLive: true,
      viewerCount: 8,
      description: "Story time and quiet learning activities"
    },
    {
      title: "Art & Creativity Zone",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680376588_25c7be23.webp",
      isLive: true,
      viewerCount: 15,
      description: "Creative expression through art and crafts"
    },
    {
      title: "Outdoor Playground",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680378335_f803835e.webp",
      isLive: false,
      viewerCount: 0,
      description: "Fresh air and physical activity time"
    },
    {
      title: "Nap & Rest Area",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680380147_b2c5d81b.webp",
      isLive: true,
      viewerCount: 6,
      description: "Peaceful rest time for little ones"
    },
    {
      title: "Meal Time Area",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680381914_3f9e20b9.webp",
      isLive: true,
      viewerCount: 10,
      description: "Healthy meals and social eating experiences"
    },
    {
      title: "Learning Circle",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680384502_c4a4e9c8.webp",
      isLive: true,
      viewerCount: 14,
      description: "Group learning and educational activities"
    },
    {
      title: "Sensory Play Room",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680386627_fe7bd667.webp",
      isLive: true,
      viewerCount: 9,
      description: "Tactile exploration and sensory development"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Live Camera Access
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See your child's day unfold in real-time across our different learning areas. 
            All cameras are secure and accessible only to registered parents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cameras.map((camera, index) => (
            <CameraCard key={index} {...camera} />
          ))}
        </div>
      </div>
    </section>
  );
}