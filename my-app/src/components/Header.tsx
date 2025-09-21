import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <header className="bg-primary text-light shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-accent transition-transform duration-500 hover:scale-110" />
            <div>
              <h1 className="text-4xl font-extrabold text-secondary tracking-wide drop-shadow-lg">Qawach</h1>
              <p className="text-sm text-light/80">The Digital Shield</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-light/90 hover:text-secondary transition-colors duration-500">Features</a>
            <a href="#how-it-works" className="text-light/90 hover:text-secondary transition-colors duration-500">How It Works</a>
            <a href="#artisans" className="text-light/90 hover:text-secondary transition-colors duration-500">Artisans</a>
            <a href="#scanner" className="text-light/90 hover:text-secondary transition-colors duration-500">Verify</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border-2 border-secondary text-secondary rounded-xl bg-light/10 hover:bg-secondary hover:text-primary shadow-lg transition-all duration-500">
              Join as Artisan
            </button>
            <button className="px-4 py-2 bg-accent text-light rounded-xl hover:bg-secondary hover:text-primary shadow-lg transition-all duration-500">
              Sign In
            </button>
          </div>
          
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary bg-dark/95">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-light/90 hover:text-secondary transition-colors duration-500">Features</a>
              <a href="#how-it-works" className="text-light/90 hover:text-secondary transition-colors duration-500">How It Works</a>
              <a href="#artisans" className="text-light/90 hover:text-secondary transition-colors duration-500">Artisans</a>
              <a href="#scanner" className="text-light/90 hover:text-secondary transition-colors duration-500">Verify</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 border-2 border-secondary text-secondary rounded-xl bg-light/10 hover:bg-secondary hover:text-primary shadow-lg transition-all duration-500">
                  Join as Artisan
                </button>
                <button className="px-4 py-2 bg-accent text-light rounded-xl hover:bg-secondary hover:text-primary shadow-lg transition-all duration-500">
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