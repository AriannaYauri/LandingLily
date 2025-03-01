import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandCarousel from './components/BrandCarousel';
import BenefitsSection from './components/BenefitsSection';
import CallToAction from './components/CallToAction';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="bg-black text-white">
      <Navbar onContactClick={toggleContact} />
      
      <div className="px-4 md:px-8 lg:px-12">
        {showContact ? (
          <ContactPage onClose={toggleContact} />
        ) : (
          <>
            <HeroSection />
            <BrandCarousel />
            <BenefitsSection />
            <CallToAction onContactClick={toggleContact} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;