import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ArtisanShowcase from './components/ArtisanShowcase';
import QRScanner from './components/QRScanner';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import JoinArtisan from "./components/JoinArtisan";
import Signup from "./components/Signup";

function App() {
    return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <ArtisanShowcase />
              <QRScanner />
            </>
          }
        />

        {/* Auth pages */}
        <Route path="/signin" element={<Signup />} />
        <Route path="/join" element={<JoinArtisan />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

