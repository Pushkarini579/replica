import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Events from './components/Events';
import Partners from './components/Partners';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="selection:bg-rhetorica-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Events />
        <Partners />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
