import { services } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import ServiceCard from '../Shared/ServiceCard';

export default function Services() {
  return (
    <Section>
      <Container>
        <h4>Our Services</h4>
        <h3>Committed to Exceptional Results</h3>
        <div className='flex '>
          {services.map((service) => (
            // <Card
            //   key={service.id}
            //   primary={index % 2 == 0}
            //   customClass='p-10 mx-2'
            // >
            //   <div className='overflow-hidden rounded-md transition-shadow'>
            //     <div className='relative h-20 md:h-20 lg:h-32 '>
            //       <Image
            //         src={service.mainImageId}
            //         alt='Main'
            //         fill
            //         className='object-cover group-hover:scale-105 transition-transform duration-300'
            //       />
            //     </div>
            //   </div>

            //   <div className=''>
            //     <h6>{service.name}</h6>
            //     <p>{service.description}</p>
            //     <button className='btn-primary'>More Details</button>
            //   </div>
            // </Card>
            <ServiceCard
              key={service.name}
              serviceName={service.name}
              serviceDescrition={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
