import { GiCycle } from 'react-icons/gi';
import { PiPlant } from 'react-icons/pi';
import Section from '../layout/Section';

export default function JobTypes() {
  return (
    <Section customClass='bg-light-gray flex justify-between p-20 items-center'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h4>Recurring Service</h4>
        <GiCycle
          size={120}
          className='text-secondary'
        />
        <p>
          Choose from Basic, Advanced, or Premium monthly plans for consistent
          lawn care and maintenance
        </p>
        <button className='btn-primary'>Explore Monthly Plans</button>
      </div>
      <h3 className='text-primary'>Vs</h3>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h4>Project-Based Work</h4>
        <PiPlant
          size={120}
          className='text-secondary'
        />
        <p>
          Custom landscape design, pond construction, deck building, and
          specialty installations.
        </p>
        <button className='btn-primary'>Explore Services</button>
      </div>
    </Section>
  );
}
