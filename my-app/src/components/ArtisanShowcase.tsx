import React from 'react';
import { MapPin, Calendar, Star, CheckCircle } from 'lucide-react';

const artisans = [
  {
    name: 'Meena Kumari',
    location: 'Panipat, Haryana',
    craft: 'Traditional Pottery',
    experience: '25 years',
    rating: 4.9,
    verified: true,
    image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    recentWork: 'Handcrafted Ceramic Bowl Set'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Jaipur, India',
    craft: 'Block Printing',
    experience: '18 years',
    rating: 4.8,
    verified: true,
    image: 'https://images.pexels.com/photos/8961207/pexels-photo-8961207.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    recentWork: 'Indigo Textile Collection'
  },
  {
    name: 'Mahesh Sharma',
    location: 'Ghaziabad, Uttar Pradesh',
    craft: 'Embroidered Textiles',
    experience: '30 years',
    rating: 5.0,
    verified: true,
    image: 'https://images.pexels.com/photos/8961304/pexels-photo-8961304.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    recentWork: 'Zapotec Wool Tapestry'
  }
];

export default function ArtisanShowcase() {
  return (
    <section id="artisans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown-900 mb-4">
            Featured Artisans
          </h2>
          <p className="text-lg text-warm-brown-700 max-w-2xl mx-auto">
            Meet the talented creators whose authentic work is protected by our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <div key={index} className="bg-cream-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {artisan.verified && (
                  <div className="absolute top-4 right-4 bg-sage-green-500 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-warm-brown-900 mb-1">{artisan.name}</h3>
                    <div className="flex items-center text-warm-brown-600 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artisan.location}
                    </div>
                  </div>
                  <div className="flex items-center text-earth-tan-600">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="text-sm font-medium">{artisan.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sage-green-700 font-medium mb-1">{artisan.craft}</p>
                  <div className="flex items-center text-warm-brown-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {artisan.experience} of experience
                  </div>
                </div>
                
                <div className="border-t border-earth-tan-200 pt-4">
                  <p className="text-sm text-warm-brown-700 mb-3">
                    <span className="font-medium">Recent work:</span> {artisan.recentWork}
                  </p>
                  <button className="w-full px-4 py-2 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-colors">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-sage-green-600 text-sage-green-600 rounded-lg hover:bg-sage-green-600 hover:text-white transition-all">
            Browse All Artisans
          </button>
        </div>
      </div>
    </section>
  );
}