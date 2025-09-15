import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-warm-brown-900 text-cream-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-sage-green-400" />
            <div>
              <h1 className="text-2xl font-bold">Qawach</h1>
              <p className="text-sm text-cream-200">The Digital Shield</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-sage-green-300 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-sage-green-300 transition-colors">How It Works</a>
            <a href="#artisans" className="hover:text-sage-green-300 transition-colors">Artisans</a>
            <a href="#scanner" className="hover:text-sage-green-300 transition-colors">Verify</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-sage-green-400 text-sage-green-400 rounded-lg hover:bg-sage-green-400 hover:text-warm-brown-900 transition-all">
              Join as Artisan
            </button>
            <button className="px-4 py-2 bg-sage-green-500 text-warm-brown-900 rounded-lg hover:bg-sage-green-400 transition-all">
              Sign In
            </button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-brown-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-sage-green-300 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-sage-green-300 transition-colors">How It Works</a>
              <a href="#artisans" className="hover:text-sage-green-300 transition-colors">Artisans</a>
              <a href="#scanner" className="hover:text-sage-green-300 transition-colors">Verify</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 border border-sage-green-400 text-sage-green-400 rounded-lg hover:bg-sage-green-400 hover:text-warm-brown-900 transition-all">
                  Join as Artisan
                </button>
                <button className="px-4 py-2 bg-sage-green-500 text-warm-brown-900 rounded-lg hover:bg-sage-green-400 transition-all">
                  Sign In
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}