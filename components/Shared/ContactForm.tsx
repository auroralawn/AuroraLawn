'use client';

import { services } from '@/lib/data';
import InputField from '../ui/InputField';
import { useContactForm } from '@/lib/hooks/use-contact-form';
import CustomFileUpload from '../ui/CustomFileUpload';

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
    handleFileSelect,
  } = useContactForm();

  return submitted ? (
    <div className='text-center p-10 bg-accent rounded-xl'>
      <h3 className='text-2xl font-semibold text-primary'>Thank you!</h3>
      <p className='text-lg mt-2'>
        Your message has been sent successfully. We’ll be in touch soon.
      </p>
    </div>
  ) : (
    <div
      className={`${customClass} mx-4 my-8 max-w-[35rem] md:mx-auto md:w-full`}
    >
      <form
        className='bg-white p-4 rounded-lg flex flex-col gap-3'
        onSubmit={handleSubmit}
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
        {/* Name Fields */}
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
          <div className='p-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'>
            {services.map((service) => (
              <div
                key={service.id}
                className='flex items-center my-2'
              >
                <input
                  type='checkbox'
                  name='services'
                  id={`service-${service.id}`}
                  value={service.id}
                  checked={formData.services.includes(service.id)}
                  onChange={handleChange}
                  className='mr-2 h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded'
                />
                <label
                  htmlFor={`service-${service.id}`}
                  className='text-xs md:text-sm text-gray-600'
                >
                  {service.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <label
            htmlFor='message-input'
            className='absolute left-3 -top-2 bg-white px-1 text-xs md:text-sm text-gray-500'
          >
            Message
          </label>
          <textarea
            name='message'
            id='message-input'
            value={formData.message}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none transition-all'
            rows={5}
            required
          />
        </div>

        <CustomFileUpload
          onFileSelect={handleFileSelect}
          multiple={true}
          maxFiles={5}
          accept='image/*,.pdf,.doc'
          required={true}
          name='image'
          id='image-input'
        />

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
      </form>
    </div>
  );
}
