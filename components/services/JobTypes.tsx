import { GiCycle } from 'react-icons/gi';
import { PiPlant } from 'react-icons/pi';
import Section from '../layout/Section';
import Container from '../layout/Container';

export default function JobTypes() {
  return (
    <Section customClass='bg-light-gray flex justify-between md:p-20 items-center'>
      <Container>
        <div className='flex justify-between items-center gap-5 lg:pb-0'>
          {/* Type of Job 2 */}
          <div className='flex flex-col gap-2 lg:gap-6 justify-center items-center lg:mx-20'>
            <h4 className='text-sm md:text-xl'>Project-Based Work</h4>
            <PiPlant
              size={120}
              className='text-primary w-18 md:w-42'
            />
            <p className='text-xs text-center lg:max-w-[22rem]'>
              Custom landscape design, pond construction, deck building, and
              specialty installations.
            </p>
            {/* <button className='btn-primary'>Explore Services</button> */}
          </div>

          <h3 className='text-accent pt-10'>Vs</h3>

          {/* Type of Job 1 */}
          <div className='flex flex-col gap-2 lg:gap-6 justify-center items-center lg:mx-20'>
            <h4 className='text-sm md:text-xl'>Recurring Service</h4>
            <GiCycle
              size={120}
              className='text-primary w-18 md:w-42'
            />
            <p className='text-xs text-center lg:max-w-[22rem]'>
              Choose from Basic, Advanced, or Premium monthly plans for
              consistent lawn care and maintenance
            </p>
            {/* <button className='btn-primary'>Explore Monthly Plans</button> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
