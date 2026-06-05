import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Main Watercolor Background */}
      <img 
        src={ASSETS.heroBg} 
        alt="Rhetorica Backdrop" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="text-[8rem] md:text-[14rem] text-rhetorica-black leading-none tracking-tight">
          Rhetorica
        </h1>
      </motion.div>

      {/* Hamburger Menu Button */}
      <div className="absolute top-8 right-8 z-50">
        <button className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition-all">
          <div className="flex flex-col gap-1">
            <div className="w-6 h-[2px] bg-black"></div>
            <div className="w-4 h-[2px] bg-black ml-auto"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
