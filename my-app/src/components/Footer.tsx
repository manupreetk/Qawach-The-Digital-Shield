import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-brown-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-sage-green-400" />
              <div>
                <h3 className="text-xl font-bold">Qawach</h3>
                <p className="text-sm text-cream-200">The Digital Shield</p>
              </div>
            </div>
            <p className="text-cream-300 leading-relaxed">
              Protecting artisan heritage through AI-powered authenticity verification and blockchain provenance tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">For Artisans</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">For Buyers</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">Verification</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">API</a></li>
              <li><a href="#" className="text-cream-300 hover:text-sage-green-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sage-green-400" />
                <span className="text-cream-300">hello@qawach.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sage-green-400" />
                <span className="text-cream-300">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sage-green-400" />
                <span className="text-cream-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-warm-brown-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-400 text-sm">
              © 2024 Qawach. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-cream-400 hover:text-sage-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream-400 hover:text-sage-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-400 hover:text-sage-green-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}