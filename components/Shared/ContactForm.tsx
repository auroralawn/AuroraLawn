'use client';

import InputField from '../ui/InputField';
import { useContactForm } from '@/lib/hooks/use-contact-form';

interface ContactFormProps {
  customClass?: string;
}

export default function ContactForm({ customClass }: ContactFormProps) {
  const {
    formData,
    submitted,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return submitted ? (
    <div className='text-center p-10 bg-accent rounded-xl'>
      <h3 className='text-2xl font-semibold text-primary'>Thank you!</h3>
      <p className='text-lg mt-2'>
        Your message has been sent successfully. We’ll be in touch soon.
      </p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className={`${customClass} min-w-2xl flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-lg shadow-lg transform transition-all hover:shadow-xl text-gray-600 py-5`}
    >
      <h5 className='text-center text-gray-700'>Request a Quote</h5>
      {submitStatus.type === 'success' && (
        <div className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg'>
          {submitStatus.message}
        </div>
      )}
      {submitStatus.type === 'error' && (
        <div className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg'>
          {submitStatus.message}
        </div>
      )}
      <div className='flex gap-2'>
        <div className='relative flex-1'>
          <InputField
            label='First Name'
            type='text'
            name='firstname'
            id='first-name-input'
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className='relative flex-1'>
          <InputField
            label='Last Name'
            type='text'
            name='lastname'
            id='last-name-input'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='relative'>
        <InputField
          label='Email'
          type='email'
          name='email'
          id='email-input'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='relative'>
        <InputField
          label='Phone'
          type='tel'
          name='phone'
          id='phone-input'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className='relative'>
        <InputField
          label='Address'
          type='text'
          name='address'
          id='address-input'
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className='relative flex gap-2'>
        <InputField
          label='City'
          type='text'
          name='city'
          id='city-input'
          value={formData.city}
          onChange={handleChange}
          required
        />
        <InputField
          label='State'
          type='text'
          name='state'
          id='state-input'
          value={formData.state}
          onChange={handleChange}
          required
        />
        <InputField
          label='Zip Code'
          type='text'
          name='zipcode'
          id='zipcode-input'
          value={formData.zipcode}
          onChange={handleChange}
          required
        />
      </div>

      <div className='relative'>
        <label
          htmlFor='services-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Services
        </label>
        <input
          type='checkbox'
          name='services'
          id='services-input'
          value={formData.services}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none transition-all'
          required
        />
      </div>
      <div className='relative'>
        <label
          htmlFor='message-input'
          className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message-input'
          value={formData.message}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none transition-all'
          rows={5}
          required
        />
      </div>
      <div className='relative'>
        <InputField
          label='Image Upload'
          type='file'
          name='image'
          id='image-input'
          onChange={handleChange}
          required
        />
      </div>
      <button
        type='submit'
        disabled={isSubmitting} // || loading || !token}
        className={`w-full btn-primary transition-all transform  active:scale-95 ${
          isSubmitting // || loading || !token
            ? 'opacity-70 cursor-not-allowed'
            : ''
        }`}
      >
        {isSubmitting //|| loading
          ? 'Sending...'
          : 'Send Message'}
      </button>
      {/* <div className='text-center mt-2'>
        <p className='text-gray-600 mb-7'>or directly at</p>
        <div className='flex justify-center gap-4'>
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-[#FF8106] transition-colors'
              aria-label={social.name}
            >
              <social.icon className='w-6 h-6' />
            </Link>
          ))}
        </div>
      </div> */}
    </form>
  );
}
