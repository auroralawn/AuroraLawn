import React from 'react';
import Section from '../layout/Section';
import { services } from '@/lib/data';
import ServiceCard from '../Shared/ServiceCard';
import Container from '../layout/Container';

export default function OurServices() {
  return (
    <Section customClass='bg-white'>
      <Container>
        <h4 className='text-center'>Our Services</h4>
        <h3 className='text-center'>Committed to Exceptional Results</h3>
        <div className='grid grid-cols-3 gap-10'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              serviceName={service.name}
              serviceDescrition={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
