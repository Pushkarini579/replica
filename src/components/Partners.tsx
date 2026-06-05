import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl text-black mb-20 font-pirata text-center"
        >
          Collaborations
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity"
        >
          {ASSETS.brandLogos.map((logo, i) => (
            <motion.img 
              key={i} 
              variants={itemVariants}
              src={logo} 
              alt="Partner Logo" 
              className="h-10 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
