import React from 'react';
import StaffCard from './StaffCard';

export default function StaffSection() {
  const staff = [
    {
      name: "Sarah Johnson",
      role: "Lead Teacher",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680390843_6558ddcc.webp",
      experience: "8 years experience",
      qualifications: ["Early Childhood Ed", "CPR Certified"],
      message: "Every child deserves to feel loved and valued while they learn and grow.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Activity Coordinator",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680392627_7861222e.webp",
      experience: "5 years experience",
      qualifications: ["Child Development", "First Aid"],
      message: "I love watching children discover new things and seeing their faces light up!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Infant Specialist",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680394379_dcc218e1.webp",
      experience: "6 years experience",
      qualifications: ["Infant Care", "Nutrition Cert"],
      message: "Creating a nurturing environment where babies can thrive is my passion.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Art Teacher",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680396122_ed3b934a.webp",
      experience: "4 years experience",
      qualifications: ["Art Education", "Child Psychology"],
      message: "Art helps children express themselves in beautiful and unique ways.",
      rating: 4
    },
    {
      name: "Lisa Thompson",
      role: "Music Teacher",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680397818_f7db6ea8.webp",
      experience: "7 years experience",
      qualifications: ["Music Education", "Early Learning"],
      message: "Music brings joy and helps develop language and social skills.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Physical Education",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680399587_2c36eed5.webp",
      experience: "3 years experience",
      qualifications: ["PE Degree", "Youth Sports"],
      message: "Physical activity is essential for healthy development and confidence.",
      rating: 4
    },
    {
      name: "Maria Garcia",
      role: "Language Teacher",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680401328_62944f9a.webp",
      experience: "9 years experience",
      qualifications: ["Linguistics", "ESL Certified"],
      message: "Language opens doors to understanding and connecting with others.",
      rating: 5
    },
    {
      name: "Robert Kim",
      role: "Assistant Director",
      image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680403065_9904aef7.webp",
      experience: "12 years experience",
      qualifications: ["Education Admin", "Child Safety"],
      message: "Ensuring every child feels safe and supported is our top priority.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Caring Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our qualified and passionate educators are dedicated to providing the best care 
            and learning experiences for your child.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staff.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}