import Image from 'next/image';
import ContactForm from '../Shared/ContactForm';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';

export default function Hero() {
  const imageUrl = 'packages_hero';
  const HeroImage = getCloudinaryImageData(imageUrl);

  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <Image
        src={HeroImage} // <-- Replace with your image
        alt='Lawn background'
        fill
        priority
        className='object-cover z-0'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-white/20 z-10' />

      {/* Content Wrapper */}
      <div className='relative z-20 flex items-center justify-center min-h-screen mt-20 '>
        <div className=' w-full max-w-7xl flex flex-col xl:flex-row items-center justify-between xl:gap-12 rounded-xl'>
          {/* Left Side: Text */}
          <div className='px-4 w-full md:w-2/3 space-y-2 text-center sm:text-start'>
            <h1 className='text-4xl text-white text-center xl:text-start'>
              Proudly Servicing
            </h1>
            <h2 className='text-primary text-center xl:text-start'>
              Minnesota’s Lawns,
            </h2>
            <h3 className='text-4xl text-white text-center xl:text-start'>
              Season After Season
            </h3>
            <p className='text-white text-center xl:text-start'>
              Professional lawn care and landscaping services in Minnesota. From
              weekly mowing to custom pond installations, we bring your outdoor
              vision to life.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className='md:w-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
