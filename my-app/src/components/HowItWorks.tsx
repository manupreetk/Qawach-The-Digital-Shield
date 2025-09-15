import React from 'react';
import { Upload, Cpu, QrCode, Shield } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Craft',
    description: 'Artisans photograph and upload their handcrafted pieces with story details',
    step: '01'
  },
  {
    icon: Cpu,
    title: 'AI Analysis',
    description: 'Our AI creates a unique digital fingerprint of design elements and craftsmanship',
    step: '02'
  },
  {
    icon: QrCode,
    title: 'Generate Certificate',
    description: 'A blockchain-secured certificate with QR code is created for the authentic piece',
    step: '03'
  },
  {
    icon: Shield,
    title: 'Verify Authenticity',
    description: 'Buyers scan the QR code to verify authenticity and learn the artisan\'s story',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-sage-green-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown-900 mb-4">
            How Qawach Works
          </h2>
          <p className="text-lg text-warm-brown-700 max-w-2xl mx-auto">
            Simple steps to protect and authenticate your handcrafted masterpieces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center group-hover:shadow-xl transition-all duration-300 border-4 border-sage-green-200">
                    <Icon className="h-10 w-10 text-sage-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-earth-tan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full">
                      <div className="w-full h-0.5 bg-sage-green-200 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                          <div className="w-2 h-2 bg-sage-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-warm-brown-900 mb-3">{step.title}</h3>
                <p className="text-warm-brown-700 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}