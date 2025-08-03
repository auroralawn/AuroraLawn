'use client';

import React, { useState } from 'react';

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  services: string[];
  subscriptions: string[];
  grassLength: string; // Added grass length field
  message: string;
}

// import { useRecaptcha } from '@/hooks/useRecaptcha';
import { usePathname } from 'next/navigation';
import { servicePlans, services } from '@/lib/data';
import InputField from '../ui/InputField';
import CustomFileUpload from '../ui/CustomFileUpload';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    services: [],
    subscriptions: [],
    grassLength: '', // Initialize grass length
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const pathname = usePathname(); // Get current route path
  // const { token, loading, refresh } = useRecaptcha('contact_form');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox' && name === 'services') {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            [name]: [...prevData.services, value],
          };
        } else {
          return {
            ...prevData,
            [name]: prevData.services.filter((item) => item !== value),
          };
        }
      });
    } else if (type === 'checkbox' && name === 'subscriptions') {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            [name]: [...prevData.subscriptions, value],
          };
        } else {
          return {
            ...prevData,
            [name]: prevData.subscriptions.filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!token) {
    //   setSubmitStatus({
    //     type: 'error',
    //     message: 'reCAPTCHA not available. Please refresh the page.',
    //   });
    //   return;
    // }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // // First verify the captcha
      // const captchaResponse = await fetch('/api/verify-captcha', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ token }),
      // });

      // const captchaResult = await captchaResponse.json();

      // if (!captchaResult.success) {
      //   setSubmitStatus({
      //     type: 'error',
      //     message: 'CAPTCHA verification failed. Please try again.',
      //   });
      //   return;
      // }

      // If CAPTCHA verification succeeds, proceed with form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData, // Include all form fields
          pageUri: `http://localhost:3000${pathname}`, // Add dynamic URL
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          services: [],
          subscriptions: [],
          grassLength: '', // Reset grass length
          message: '',
        });
        // Get a fresh token for next submission
        // refresh();
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Unexpected error occured contactForm', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div //${customClass}
      className={` mx-4 my-8 max-w-[35rem] md:mx-auto md:w-full`}
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
            label='Street Address'
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
            name='zip'
            id='zip-input'
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Grass Length Selection */}
        <div className='relative'>
          <label
            htmlFor='grass-length-input'
            className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
          >
            Lawn Grass Length *
          </label>
          <select
            name='grassLength'
            id='grass-length-input'
            value={formData.grassLength}
            onChange={handleChange}
            required
            className='w-full p-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-white'
          >
            <option
              value=''
              disabled
            >
              Please select grass length
            </option>
            <option value='less-than-6in'>Less than 6 inches</option>
            <option value='more-than-6in'>More than 6 inches</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>

        <div className='relative'>
          <label
            htmlFor='services-input'
            className='absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500'
          >
            Services
          </label>
          <div className='grid grid-cols-2 p-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'>
            <div>
              <p className='text-primary'>Project Services</p>
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
            <div>
              <p className='text-primary'>Subscription Services</p>
              {servicePlans.map((plan) => (
                <div
                  key={plan.id}
                  className='flex items-center my-2'
                >
                  <input
                    type='checkbox'
                    name='subscriptions'
                    id={`Subscription-${plan.id}`}
                    value={plan.id}
                    checked={formData.subscriptions.includes(plan.id)}
                    onChange={handleChange}
                    className='mr-2 h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded'
                  />
                  <label
                    htmlFor={`service-${plan.id}`}
                    className='text-xs md:text-sm text-gray-600'
                  >
                    <p>
                      <span className='text-primary'> ${plan.price}</span>{' '}
                      {plan.name}
                    </p>
                  </label>
                </div>
              ))}
            </div>
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
};

const handleFileSelect = (files: File[]): void => {
  // Your existing logic here
  console.log('Selected file:', files);
};

export default ContactForm;
