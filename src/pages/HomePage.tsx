import Hero from '../components/Hero';
import Services from '../components/Services';
import NicheSolutions from '../components/NicheSolutions';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import WorkShowcase3D from '../components/WorkShowcase3D';
import OurClients from '../components/OurClients';
import MarketingBranding from '../components/MarketingBranding';

export default function HomePage() {
  return (
    <main className="bg-[#05070a]">
      <Hero />
      <Services />
      {/* <NicheSolutions /> */}
      <About />
      <WorkShowcase3D />
      <MarketingBranding />
      <OurClients />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
