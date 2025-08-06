import { testimonials } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Image from 'next/image';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';

export default function Testimonials() {
  const imageUrl = 'hero_main';
  const HeroImage = getCloudinaryImageData(imageUrl);
  return (
    <Section customClass='bg-light-gray'>
      <Container>
        <div className='flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start gap-8 w-full'>
          <div className='w-full xl:mr-10 xl:flex-1 xl:max-w-2xl overflow-hidden'>
            <h4 className='text-center xl:text-start'>Reviews</h4>
            <h3 className='text-center xl:text-start mb-6'>
              What Our Customers Have to Say
            </h3>
            {testimonials.slice(0, 1).map((testimonial) => (
              <div
                key={testimonial.clientName}
                className='w-full'
              >
                <p className='text-center xl:text-start pb-5 break-words overflow-wrap-anywhere hyphens-auto leading-relaxed px-2 sm:px-0'>
                  {testimonial.review}
                </p>
                <p className='text-center xl:text-start pb-5 font-semibold px-2 sm:px-0'>
                  {testimonial.clientName}
                </p>
              </div>
            ))}
          </div>
          <div className='xl:flex-shrink-0'>
            <Image
              src={HeroImage}
              alt='Test'
              width={500}
              height={300}
              className='rounded-lg max-w-full h-auto'
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
