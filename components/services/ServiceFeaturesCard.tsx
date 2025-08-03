import Button from '@/components/ui/Button';
import React from 'react';

interface ServiceFeaturesCardProps {
  features: string[];
}

export default function ServiceFeaturesCard({
  features,
}: Readonly<ServiceFeaturesCardProps>) {
  return (
    <div className='bg-gray-50 rounded-xl shadow-sm p-8 mb-8'>
      <h4 className='text-gray-800 mb-6'>Service Features</h4>
      <ul className='space-y-4 mb-8'>
        {features.map((feature) => (
          <li
            key={feature}
            className='flex items-start'
          >
            <div className='flex-shrink-0 mt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-primary'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <span className='ml-3 text-gray-700'>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        link='/contact'
        text='Request a Free Quote'
      />
    </div>
  );
}
