import CallToAction from '@/components/Shared/CallToAction';
import Values from '@/components/about/Values';
import Container from '@/components/layout/Container';
import HeroContainer from '@/components/layout/HeroContainer';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className='flex flex-col bg-primary'>
      <HeroContainer
        page='About Us'
        subheading='Get to know Aurora Lawn & Landscape'
        caption='We deliver exceptional results that exceed expectations every time. Honest pricing, reliable service, and promises we always keep. Your satisfaction is our priority from start to finish.'
      />
      <Section customClass='bg-white flex flex-col justify-center items-center'>
        <Container>
          <h4 className='text-center'>Meet The Team</h4>
          <h3 className='text-center'>The Team That Makes it Happen</h3>
          <Image
            src={'/hero.jpeg'}
            alt='about'
            width={700}
            height={300}
            className='rounded-lg'
          />
          <p className='max-w-3xl text-center my-10'>
            <span className='font-black text-secondary'>
              Aurora Lawn and Landscape
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
