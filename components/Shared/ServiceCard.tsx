import Image from 'next/image';
import React from 'react';
// import { processServiceData } from '@/lib/api/cloudinary';

interface ServiceCardProps {
  showAmount?: number;
  filterOut?: string;
  serviceName: string;
  serviceDescrition: string;
}

// async function getServicesData() {
//   return services.map((service) => processServiceData(service));
// }

export default async function ServiceCard({
  serviceName,
  serviceDescrition,
}: Readonly<ServiceCardProps>) {
  // const servicesWithImages = await getServicesData();

  // if (filterOut) {
  //   servicesWithImages = servicesWithImages.filter(
  //     (service) => service.id !== filterOut
  //   );
  // }
  // const displayedServices = showAmount
  //   ? servicesWithImages.slice(0, showAmount)
  //   : servicesWithImages;

  return (
    // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    //   {displayedServices.map((service) => (
    //     <Link
    //       href={`/services/${service.id}`}
    //       key={service.id}
    //       className='group'
    //     >

    //     </Link>
    //   ))}
    // </div>
    <div className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
      <div className='relative h-64'>
        <Image
          src={'/hero.jpeg'}
          alt={serviceName}
          className='object-cover group-hover:scale-105 transition-transform duration-300'
          fill
        />
      </div>
      <div className='p-6'>
        <h6 className='text-center text-gray-800 mb-2 hover:text-primary-light transition-colors'>
          {serviceName}
        </h6>
        <p className='text-center text-gray-600 line-clamp-2'>
          {serviceDescrition}
        </p>
        <button className='btn-secondary'>More Details</button>
      </div>
    </div>
  );
}
