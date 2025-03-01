import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              Hello, we're Flying Bisons – the leading Digital
              Consulting & Delivery firm creating world-class
              digital products and shaping digital experiences
              for millions of people around the globe.
            </p>
            
            <motion.h1 
              className="section-title mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Unleash Your <br />
              Digital Potential
            </motion.h1>
          </motion.div>
          
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Circle className="w-full h-full text-indigo-500/30 stroke-[1]" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full"
                animate={{ 
                  boxShadow: ['0 0 10px 2px rgba(99, 102, 241, 0.5)', '0 0 20px 5px rgba(99, 102, 241, 0.7)', '0 0 10px 2px rgba(99, 102, 241, 0.5)']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;