'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, contactInfo, socials } from '@/lib/data';
import logo from '@/public/logo.png';

interface MobileMenuProps {
  customClass?: string;
}

export default function MobileNavBar({ customClass }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav
      className={`${customClass} fixed top-0 left-0 right-0 bg-white text-gray-700 shadow-md z-50`}
    >
      {/* Fixed Nav Bar - Always visible */}
      <div className='container mx-auto px-4 py-4 z-30'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link href={'/'}>
              <Image
                src={logo}
                alt='J&D Landscaping and Construction'
                width={20}
                height={20}
                className='w-10'
              />
            </Link>
          </div>

          {/* Hamburger Icon or X icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-700 focus:outline-none relative'
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open Menu'}
          >
            {isOpen ? (
              <FaTimes
                className='w-5 h-5'
                aria-hidden
              /> // Close icon (X)
            ) : (
              <FaBars
                className='w-5 h-5'
                aria-hidden
              /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Animation */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out z-10 ${
          isOpen
            ? 'opacity-100 scale-y-100 origin-top'
            : 'opacity-0 scale-y-0 origin-top pointer-events-none'
        }`}
        style={{
          top: '69px',
          left: '0',
          right: '0',
          height: 'calc(100vh - 69px)',
        }}
      >
        <div className='container mx-auto px-10 py-8 h-full flex flex-col'>
          {/* Navigation Links */}
          <div className='flex flex-col gap-4'>
            {navLinks.map((navLink) => (
              <Link
                key={`${navLink.name} mobile`}
                href={navLink.href}
                className='block py-3 text-lg'
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {navLink.name}
              </Link>
            ))}
          </div>

          <div className='flex gap-8'>
            {/* Social Icons */}
            <div className='flex gap-7 mt-10'>
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='text-gray-700'
                >
                  <social.icon
                    className='w-5 h-5'
                    aria-hidden
                  />
                </Link>
              ))}
            </div>

            {/* Contact Icons */}
            <div className='flex gap-7 mt-10'>
              {contactInfo.map((contact) => (
                <Link
                  key={contact.name}
                  href={contact.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={contact.name}
                  className='text-gray-700'
                >
                  <contact.icon
                    className='w-5 h-5'
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
