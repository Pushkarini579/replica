import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-[#f9f6f0] pt-24 pb-12 overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Top Links Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-black">
          <div className="space-y-6">
            <h2 className="text-6xl font-pirata leading-none">Rhetorica '26</h2>
            <div className="space-y-4 text-sm font-montserrat font-bold">
              <p>Annual Literary Festival of<br />Techno International New Town</p>
              <p>Organised by LITWITS</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-montserrat font-black mb-8 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm font-montserrat text-gray-800 font-bold">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">'26 Edition</a></li>
              <li><a href="#countdown" className="hover:text-blue-600 transition-colors">Countdown</a></li>
              <li><a href="#events" className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="#partners" className="hover:text-blue-600 transition-colors">Collaborations</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Map</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-montserrat font-black mb-8 uppercase tracking-widest">Documents</h3>
            <ul className="space-y-3 text-sm font-montserrat text-gray-800 font-bold">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Brochure</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sponsorship Deck</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-montserrat font-black mb-8 uppercase tracking-widest">Follow us on Social Media</h3>
            <div className="flex gap-3 mb-10">
               {[
                 { id: 'instagram', icon: 'fab fa-instagram' },
                 { id: 'threads', icon: 'fab fa-threads' },
                 { id: 'facebook', icon: 'fab fa-facebook-f' }
               ].map(social => (
                 <a key={social.id} href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition-all text-sm">
                   <i className={social.icon}></i>
                 </a>
               ))}
            </div>
            <div className="space-y-3 text-xs font-montserrat font-bold text-gray-800">
              <div className="flex items-center gap-3">
                <i className="far fa-envelope text-sm"></i>
                <a href="mailto:rhetorica.tint@gmail.com" className="hover:text-blue-600 transition-colors">rhetorica.tint@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="far fa-envelope text-sm"></i>
                <a href="mailto:literary.club@tict.edu.in" className="hover:text-blue-600 transition-colors">literary.club@tict.edu.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full relative mt-12">
        <img 
          src={ASSETS.footerIllustration} 
          alt="Rhetorica Scenic Illustration" 
          className="w-full h-auto object-contain max-w-[1400px] mx-auto"
        />
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-12 space-y-2 px-6 font-montserrat font-bold text-gray-900 text-sm">
        <p>
          Built with <span className="text-pink-500">❤️</span> by <a href="#" className="text-blue-500 hover:underline">SIDA Technologies</a>
        </p>
        <p>
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
