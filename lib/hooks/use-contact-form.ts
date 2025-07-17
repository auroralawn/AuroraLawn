import { ContactFormData } from '@/types';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
// import { useRecaptcha } from '@/hooks/useRecaptcha';

export const resetFormData = (setFormData: (data: ContactFormData) => void) => {
  setFormData({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    services: [''],
    message: '',
  });
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    services: [''],
    message: '',
  });
  // const { token, loading, refresh } = useRecaptcha('contact_form');
  const pathname = usePathname(); // Get current route path
  const [submitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
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
      // First verify the captcha
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
          pageUri: `https://www.auroralawnandlandscaping.com${pathname}`, // Add dynamic URL
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
          zipcode: '',
          services: [''],
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

  return {
    formData,
    submitted,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  };
};
