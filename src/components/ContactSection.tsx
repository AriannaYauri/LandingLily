import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="contact" ref={ref} className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
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
            
            <div className="border-t border-gray-800 pt-8">
              {/* Additional content could go here */}
            </div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
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
                      <span className="mr-2">🇵🇱</span>
                      <span>+48</span>
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
              
              <button 
                type="submit" 
                className="button-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;