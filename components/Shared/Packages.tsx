import { servicePlans } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

export default function Packages() {
  return (
    <Section customClass='bg-light-gray'>
      <Container>
        <h4>Need Regular Maintenance?</h4>
        <h3>Subscription Services - Transparent Pricing</h3>
        <div className='w-full flex flex-col gap-10 justify-center items-center'>
          <Card
            key={servicePlans[0].id}
            customClass='py-2 w-full'
          >
            <h6>{servicePlans[0].name}</h6>
            <div className='bg-secondary p-2 text-white'>
              <div className='flex justify-center items-center'>
                <h3>${servicePlans[0].price}</h3>
                <h5>/month</h5>
              </div>

              <ul>
                {servicePlans[0].perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          </Card>
          <div className='flex gap-10'>
            {servicePlans.slice(1).map((service) => (
              <Card
                key={service.id}
                customClass='p-10'
              >
                <h6>{service.name}</h6>
                <div className='bg-primary p-10 text-white'>
                  <div className='flex justify-center items-center'>
                    <h3>${service.price}</h3>
                    <h5>/month</h5>
                  </div>

                  <ul className=' '>
                    {service.perks.map((perk) => (
                      <div
                        key={perk}
                        className='flex gap-2 items-center'
                      >
                        <HiOutlineCheckCircle />
                        <li className='text-start py-2'>{perk}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
