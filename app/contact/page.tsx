import ContactForm from '@/components/Shared/ContactForm';
import HeroContainer from '@/components/layout/HeroContainer';
import Section from '@/components/layout/Section';

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center bg-primary'>
      <HeroContainer
        page='Contact Us'
        subheading='Via Email, Phone, or Social Media'
        caption="Need lawn care or landscaping services? Reach out via email, phone, or social media. We're here and ready to help keep your property looking its best."
      />
      <Section>
        <ContactForm />
      </Section>
    </div>
  );
}
