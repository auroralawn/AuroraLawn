import { IoCalendar, IoDocumentOutline } from 'react-icons/io5';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { IoMdFlower } from 'react-icons/io';
import Trait from '../Shared/Trait';

export default function Process() {
  return (
    <Section customClass='bg-light-gray'>
      <Container>
        <h3 className='text-center'>Quick & Simple Process</h3>
        <div className='w-full md:flex justify-between'>
          <Trait
            icon={IoDocumentOutline}
            name='Get Your Quote'
            description='Fill out our form, select your service, and receive your free
              quote - no commitments.'
          />
          <Trait
            icon={IoCalendar}
            name='Schedule Your Service'
            description='We will work with your schedule to find a convenient time that
            works for you.'
          />
          <Trait
            icon={IoMdFlower}
            name='Enjoy the Results'
            description='Sit back while we deliver outstanding results your property
            deserves.'
          />
        </div>
      </Container>
    </Section>
  );
}
