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
          <h4 className='text-center text-accent'>
            Looking for reliable lawn care you can trust?
          </h4>
          <h5>
            Join the Aurora family and experience personalized service that
            treats your property like our own.
          </h5>
          <button className='btn-primary'>Request a Quote</button>
        </Card>
      </Container>
    </Section>
  );
}
