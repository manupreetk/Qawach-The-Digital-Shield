import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-warm-brown-50 to-sage-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-warm-brown-900 mb-6 leading-tight">
              Protecting Artisan Heritage with <span className="text-sage-green-600">AI & Blockchain</span>
            </h2>
            <p className="text-lg text-warm-brown-700 mb-8 leading-relaxed">
              Every handcrafted piece tells a story. Qawach ensures that story stays with its creator, 
              preventing design theft and celebrating authentic craftsmanship through innovative provenance tracking.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-all transform hover:scale-105 shadow-lg">
                Register Your Craft
              </button>
              <button className="px-8 py-3 border-2 border-warm-brown-600 text-warm-brown-600 rounded-lg hover:bg-warm-brown-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-earth-tan-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sage-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-sage-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown-900">AI-Powered Authentication</h3>
                    <p className="text-warm-brown-600 text-sm">Unique digital fingerprint for every piece</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-earth-tan-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-earth-tan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown-900">Blockchain Provenance</h3>
                    <p className="text-warm-brown-600 text-sm">Immutable record of authenticity</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-warm-brown-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-brown-900">Global Recognition</h3>
                    <p className="text-warm-brown-600 text-sm">Connect artisans worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative pattern */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-sage-green-300 rounded-full transform rotate-12"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-20">
              <div className="w-full h-full bg-earth-tan-300 rounded-full transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}