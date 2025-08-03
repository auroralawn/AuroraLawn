import { servicePlans } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import Button from '../ui/Button';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';
import Image from 'next/image';

export default function Packages() {
  const imageUrl = 'packages_hero';
  const HeroImage = getCloudinaryImageData(imageUrl);

  return (
    <div className='relative bg-cover bg-center bg-no-repeat'>
      {/* Background Image */}
      <Image
        src={HeroImage} // <-- Replace with your image
        alt='Lawn background'
        fill
        priority
        className='object-cover z-0'
      />

      {/* Optional overlay for better text readability */}
      <div className='absolute inset-0 bg-black/40'></div>

      <Section>
        <Container customClass='relative z-10'>
          <h4 className='text-white'>Need Regular Maintenance?</h4>
          <h3>Subscription Services - Transparent Pricing</h3>
          <div className='my-container max-w-[75rem] flex flex-col gap-10 justify-center items-center '>
            <div className='w-full group'>
              <Card
                key={servicePlans[0].id}
                customClass='p-6 w-full group-hover:scale-[1.02] transition-transform duration-300 ease-in-out'
              >
                <h6>{servicePlans[0].name}</h6>
                <div className='bg-secondary p-5 m-3 text-white rounded  group'>
                  <div className='flex justify-center items-center'>
                    <h3 className='text-[2.5rem]'>${servicePlans[0].price}</h3>
                    <h5 className='text-white'>/month</h5>
                  </div>

                  <ul>
                    {servicePlans[0].perks.map((perk) => (
                      <div
                        key={perk}
                        className='flex gap-2  items-center'
                      >
                        <HiOutlineCheckCircle className=' flex-shrink-0' />
                        <li className='text-start py-2 leading-tight'>
                          {perk}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
                <Button
                  text='Request Plan'
                  link='\contact'
                />
              </Card>
            </div>

            {/* Other Plans */}
            <div className='w-full lg:w-auto flex flex-col gap-6 lg:gap-10 lg:flex-row justify-center lg:justify-between'>
              {servicePlans.slice(1).map((service) => (
                <div
                  key={service.id}
                  className='w-full lg:w-1/2 xl:w-auto xl:flex-1 group'
                >
                  <Card customClass='p-4 md:p-6 h-auto min-h-[28rem] md:min-h-[32rem] group-hover:scale-[1.02] transition-transform duration-300 ease-in-out'>
                    <h6 className='text-primary mb-4'>{service.name}</h6>
                    <div className='bg-primary min-h-[22rem] md:min-h-[26rem] text-white rounded p-6 md:p-10  m-2 md:m-3 flex flex-col'>
                      <div className='flex justify-center items-center mb-6 min-w-[11rem]'>
                        <h3 className='text-[2rem] md:text-[2.5rem]'>
                          ${service.price}
                        </h3>
                        <h5>/month</h5>
                      </div>

                      <ul className='flex-1 space-y-1'>
                        {service.perks.map((perk) => (
                          <div
                            key={perk}
                            className='flex gap-2 items-center'
                          >
                            <HiOutlineCheckCircle className='flex-shrink-0' />
                            <li className='text-start py-2 leading-tight'>
                              {perk}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <Button
                      text='Request Plan'
                      link='\contact'
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
