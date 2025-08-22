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
  grassLength: string;
  message: string;
  // files: File[]; // Commented out - file upload temporarily disabled
}

// import { useRecaptcha } from '@/hooks/useRecaptcha';
import { usePathname } from 'next/navigation';
import { servicePlans, services } from '@/lib/data';
import InputField from '../ui/InputField';
// import CustomFileUpload from '../ui/CustomFileUpload';
interface ContactFormProps {
  customClass?: string;
}

const ContactForm = ({ customClass }: ContactFormProps) => {
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
    grassLength: '',
    message: '',
    // files: [], // Commented out - file upload temporarily disabled
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const pathname = usePathname();

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

  // COMMENTED OUT - File processing functions temporarily disabled
  // Handle file selection
  // const handleFileSelect = (files: File[]): void => {
  //   console.log('Selected files:', files);
  //   setFormData((prev) => ({ ...prev, files }));
  // };

  // Convert files to base64 for JSON transmission (alternative approach)
  // const filesToBase64 = async (
  //   files: File[]
  // ): Promise<Array<{ name: string; content: string; type: string }>> => {
  //   const filePromises = files.map((file) => {
  //     return new Promise<{ name: string; content: string; type: string }>(
  //       (resolve) => {
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //           resolve({
  //             name: file.name,
  //             content: reader.result as string,
  //             type: file.type,
  //           });
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     );
  //   });

  //   return Promise.all(filePromises);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // COMMENTED OUT - File processing temporarily disabled
      // Convert files to base64 if there are any
      // let processedFiles: Array<{
      //   name: string;
      //   content: string;
      //   type: string;
      // }> = [];
      // if (formData.files && formData.files.length > 0) {
      //   processedFiles = await filesToBase64(formData.files);
      // }

      // Prepare form data for submission (without files)
      const submissionData = {
        ...formData,
        // files: processedFiles, // Commented out - file upload temporarily disabled
        pageUri: `http://localhost:3000${pathname}`,
      };

      // COMMENTED OUT - File processing logic
      // Remove the File objects from the data since they can't be JSON stringified
      // const { files: _, ...jsonSafeData } = formData;
      // const finalSubmissionData = {
      //   ...jsonSafeData,
      //   files: processedFiles,
      //   pageUri: `http://localhost:3000${pathname}`,
      // };

      console.log('Submitting data:', submissionData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
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
          grassLength: '',
          message: '',
          // files: [], // Commented out - file upload temporarily disabled
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Unexpected error occurred contactForm', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${customClass} mx-4 max-w-[35rem] md:mx-auto md:w-full`}>
      <form
        className='bg-white p-4 rounded-lg flex flex-col gap-[0.65rem]'
        onSubmit={handleSubmit}
      >
        <h5 className='text-center text-gray-700 mb-3'>Request a Quote</h5>
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
            className='label'
          >
            Lawn Grass Length *
          </label>
          <select
            name='grassLength'
            id='grass-length-input'
            value={formData.grassLength}
            onChange={handleChange}
            required
            className='w-full p-3 pr-10 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-white text-gray-900'
          >
            <option
              value=''
              disabled
              className='text-gray-500'
            >
              Please select grass length
            </option>
            <option value='under_6_inches'>Less than 6 inches</option>
            <option value='over_6_inches'>More than 6 inches</option>
          </select>
          <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
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

        {/* Services */}
        <div className='relative'>
          <label className='label'>Services *</label>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg border border-gray-300 hover:border-gray-400 focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent'>
            <div className='space-y-2'>
              <p className='text-secondary font-semibold text-sm'>
                Project Services
              </p>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='flex items-center space-x-2'
                >
                  <input
                    type='checkbox'
                    name='services'
                    id={`service-${service.id}`}
                    value={service.id}
                    checked={formData.services.includes(service.id)}
                    onChange={handleChange}
                    className='h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded'
                  />
                  <label
                    htmlFor={`service-${service.id}`}
                    className='text-xs md:text-sm text-gray-600 leading-tight'
                  >
                    {service.name}
                  </label>
                </div>
              ))}
            </div>
            <div className='space-y-2'>
              <p className='text-secondary font-semibold text-sm'>
                Subscription Services
              </p>
              {servicePlans.map((plan) => (
                <div
                  key={plan.id}
                  className='flex items-center space-x-2'
                >
                  <input
                    type='checkbox'
                    name='subscriptions'
                    id={`subscription-${plan.id}`}
                    value={plan.id}
                    checked={formData.subscriptions.includes(plan.id)}
                    onChange={handleChange}
                    className='h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded'
                  />
                  <label
                    htmlFor={`subscription-${plan.id}`}
                    className='text-xs md:text-sm text-gray-600 leading-tight'
                  >
                    <span className='text-secondary font-medium'>
                      ${plan.price}
                    </span>{' '}
                    {plan.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className='relative'>
          <label
            htmlFor='message-input'
            className='label'
          >
            Message *
          </label>
          <textarea
            name='message'
            id='message-input'
            value={formData.message}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none transition-all'
            rows={3}
            placeholder='Please provide details about your project...'
            required
          />
        </div>

        {/* COMMENTED OUT - File Upload temporarily disabled */}
        {/* <CustomFileUpload
          onFileSelect={handleFileSelect}
          multiple={true}
          maxFiles={5}
          accept='image/*,.pdf,.doc,.docx'
          required={false}
          name='files'
          id='files-input'
        /> */}

        {/* COMMENTED OUT - Show selected files */}
        {/* {formData.files && formData.files.length > 0 && (
          <div className='text-sm text-gray-600 mb-4'>
            <p className='font-medium mb-2'>Selected files:</p>
            <ul className='space-y-1'>
              {formData.files.map((file, index) => (
                <li
                  key={index}
                  className='truncate bg-gray-50 px-2 py-1 rounded text-xs'
                >
                  {file.name} ({(file.size / 1024).toFixed(1)}KB)
                </li>
              ))}
            </ul>
          </div>
        )} */}

        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full btn-primary transition-all transform active:scale-95 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
