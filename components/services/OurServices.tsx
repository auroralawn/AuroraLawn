import React from 'react';
import Section from '../layout/Section';
import { services } from '@/lib/data';
import ServiceCard from '../Shared/ServiceCard';
import Container from '../layout/Container';
import { getImagesByTag, processServiceData } from '@/lib/api/cloudinary';

async function getServicesData() {
  const processedServices = await Promise.all(
    services.map(async (service) => {
      const galleryImages = await getImagesByTag(service.galleryTag);
      const processedData = processServiceData(service, galleryImages);

      return {
        id: service.id,
        name: service.name,
        description: service.description,
        imageSrc: processedData.src,
      };
    })
  );
  return processedServices;
}

export default async function OurServices() {
  const servicesData = await getServicesData();

  return (
    <Section customClass='bg-white'>
      <Container>
        <h4>Our Services</h4>
        <h3>Committed to Exceptional Results</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr mb-6'>
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              imgSrc={service.imageSrc}
              serviceName={service.name}
              serviceDescrition={service.description}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 auto-rows-fr'>
          {servicesData.slice(3, 5).map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              imgSrc={service.imageSrc}
              serviceName={service.name}
              serviceDescrition={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
