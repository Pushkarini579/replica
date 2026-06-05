import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="contact" className="bg-white py-32 px-6 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 order-2 md:order-1"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.476!3d22.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275350398a5b9%3A0x75e165427d11f62!2sTechno%20International%20New%20Town!5e0!3m2!1sen!2sin!4v1717436000000!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Guide Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 order-1 md:order-2"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6 leading-tight">
                Techno International<br />New Town
              </h2>
              <p className="text-gray-600 font-montserrat text-lg leading-relaxed font-medium">
                1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Chakpachuria, West Bengal 700156
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-montserrat font-black uppercase tracking-[0.3em] text-gray-400">Guide</h3>
              <ul className="space-y-4 text-gray-700 font-montserrat text-lg font-medium">
                <li className="flex gap-4">
                  <span className="text-rhetorica-gold font-black">•</span>
                  <span>15 mins from Netaji Subhash Chandra Bose International Airport.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-rhetorica-gold font-black">•</span>
                  <span>2 mins from Biswa Bangla Gate.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-rhetorica-gold font-black">•</span>
                  <span>4 mins from Ecospace Business Park.</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Techno+International+New+Town+Kolkata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#00a544] text-white px-12 py-5 rounded-2xl font-montserrat font-black uppercase tracking-widest hover:bg-[#008138] transition-all shadow-xl hover:shadow-2xl active:scale-95"
            >
              View on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
