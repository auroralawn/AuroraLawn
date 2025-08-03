import { testimonials } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Image from 'next/image';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';

export default function Testimonials() {
  const imageUrl = 'about-hero';
  const HeroImage = getCloudinaryImageData(imageUrl);
  return (
    <Section>
      <Container>
        <div className='flex flex-col justify-center items-center xl:flex-row xlsss:justify-between'>
          <div className='xl:mr-10 max-w-2xl'>
            <h4 className='text-center xl:text-start'>Reviews</h4>
            <h3 className='text-center xl:text-start'>
              What Our Customers Have to Say
            </h3>
            {testimonials.slice(0, 1).map((testimonial) => (
              <div key={testimonial.clientName}>
                <p className='text-center xl:text-start pb-5'>
                  {testimonial.review}
                </p>
                <p className='text-center xl:text-start pb-5'>
                  {testimonial.clientName}
                </p>
              </div>
            ))}
          </div>
          <Image
            src={HeroImage}
            alt='Test'
            width={700}
            height={300}
            className='rounded-lg'
          />
        </div>
      </Container>
    </Section>
  );
}
