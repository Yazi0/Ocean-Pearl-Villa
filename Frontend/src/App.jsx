import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import FeaturedMenu from './components/FeaturedMenu';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
