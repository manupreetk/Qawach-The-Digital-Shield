import React from 'react';
import { QrCode, Camera, Award, Users, ShieldCheck, Palette } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'QR Code Authentication',
    description: 'Each piece gets a unique QR code linking to its authentic story and maker',
    color: 'sage-green'
  },
  {
    icon: Camera,
    title: 'AI Visual Recognition',
    description: 'Advanced AI creates unique fingerprints to identify authentic vs. copied designs',
    color: 'earth-tan'
  },
  {
    icon: ShieldCheck,
    title: 'Blockchain Security',
    description: 'Immutable records ensure provenance data cannot be altered or falsified',
    color: 'warm-brown'
  },
  {
    icon: Users,
    title: 'Artisan Network',
    description: 'Connect with a global community of verified craftspeople and their stories',
    color: 'sage-green'
  },
  {
    icon: Award,
    title: 'Authenticity Certificates',
    description: 'Digital certificates that travel with your work, proving origin and authorship',
    color: 'earth-tan'
  },
  {
    icon: Palette,
    title: 'Creative Protection',
    description: 'Safeguard your unique designs from unauthorized copying and mass production',
    color: 'warm-brown'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown-900 mb-4">
            Revolutionizing Artisan Authentication
          </h2>
          <p className="text-lg text-warm-brown-700 max-w-3xl mx-auto">
            Our innovative platform combines cutting-edge technology with respect for traditional craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-cream-50 rounded-xl p-8 h-full shadow-lg hover:shadow-xl border border-earth-tan-100">
                  <div className={`w-14 h-14 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-${feature.color}-200 transition-colors`}>
                    <Icon className={`h-7 w-7 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-brown-900 mb-4">{feature.title}</h3>
                  <p className="text-warm-brown-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}