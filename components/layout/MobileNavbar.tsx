'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, contactInfo /*, socials */ } from '@/lib/data';
import logo from '@/public/AuroraLogo.webp';

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
      className={`${customClass} fixed top-0 left-0 right-0 bg-white text-gray-700 shadow-md z-50 w-full`}
    >
      {/* Fixed Nav Bar - Always visible */}
      <div className='w-full max-w-full mx-auto px-4 py-2 z-30'>
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href={'/'}>
              <Image
                src={logo}
                alt='Aurora Lawn and Landscaping'
                width={80}
                height={20}
                className='w-20 h-auto'
              />
            </Link>
          </div>

          {/* Hamburger Icon or X icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-700 focus:outline-none relative flex-shrink-0'
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
        className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out z-10 overflow-hidden ${
          isOpen
            ? 'opacity-100 scale-y-100 origin-top'
            : 'opacity-0 scale-y-0 origin-top pointer-events-none'
        }`}
        style={{
          top: '70px',
          left: '0',
          right: '0',
          height: 'calc(100vh - 60px)',
        }}
      >
        <div className='w-full max-w-full mx-auto px-4 py-8 h-full flex flex-col overflow-hidden'>
          {/* Navigation Links */}
          <div className='flex flex-col gap-4 w-full'>
            {navLinks.map((navLink) => (
              <Link
                key={`${navLink.name} mobile`}
                href={navLink.href}
                className='block py-3 text-lg w-full break-words'
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {navLink.name}
              </Link>
            ))}
          </div>

          <div className='flex flex-wrap gap-4 sm:gap-8 w-full overflow-hidden'>
            {/* Social Icons */}
            {/* <div className='flex flex-wrap gap-4 sm:gap-7 mt-10'>
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='text-gray-700 flex-shrink-0'
                >
                  <social.icon
                    className='w-5 h-5'
                    aria-hidden
                  />
                </Link>
              ))}
            </div> */}

            {/* Contact Icons */}
            <div className='flex flex-wrap gap-4 sm:gap-7 mt-10'>
              {contactInfo.map((contact) => (
                <Link
                  key={contact.name}
                  href={contact.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={contact.name}
                  className='text-gray-700 flex-shrink-0'
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
