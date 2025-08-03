import CallToAction from '@/components/Shared/CallToAction';
import Values from '@/components/about/Values';
import Container from '@/components/layout/Container';
import HeroContainer from '@/components/layout/HeroContainer';
import Section from '@/components/layout/Section';
import { getCloudinaryImageData } from '@/lib/api/cloudinary';
import Image from 'next/image';
import React from 'react';

export default function page() {
  const imageUrl = 'about-hero';
  const HeroImage = getCloudinaryImageData(imageUrl);

  return (
    <div className='flex flex-col bg-primary'>
      <HeroContainer
        page='About Us'
        subheading='Get to know Aurora Lawn & Landscape'
        caption='We deliver exceptional results that exceed expectations every time. Honest pricing, reliable service, and promises we always keep. Your satisfaction is our priority from start to finish.'
      />
      <Section customClass='bg-white flex flex-col justify-center items-center'>
        <Container>
          <h4>Meet The Team</h4>
          <h3>The Team That Makes it Happen</h3>
          <Image
            src={HeroImage}
            alt='about'
            width={1100}
            height={300}
            className='rounded-lg'
          />
          <p className='max-w-6xl text-center my-10'>
            <span className='font-black text-accent'>
              Aurora Lawn and Landscape{' '}
            </span>
            is a family-owned business founded by pasionate people. We believe
            in treating every property with the same care and attention
            we&apos;d give our own home. Our team is dedicated to creating
            beautiful outdoor spaces while building lasting relationships with
            our neighbors throughout the community.
          </p>
        </Container>
      </Section>
      <Values />
      <CallToAction />
    </div>
  );
}
