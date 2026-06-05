import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const About = () => {
  return (
    <section id="about" className="bg-white">
      {/* Introduction Text with Heading on Left */}
      <div className="py-24 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-start">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-pirata text-black"
        >
          About
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="text-gray-700 leading-relaxed font-montserrat text-lg md:text-xl font-medium">
            Rhetorica '26 is the Fifth Edition of the Annual Literary Festival of Techno International New Town, organised by LITWITS, the Literary Club of Techno International New Town. Scheduled for 20th and 21st January 2026, the festival features a diverse lineup of events including debate, poetry, storytelling, and creative writing - creating a platform where voices rise, ideas clash, and the transformative power of words takes center stage. Whether you're a seasoned performer or a first-time participant, Rhetorica is where the literary community comes alive.
          </p>
        </motion.div>
      </div>

      {/* '26 Edition Section with Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-32 px-6 md:px-20 overflow-hidden"
      >
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.heroBg} 
            alt="" 
            className="w-full h-full object-cover blur-xl opacity-30 scale-110"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-black leading-tight">
              Our '26 Edition
            </h2>
            <div className="space-y-6 text-gray-800 leading-relaxed font-montserrat text-lg font-medium">
              <p>
                This year, we’re organising Rhetorica on a bigger and grander scale, having received registrations from over 35+ Colleges across West Bengal, with over 140+ participants having registered for our multiple events across the two days of our event. We’ve also obtained various brand partnerships across diverse industries.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/40 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-black/5 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <div className="text-6xl font-montserrat font-black text-black leading-none">140+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mt-3">Participants</div>
              </div>
              <div>
                <div className="text-6xl font-montserrat font-black text-black leading-none">5+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mt-3">Events</div>
              </div>
              <div>
                <div className="text-6xl font-montserrat font-black text-black leading-none">8+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mt-3">Brand Partnerships</div>
              </div>
              <div>
                <div className="text-6xl font-montserrat font-black text-black leading-none">35+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mt-3">Colleges</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
