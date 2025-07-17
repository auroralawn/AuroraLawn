// import { getCloudinaryImageData } from '@/lib/api/cloudinary';

interface HeroContainerProps {
  page: string;
  subheading?: string;
  caption?: string;
}

export default async function HeroContainer({
  page = 'Home',
  subheading = '',
  caption = '',
}: Readonly<HeroContainerProps>) {
  //   const HeroImage = await getCloudinaryImageData(imageUrl);
  // const HeroImage = '/Hero.jpg';

  return (
    <div className='mt-30 w-full bg-primary'>
      {/* Overlay & Content */}
      <div className='bg-white m-3 p-20 rounded-lg'>
        <div className='container mx-auto px-4 h-full flex flex-col justify-center items-start text-start'>
          <h4 className='text-secondary'>{page}</h4>
          <h3 className='text-primary'>{subheading}</h3>
          <p className=' text-gray'>{caption}</p>
        </div>
      </div>
    </div>
  );
}
