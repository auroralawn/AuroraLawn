import { testimonials } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <div className='grid grid-cols-12 gap-20'>
          <div className='col-span-6'>
            <h4>Reviews</h4>
            <h3 className='text-start'>See What Our Customers Have to Say</h3>
            {testimonials.slice(0, 1).map((testimonial) => (
              <div key={testimonial.clientName}>
                <p>{testimonial.review}</p>
                <p>{testimonial.clientName}</p>
              </div>
            ))}
          </div>
          <Image
            src={'/Hero.jpg'}
            alt='Test'
            width={600}
            height={300}
            className='col-span-6'
          />
        </div>
      </Container>
    </Section>
  );
}
