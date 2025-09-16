import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680772661_3964e540.webp",
    text: "The webcam feature gives me such peace of mind. I can check on Emma throughout the day and see how happy she is.",
    rating: 5
  },
  {
    name: "Michael Chen",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680774684_2d2ff962.webp",
    text: "Amazing staff and facilities. The daily updates and live cameras make me feel connected even when I'm at work.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680776748_ec1d15a6.webp",
    text: "My daughter loves going to Little Stars. The teachers are so caring and the transparency is incredible.",
    rating: 5
  },
  {
    name: "David Thompson",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680778619_8c90522f.webp",
    text: "Best decision we made for our son. The webcam access and daily reports keep us informed and confident.",
    rating: 5
  },
  {
    name: "Amanda Wilson",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680780409_6ed45cbe.webp",
    text: "The staff goes above and beyond. Being able to see my child's day through the cameras is priceless.",
    rating: 5
  },
  {
    name: "Robert Kim",
    image: "https://d64gsuwffb70l.cloudfront.net/68c4126d376a9af0915184ea_1757680782145_2c4fcc3a.webp",
    text: "Exceptional care and communication. The webcam feature makes the transition back to work so much easier.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the families who trust us with their most precious gifts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}