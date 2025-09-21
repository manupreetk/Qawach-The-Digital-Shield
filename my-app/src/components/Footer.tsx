import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-accent transition-transform duration-500 hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold text-secondary">Qawach</h3>
                <p className="text-sm text-light/80">The Digital Shield</p>
              </div>
            </div>
            <p className="text-light/80 leading-relaxed">
              Protecting artisan heritage through AI-powered authenticity verification and blockchain provenance tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">For Artisans</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">For Buyers</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">Verification</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">How It Works</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">Documentation</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">API</a></li>
              <li><a href="#" className="text-light/80 hover:text-secondary transition-colors duration-500">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-light/80">hello@qawach.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-light/80">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-light/80">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light/80 text-sm">
              © 2024 Qawach. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-light/80 hover:text-secondary text-sm transition-colors duration-500">Privacy Policy</a>
              <a href="#" className="text-light/80 hover:text-secondary text-sm transition-colors duration-500">Terms of Service</a>
              <a href="#" className="text-light/80 hover:text-secondary text-sm transition-colors duration-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}