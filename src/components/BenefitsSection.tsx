import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle } from 'lucide-react';

const stats = [
  { value: '+84.3%', label: 'CR uplift for KFC e-commerce in the first year' },
  { value: '10.3 million', label: 'Unique monthly users on naTemat\'s media platform' },
  { value: '€500k', label: 'ROI for OnniBus in the first year' },
  { value: 'Unlimited', label: 'Possibilities for your business when you partner with us' }
];

const BenefitsSection: React.FC = () => {
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
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto">
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
          className="mb-16"
        >
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl mb-6"
          >
            Working with us is not a cost. It's an investment.
          </motion.p>
          
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl"
          >
            Make more sales. Expand and engage your user base. Streamline your customer experience.
          </motion.h2>
        </motion.div>
        
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
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="border-t border-gray-800 pt-6"
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative"
        >
          <Circle className="w-64 h-64 text-indigo-500/10 stroke-[0.5]" />
          <Circle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-indigo-500/20 stroke-[0.5]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-500/10 rounded-full blur-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;