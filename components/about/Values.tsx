import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { companyValues } from '@/lib/data';
import Trait from '../Shared/Trait';

export default function Values() {
  return (
    <Section customClass='bg-light-gray'>
      <Container>
        <h3 className='text-center'>Our Values at Aurora</h3>
        <div className='w-full md:flex justify-between'>
          {companyValues.map((value) => (
            <Trait
              key={value.label}
              icon={value.icon}
              name={value.label}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
