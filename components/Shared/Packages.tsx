import { servicePlans } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';
import Image from 'next/image';

interface CardProps {
  children: ReactNode;
  customClass?: string;
}

interface ButtonProps {
  text: string;
  link: string;
}

import { ReactNode } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { PiBroomBold } from 'react-icons/pi';
import Link from 'next/link';

const Card = ({ children, customClass = '' }: CardProps) => (
  <div
    className={`bg-white rounded-2xl shadow-lg border border-gray-100 ${customClass}`}
  >
    {children}
  </div>
);

const Button = ({ text, link }: ButtonProps) => (
  <Link href={link}>
    <div className='w-full bg-gradient-to-r hover:from-secondary hover:to-accent from-secondary to-primary text-white font-semibold py-3 px-6 rounded-xl transition-all duration-600 transform hover:scale-105 shadow-md hover:shadow-lg text-center'>
      {text}
    </div>
  </Link>
);

export default function Packages() {
  const imageUrl = 'hero_main';
  const HeroImage = getCloudinaryImageData(imageUrl);

  return (
    <div className='relative bg-cover bg-center bg-no-repeat'>
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt='Lawn background'
        fill
        priority
        className='object-cover z-0'
      />

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/40'></div>

      <Section>
        <Container customClass='relative z-10'>
          <div className='text-center mb-12'>
            <h4 className='text-lg mb-2 text-center'>
              Need Regular Maintenance?
            </h4>
            <h3 className='text-white text-3xl lg:text-4xl'>
              Subscription Services - Transparent Pricing
            </h3>
          </div>

          <div className='max-w-7xl mx-auto'>
            {/* First 3 Service Plans */}
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-8 mb-12 auto-rows-fr'>
              {servicePlans.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className='group relative'
                >
                  {service.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-10'>
                      <span className='bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg'>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <Card customClass='h-full group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden'>
                    <div className='p-8 flex flex-col h-full'>
                      {/* Header Section */}
                      <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 text-accent group-hover:scale-110 transition-transform duration-300'>
                          <service.icon className='w-8 h-8' />
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                          {service.name}
                        </h3>
                      </div>

                      {/* Price Section */}
                      <div className='text-center mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl'>
                        <div className='flex items-baseline justify-center gap-1'>
                          <span className='text-5xl font-bold text-gray-900'>
                            ${service.price}
                          </span>
                          <span className='text-xl font-semibold text-gray-500'>
                            /week
                          </span>
                        </div>
                      </div>

                      {/* Features Section */}
                      <div className='flex-1 mb-8'>
                        <ul className='space-y-4'>
                          {service.perks.map((perk, index) => (
                            <li
                              key={index}
                              className='flex items-start gap-3 group/item'
                            >
                              <HiOutlineCheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200' />
                              <span className='text-gray-700 leading-relaxed'>
                                {perk}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Button Section */}
                      <div className='mt-auto'>
                        <Button
                          text='Request Plan'
                          link='/contact'
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Clean-Up Plan - Full Width */}
            <div className='group relative  mx-auto'>
              <Card customClass='group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden'>
                <div className='p-8'>
                  {/* Header Section */}
                  <div className='text-center mb-4'>
                    <div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300'>
                      <PiBroomBold className='w-8 h-8' />
                    </div>
                    <h3 className='text-3xl font-bold m-0 text-gray-900 mb-2'>
                      {servicePlans[3].name}
                    </h3>
                    <p className='text-gray-600 text-center'>
                      One-time professional cleanup service
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className='text-center mb-5 p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl'>
                    <div className='flex items-baseline justify-center gap-2'>
                      <span className='text-5xl font-bold text-gray-900'>
                        ${servicePlans[3].price}
                      </span>
                      <span className='text-2xl font-semibold text-gray-500'>
                        /service
                      </span>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className='mb-5'>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto'>
                      {servicePlans[3].perks.map((perk, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-4 group/item'
                        >
                          <HiOutlineCheckCircle className='w-7 h-7 text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200' />
                          <span className='text-gray-700 leading-relaxed text-lg'>
                            {perk}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Section */}
                  <div className='mx-auto'>
                    <Button
                      text='Request Cleanup'
                      link='/contact'
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
