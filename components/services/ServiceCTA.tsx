import React from 'react';
import Link from 'next/link';
import Container from '../layout/Container';
import Section from '../layout/Section';

interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: Readonly<ServiceCTAProps>) {
  return (
    <Section customClass='bg-primary text-white'>
      <Container customClass=''>
        <h3 className='custom-h3 font-bold mb-4'>Ready to Get Started?</h3>
        <p className='mx-auto mb-8'>
          Contact us today for a free consultation and quote on your{' '}
          {serviceName.toLowerCase()} project.
        </p>
        <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <Link
            href='/contact'
            className='px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors'
          >
            Request a Quote
          </Link>
          <Link
            href='/services'
            className='px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-primary transition-colors'
          >
            Explore More Services
          </Link>
        </div>
      </Container>
    </Section>
  );
}
