import { companyName } from '@/lib/data';
import Section from '../layout/Section';
import Image from 'next/image';
import Container from '../layout/Container';

export default function About() {
  return (
    <Section>
      <Container>
        <div className='my-10 xl:my-0 flex flex-col items-center gap-10 xl:gap-0 xl:flex-row'>
          <div className='xl:mx-10'>
            <h4 className='text-center '>Your Local Landscaping Experts</h4>
            <h3>{companyName}</h3>
            <p className='text-center'>
              Welcome to Aurora Lawn & Landscaping! We&apos;re a local Minnesota
              team passionate about creating beautiful outdoor spaces throughout
              Minnesota. As a newly established company, we&apos;re excited to
              bring fresh energy, attention to detail, and personalized service
              to every project. Whether you need regular maintenance or a
              complete outdoor transformation, we&apos;re here to help your
              property shine.
            </p>
            <Image
              src='/touching-grass.svg'
              alt='touch grass'
              width={600}
              height={100}
            />
          </div>
          <Image
            src={'/Hero.jpg' || ""}
            alt='Fam'
            width={600}
            height={200}
            className='rounded-lg'
          />
        </div>
      </Container>
    </Section>
  );
}
