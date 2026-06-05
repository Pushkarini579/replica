import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-rhetorica-black/90 backdrop-blur-lg border-b border-white/5 px-8 py-5 flex justify-between items-center">
      <div className="text-2xl font-pirata text-rhetorica-gold tracking-widest">RHETORICA '26</div>
      <div className="hidden md:flex gap-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] text-gray-400">
        <a href="#about" className="hover:text-rhetorica-gold transition-colors">About</a>
        <a href="#events" className="hover:text-rhetorica-gold transition-colors">Events</a>
        <a href="#partners" className="hover:text-rhetorica-gold transition-colors">Partners</a>
        <a href="#contact" className="hover:text-rhetorica-gold transition-colors">Contact</a>
      </div>
      <button className="bg-rhetorica-gold text-rhetorica-black px-8 py-2.5 rounded-none font-montserrat font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
