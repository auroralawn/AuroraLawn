import Container from '../layout/Container';
import Section from '../layout/Section';
import Card from '../ui/Card';

export default function CallToAction() {
  return (
    <Section customClass='bg-primary'>
      <Container>
        <Card
          url='/contact'
          customClass='w-full py-8 md:py-16 px-2 md:px-30 flex justify-center items-center'
        >
          <h4 className='text-center'>Ready for a lawn that stands out?</h4>
          <h5 className='text-black/95'>
            Get your <span className='text-accent font-black'>FREE</span> quote
            today and discover why Aurora is the trusted choice for premium lawn
            care.
          </h5>
          <button className='btn-primary hover:scale-105'>
            Get Your FREE Quote →
          </button>
        </Card>
      </Container>
    </Section>
  );
}
