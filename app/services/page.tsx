import CallToAction from '@/components/Shared/CallToAction';
import Packages from '@/components/Shared/Packages';
import HeroContainer from '@/components/layout/HeroContainer';
import JobTypes from '@/components/services/JobTypes';
import OurServices from '@/components/services/OurServices';

export default function page() {
  return (
    <div className='flex flex-col bg-primary'>
      <HeroContainer
        page='Services'
        subheading='Explore What We Have to Offer'
        caption='We deliver exceptional results that exceed expectations every time. Honest pricing, reliable service, and promises we always keep. Your satisfaction is our priority from start to finish.'
      />
      <Packages />
      <OurServices />
      <JobTypes />
      <CallToAction />
    </div>
  );
}
