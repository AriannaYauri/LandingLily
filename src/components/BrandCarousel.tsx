import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const brands = [
  { name: 'Meta', logo: 'Meta' },
  { name: 'Bank Pekao', logo: 'Bank Pekao' },
  { name: 'KFC', logo: 'KFC' },
  { name: 'IKEA', logo: 'IKEA' },
  { name: 'Booksy', logo: 'booksy' },
  { name: 'AMG', logo: 'AMG' }
];

const BrandCarousel: React.FC = () => {
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
    <section ref={ref} className="py-24 bg-black">
      <div className="container mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl font-bold mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We've partnered with some of the world's most innovative brands to deliver exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* First carousel - moving left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="brand-carousel"
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center items-center h-24 px-8"
                  >
                    <div className="text-white text-2xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-300">
                      {brand.logo}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Second carousel - moving right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="brand-carousel"
            >
              {[...brands].reverse().map((brand, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center items-center h-24 px-8"
                  >
                    <div className="text-white text-2xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-300">
                      {brand.logo}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;