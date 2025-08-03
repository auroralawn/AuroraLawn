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
  return (
    <div className='mt-30 w-full bg-primary'>
      {/* Overlay & Content */}
      <div className='bg-white m-3 p-10 md:p-20 rounded-lg'>
        <div className='container mx-auto px-4 h-full flex flex-col justify-center md:items-start '>
          <h4 className='text-secondary '>{page}</h4>
          <h3 className='text-primary '>{subheading}</h3>
          <p className='text-gray text-center md:text-start'>{caption}</p>
        </div>
      </div>
    </div>
  );
}
