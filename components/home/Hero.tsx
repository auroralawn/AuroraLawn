import Image from 'next/image';
import ContactForm from '../Shared/ContactForm';

export default function Hero() {
  return (
    <div className='relative w-full h-screen'>
      <Image
        src='/hero.jpeg'
        alt='Hero'
        priority
        fill
        className='object-cover'
      />

      {/* Overlay & Content */}
      <div className='absolute inset-0 bg-overlay'>
        <div className='container mx-auto px-4 h-full flex flex-col justify-center items-start text-start'>
          <h2 className='text-white font-inter'>Proudly Servicing</h2>
          <h1 className='text-primary'>Minnesota’s Lawns,</h1>
          <h2 className='text-white mb-5'>Season After Season</h2>
          <p className='md:text-lg text-white max-w-3xl'>
            Professional lawn care and landscaping services in Minnesota. From
            weekly mowing to custom pond installations, we bring your outdoor
            vision to life.
          </p>
        </div>
      </div>
      <ContactForm customClass='absolute left-2/3 top-1/4  container' />
    </div>
  );
}
