import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">flyingbisons</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="dropdown">
              <a href="#services" className="nav-link">Services</a>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Digital Strategy</a>
                <a href="#" className="dropdown-item">UX/UI Design</a>
                <a href="#" className="dropdown-item">Web Development</a>
              </div>
            </div>
            
            <div className="dropdown">
              <a href="#expertise" className="nav-link">Expertise</a>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">E-commerce</a>
                <a href="#" className="dropdown-item">Fintech</a>
                <a href="#" className="dropdown-item">Enterprise Solutions</a>
              </div>
            </div>
            
            <div className="dropdown">
              <a href="#projects" className="nav-link">Projects</a>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Featured</a>
                <a href="#" className="dropdown-item">Recent</a>
                <a href="#" className="dropdown-item">Case Studies</a>
              </div>
            </div>
            
            <a href="#clients" className="nav-link">Clients</a>
            
            <div className="dropdown">
              <a href="#resources" className="nav-link">Resources</a>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Blog</a>
                <a href="#" className="dropdown-item">Whitepapers</a>
                <a href="#" className="dropdown-item">Webinars</a>
              </div>
            </div>
            
            <div className="dropdown">
              <a href="#company" className="nav-link">Company</a>
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">About Us</a>
                <a href="#" className="dropdown-item">Team</a>
                <a href="#" className="dropdown-item">Careers</a>
              </div>
            </div>
            
            <a href="#" onClick={handleContactClick} className="nav-link">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4">
            <a href="#services" className="block py-3 text-white border-b border-gray-800">Services</a>
            <a href="#expertise" className="block py-3 text-white border-b border-gray-800">Expertise</a>
            <a href="#projects" className="block py-3 text-white border-b border-gray-800">Projects (156)</a>
            <a href="#clients" className="block py-3 text-white border-b border-gray-800">Clients</a>
            <a href="#resources" className="block py-3 text-white border-b border-gray-800">Resources</a>
            <a href="#company" className="block py-3 text-white border-b border-gray-800">Company</a>
            <a href="#" onClick={handleContactClick} className="block py-3 text-white">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;