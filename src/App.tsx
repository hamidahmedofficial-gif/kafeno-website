import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import About2 from './components/About2';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Products />
        <About2 />
        <Testimonials />
        <Gallery />
        <CTA />
        <ReviewForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
