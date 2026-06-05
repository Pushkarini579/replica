import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ASSETS } from '../assets';

const events = [
  { name: 'Baak Bitorko', type: 'Debate Competition' },
  { name: 'Khône Kotha', type: 'Extempore Competition' },
  { name: 'Antaraal', type: 'Poetry Competition' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const EventCard = ({ event }: { event: typeof events[0] }) => {
  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/5] overflow-hidden group rounded-t-[10rem]">
        {/* The Arched Frame */}
        <div className="absolute inset-0 z-10 bg-no-repeat bg-contain bg-center pointer-events-none" 
             style={{ backgroundImage: `url(${ASSETS.windowGraphic})` }}>
        </div>
        
        {/* The Illustration inside the arch */}
        <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
          <div className="w-[85%] h-[90%] overflow-hidden rounded-t-[10rem] border-4 border-white/20">
            <img 
              src={ASSETS.heroBg} 
              alt="" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Event Name over the window */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-12 pt-12">
           <h3 className="text-4xl md:text-5xl text-black font-pirata leading-none whitespace-pre-line">
             {event.name}
           </h3>
        </div>
      </div>
      
      <p className="mt-8 text-sm md:text-base font-montserrat font-bold text-gray-900 tracking-[0.2em] uppercase">
        {event.type}
      </p>
    </motion.div>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-32 px-6 bg-rhetorica-cream">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl text-black mb-24 font-pirata"
        >
          Events
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-16"
        >
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
