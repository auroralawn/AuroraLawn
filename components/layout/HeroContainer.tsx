import Image from 'next/image';

import { companyName } from '@/lib/data';
// import { getCloudinaryImageData } from '@/lib/api/cloudinary';

interface HeroContainerProps {
  imageUrl: string;
  page: string;
  subheading?: string;
}

export default async function HeroContainer({
  //   imageUrl,
  page = 'Home',
  subheading = '',
}: Readonly<HeroContainerProps>) {
  //   const HeroImage = await getCloudinaryImageData(imageUrl);
  const HeroImage = '/Hero.jpg';

  return (
    <div className='relative w-full h-screen'>
      <Image
        src={HeroImage}
        alt={page}
        priority
        fill
        className='object-cover'
      />

      {/* Overlay & Content */}
      <div className='absolute inset-0 bg-overlay'>
        <div className='container mx-auto px-4 h-full flex flex-col justify-center items-start text-start'>
          <h3 className='text-accent font-inter'>{page}</h3>
          <h2 className='text-accent'>{companyName}</h2>
          <h2 className='text-accent mb-5'>SubHeading</h2>
          <p className='md:text-lg text-accent'>{subheading}</p>
        </div>
      </div>
    </div>
  );
}
