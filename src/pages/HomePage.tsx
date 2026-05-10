import Hero from '../components/Hero';
import Services from '../components/Services';
import NicheSolutions from '../components/NicheSolutions';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import HomeCourses from '../components/HomeCourses';
import Contact from '../components/Contact';
import WorkShowcase3D from '../components/WorkShowcase3D';
import OurClients from '../components/OurClients';

export default function HomePage() {
  return (
    <main className="bg-[#05070a]">
      <Hero />
      <Services />
      <NicheSolutions />
      <About />
      <WorkShowcase3D />
      <OurClients />
      <Process />
      <Testimonials />
      <HomeCourses /> 
      <Blog />
      <Contact />
    </main>
  );
}
