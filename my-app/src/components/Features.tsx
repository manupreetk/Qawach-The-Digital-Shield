import React from 'react';
import { QrCode, Camera, Award, Users, ShieldCheck, Palette } from 'lucide-react';

const colorMap = {
  'sage-green': {
    bg: 'bg-green-500',
    hoverBg: 'group-hover:bg-green-600',
    text: 'text-green-700',
    iconHover: 'group-hover:text-green-800'
  },
  'earth-tan': {
    bg: 'bg-amber-100',
    hoverBg: 'group-hover:bg-amber-200',
    text: 'text-amber-600',
    iconHover: 'group-hover:text-amber-700'
  },
  'dusty-rose': {
    bg: 'bg-rose-100',
    hoverBg: 'group-hover:bg-rose-200',
    text: 'text-rose-600',
    iconHover: 'group-hover:text-rose-700'
  }
};

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
    color: 'dusty-rose'
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
    color: 'dusty-rose'
  }
];

export default function App() {
  return (
    <div className="font-sans antialiased text-stone-800 bg-[#f8f5e4] min-h-screen">
      <section id="features" className="py-20 bg-[#f8f5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4 tracking-tight">
              Revolutionizing Artisan Authentication
            </h2>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto">
              Our innovative platform combines cutting-edge technology with respect for traditional craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorMap[feature.color];

              return (
                <div 
                  key={index} 
                  className="group relative overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl shadow-xl hover:shadow-2xl"
                >
                  <div className="relative bg-white rounded-3xl p-8 h-full border border-stone-200 transition-colors duration-300">
                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 
                      transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Icon className={`h-7 w-7 ${colors.text} transition-colors duration-300 ${colors.iconHover}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">{feature.title}</h3>
                    <p className="text-stone-700 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
