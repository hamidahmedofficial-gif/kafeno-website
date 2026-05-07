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

      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-lg">
        <div className="text-center px-6 py-12 md:p-16 rounded-[40px] bg-white/5 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all animate-in fade-in zoom-in duration-700">
          <h1 className="text-white text-[60px] md:text-[100px] font-bold font-['Samsung_Sharp_Sans',sans-serif] tracking-[-2px] md:tracking-[-4px] leading-tight mb-4 drop-shadow-2xl">
            Coming Soon
          </h1>
          <p className="text-[#d0833d] text-xl md:text-3xl font-['Metrophobic',sans-serif] tracking-widest uppercase opacity-90 drop-shadow-lg">
            We are working on it
          </p>
          <div className="mt-8 w-16 h-1 bg-[#d0833d] mx-auto rounded-full shadow-[0_0_15px_rgba(208,131,61,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
