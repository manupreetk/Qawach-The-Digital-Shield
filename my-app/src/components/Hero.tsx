import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
  <section className="bg-gradient-to-br from-vintage-paper to-vintage-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6 leading-tight">
              Protecting Artisan Heritage with <span className="ai-blockchain">AI & Blockchain</span>
            </h2>
            <p className="text-lg text-vintage-black mb-8 leading-relaxed">
              Every handcrafted piece tells a story. Qawach ensures that story stays with its creator, 
              preventing design theft and celebrating authentic craftsmanship through innovative provenance tracking.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-vintage-green text-vintage-black rounded-xl hover:bg-vintage-gold hover:text-vintage-brown shadow-vintage transition-all duration-500 transform hover:scale-110">
                Register Your Craft
              </button>
              <button className="px-8 py-3 border-2 border-vintage-brown text-vintage-brown rounded-xl hover:bg-vintage-brown hover:text-vintage-cream shadow-vintage transition-all duration-500">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-vintage-paper rounded-2xl p-8 shadow-vintage">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-vintage-green rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-vintage-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">AI-Powered Authentication</h3>
                    <p className="text-vintage-black text-sm">Unique digital fingerprint for every piece</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-vintage-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Blockchain Provenance</h3>
                    <p className="text-vintage-black text-sm">Immutable record of authenticity</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-vintage-red rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-vintage-cream" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Global Recognition</h3>
                    <p className="text-vintage-black text-sm">Connect artisans worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative pattern */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-vintage-green rounded-full transform rotate-12"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 opacity-20">
              <div className="w-full h-full bg-vintage-gold rounded-full transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}