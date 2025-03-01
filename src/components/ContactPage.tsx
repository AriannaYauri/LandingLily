import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, ArrowLeft } from 'lucide-react';

interface ContactPageProps {
  onClose: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onClose }) => {
  // Prevent scrolling when contact page is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black z-40 overflow-y-auto pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="min-h-screen py-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex justify-between items-center mb-12">
              <button 
                onClick={onClose}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to home
              </button>
              
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Let's talk <br />business
                </h2>
                
                <div className="mb-12">
                  <blockquote className="text-xl italic mb-4">
                    "From strategy to execution, we design transformative solutions for brands ready to make an impact."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                    <div>
                      <p className="font-bold">Kamil Tatol</p>
                      <p className="text-gray-400">CEO, Flying Bisons</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Offices</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold">Warsaw</p>
                        <p className="text-gray-400">Złota 59, 00-120</p>
                        <p className="text-gray-400">Warsaw, Poland</p>
                      </div>
                      <div>
                        <p className="font-semibold">London</p>
                        <p className="text-gray-400">123 City Road</p>
                        <p className="text-gray-400">London, UK</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail size={18} className="text-indigo-400 mr-2" />
                        <a href="mailto:hello@flyingbisons.com" className="text-indigo-400 hover:underline">
                          hello@flyingbisons.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone size={18} className="text-indigo-400 mr-2" />
                        <a href="tel:+48882363099" className="text-indigo-400 hover:underline">
                          +48 882 363 099
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <p className="mb-6 flex items-center">
                  Prefer e-mail? <a href="mailto:hello@flyingbisons.com" className="text-indigo-400 ml-2 hover:underline">hello@flyingbisons.com</a>
                </p>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Your full name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="form-input" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Company email <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="form-input" 
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone number
                      </label>
                      <div className="flex">
                        <div className="bg-gray-900 border border-gray-700 rounded-l-md px-3 py-3 flex items-center">
                          <span className="mr-2">PE</span>
                          <span>+51</span>
                        </div>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="form-input rounded-l-none" 
                          placeholder="882 363 099"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company name (optional)
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        className="form-input" 
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      How can we help?
                    </label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="form-input" 
                      placeholder="Tell us about your project or ask a question"
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Project budget range
                    </label>
                    <select id="budget" className="form-input">
                      <option value="">Select a budget range</option>
                      <option value="10-25k">$10,000 - $25,000</option>
                      <option value="25-50k">$25,000 - $50,000</option>
                      <option value="50-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  
                  <div className="form-group flex items-start mb-8">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-400">
                      I agree to the <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a> and consent to the processing of my personal data.
                    </label>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="button-primary w-full md:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPage;