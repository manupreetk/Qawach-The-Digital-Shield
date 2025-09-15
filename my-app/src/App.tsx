import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ArtisanShowcase from './components/ArtisanShowcase';
import QRScanner from './components/QRScanner';
import Footer from './components/Footer';

function App() {

  return (
    
     <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ArtisanShowcase />
      <QRScanner />
      <Footer />
    </div>
  );
}

export default App;
