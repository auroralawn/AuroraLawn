import CallToAction from '@/components/Shared/CallToAction';
import Testimonials from '@/components/Shared/Testimonials';
import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Packages from '@/components/home/Packages';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <About />
      <Process />
      <Services />
      <Packages />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
