import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('January 20, 2026 00:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      id="countdown"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/50 backdrop-blur-sm py-12 px-6 rounded-3xl shadow-card max-w-2xl mx-auto -mt-24 relative z-20"
    >
      <div className="text-center mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-1">Begins On</p>
        <h2 className="text-3xl font-montserrat font-black uppercase">20th Jan 2026</h2>
      </div>
      
      <div className="flex gap-4 md:gap-8 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-16 h-20 md:w-24 md:h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2">
              <span className="text-4xl md:text-6xl font-pirata">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold font-montserrat">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;
