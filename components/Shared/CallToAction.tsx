import Container from '../layout/Container';
import Section from '../layout/Section';
import Card from '../ui/Card';

export default function CallToAction() {
  return (
    <Section customClass='bg-secondary'>
      <Container>
        <Card
          url='/contact'
          customClass='w-full py-16 px-30 flex justify-center items-center'
        >
          <h4 className='text-center'>
            Looking for reliable lawn care you can trust?
          </h4>
          <h5 className='text-center'>
            Join the Aurora family and experience personalized service that
            treats your property like our own.
          </h5>
          <button className='btn-secondary'>Request a Quote</button>
        </Card>
      </Container>
    </Section>
  );
}
