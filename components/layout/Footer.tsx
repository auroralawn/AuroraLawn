import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { contactInfo } from '@/lib/data';
import { navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className='bg-white mt-10'>
      <div className='basic-grid w-full mx-auto px-4 text-center'>
        <div className='flex justify-center items-center space-x-6 mb-6'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='paragraph-link'
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href={'/'}
          className='flex flex-col justify-center items-center  mb-6'
        >
          <h4 className='font-medium leading-0 tracking-normal '>
            Aurora Lawn & Landscaping
          </h4>
          <p className='text-center text-xs opacity-50 mb-4'>
            Transforming Spaces, Creating Experiences
          </p>
          <Image
            src='/AuroraLogo.webp'
            alt='Aurora Lawn & Landscaping Logo'
            width={120}
            height={120}
            className='mb-2'
          />
        </Link>
        <div className='flex flex-col justify-center items-center mb-10'>
          <h5 className='font-medium'>Get in touch</h5>
          <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-2'>
            {contactInfo.map((contact) => (
              <Link
                key={contact.name}
                href={contact.url}
                className='flex items-center gap-4'
              >
                <contact.icon />
                {contact.content}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='h-10 bg-secondary flex items-center justify-center'>
        <p className='text-xs md:text-sm text-center text-white'>
          &copy; 2025 Aurora Lawn & Landscaping. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
