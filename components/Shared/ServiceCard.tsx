import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  id: string;
  imgSrc: string;
  showAmount?: number;
  filterOut?: string;
  serviceName: string;
  serviceDescrition: string;
  isFullWidth?: boolean;
}

export default function ServiceCard({
  id,
  imgSrc,
  serviceName,
  serviceDescrition,
}: Readonly<ServiceCardProps>) {
  return (
    <Link
      href={`/services/${id}`}
      className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full h-full'
    >
      <div className='relative h-64'>
        <Image
          src={imgSrc}
          alt={serviceName}
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          fill
        />
      </div>
      <div className='p-6 flex flex-col gap-5'>
        <h6 className='text-center text-gray-800 hover:text-primary-light transition-colors'>
          {serviceName}
        </h6>
        <p className='text-center text-gray-600 line-clamp-2'>
          {serviceDescrition}
        </p>
        <button className='btn-secondary'>More Details</button>
      </div>
    </Link>
  );
}
