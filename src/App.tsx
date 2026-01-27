import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Product } from './sections/Product';
import { Services } from './sections/Services';
import { Marketing } from './sections/Marketing';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { CallToAction } from './sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Product />
        <Services />
        <Marketing />
        <WhyChooseUs />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;
