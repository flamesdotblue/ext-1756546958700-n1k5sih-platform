import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white antialiased">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
