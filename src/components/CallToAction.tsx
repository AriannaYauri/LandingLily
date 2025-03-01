import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onContactClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onContactClick }) => {
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
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12"
          >
            Unleash Your Digital Potential - Today.
          </motion.h2>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <button 
              onClick={onContactClick}
              className="button-primary group"
            >
              Let's Talk 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="ml-2"
              >
                <ArrowRight size={20} />
              </motion.span>
            </button>
          </motion.div>
          
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="mt-12 text-gray-400"
          >
            Join our list of clients. You'll be in good company.
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="flex flex-wrap justify-center items-center gap-8 mt-8"
          >
            {['AMG', 'KFC', 'booksy', 'IKEA', 'Bank Pekao'].map((brand, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                className="text-white text-xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-full h-full bg-gradient-to-br from-indigo-900/10 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;