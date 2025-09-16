import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart size={20} />
              </div>
              <span className="text-xl font-bold">Little Stars Nursery</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing loving, safe, and nurturing childcare with complete transparency for peace of mind.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-pink-400 cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#cameras" className="hover:text-white transition-colors">Live Cameras</a></li>
              <li><a href="#staff" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Daily Schedule</a></li>
              <li><a href="#enrollment" className="hover:text-white transition-colors">Enrollment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@littlestarsnursery.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Sunshine Street<br />Happy Valley, CA 90210</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours & Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <div>
                  <div>Monday - Friday</div>
                  <div>7:30 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-medium mb-2">Age Groups</h4>
                <ul className="text-sm space-y-1">
                  <li>Infants (6 weeks - 18 months)</li>
                  <li>Toddlers (18 months - 3 years)</li>
                  <li>Preschool (3 - 5 years)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Little Stars Nursery. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#safety" className="hover:text-white transition-colors">Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}