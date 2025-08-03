import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, navLinks } from '@/lib/data';
import Button from '../ui/Button';

interface NavbarProps {
  customClass?: string;
}

export default function Navbar({ customClass }: NavbarProps) {
  return (
    <div className={`${customClass} flex-col text-[#333333] `}>
      <nav className='fixed top-3 left-3 right-3 z-50 bg-white shadow-md rounded-lg'>
        <div className='flex items-center justify-between px-10 py-2'>
          {/* Logo and Company Name */}
          <Link
            href='/'
            className='inline-flex flex-col items-center'
          >
            <Image
              src='/logo.png'
              alt='J&D Landscaping & Construction Logo'
              width={90}
              height={60}
            />
          </Link>

          {/* Link */}
          <div className='flex gap-10 items-center'>
            {navLinks.map((link) => (
              <Link
                className='paragraph-link'
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Button
            link={contactInfo[1].url}
            text={contactInfo[1].content}
          />
        </div>
      </nav>
    </div>
  );
}
