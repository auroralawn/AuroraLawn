import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  getServiceByID,
  processServiceData,
  getImagesByTag,
} from '@/lib/api/cloudinary';
import { services } from '@/lib/data';
import Gallery from '@/components/Shared/Gallery';
import ServiceCTA from '@/components/services/ServiceCTA';
// import RelatedServices from '@/components/services/RelatedServices';
// import ServiceFeaturesCard from '@/components/services/ServiceFeaturesCard';

interface PageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

// Generate static params at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

async function getServiceData(id: string) {
  const service = getServiceByID(id);
  if (!service) return null;

  const galleryImages = await getImagesByTag(service.galleryTag);
  return processServiceData(service, galleryImages);
}

export default async function ServicePage({ params }: Readonly<PageProps>) {
  const { serviceId } = await params;
  const service = await getServiceData(serviceId);

  if (!service) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4'>
        <div className='w-full max-w-4xl text-center bg-white rounded-xl shadow-lg p-8'>
          <div className='mb-6 text-gray-500'>
            <Link
              href='/services'
              className='inline-flex items-center text-primary hover:text-primary-light transition-colors font-medium'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
              Return to Services
            </Link>
          </div>
          <h2 className='text-gray-800 mb-4'>Service Not Found</h2>
          <p className='text-gray-600 mb-6'>
            We couldn&apos;t find the service you&apos;re looking for.
          </p>
          <Link
            href='/services'
            className='inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors'
          >
            Browse Available Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative h-96 md:h-[500px] w-full'>
        <Image
          src={service.src}
          alt={service.name}
          className='object-cover'
          priority
          fill
        />
        <div className='absolute inset-0 bg-black/70'>
          <div className='container mx-auto px-4 h-full flex flex-col justify-end pb-12'>
            <div className='max-w-3xl'>
              <Link
                href='/services'
                className='inline-flex items-center text-white hover:text-gray-200 transition-colors mb-4'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                All Services
              </Link>
              <h2 className='text-white mb-4'>{service.name}</h2>
              <p className='text-lg text-gray-100 max-w-2xl'>
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Left Column - Main Content */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-xl'>
              <h3 className='mb-6'>About This Service</h3>
              <div className='prose prose-lg max-w-none text-gray-600'>
                <p>{service.fullDescription}</p>
              </div>

              <div className='mt-16'>
                <h3 className='mb-8 flex items-center'>
                  <span className='mr-3'>Service Gallery</span>
                  <div className='h-px bg-gray-300 flex-grow mt-1'></div>
                </h3>
                <Gallery gallery={service.gallery} />
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8'>
              {/* <ServiceFeaturesCard features={service.features} /> */}

              <div className='bg-orange-50 rounded-xl p-8 border border-orange-100'>
                <p className='text-xl font-bold text-orange-800 mb-4'>
                  Need Help?
                </p>
                <p className='text-gray-700 mb-6'>
                  Have questions about our {service.name.toLowerCase()} service?
                  Our experts are here to help.
                </p>
                <div className='flex justify-between space-x-4'>
                  <Link
                    href='/contact'
                    className='flex-1 text-center py-2 px-4 border border-orange-400 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors'
                  >
                    Contact Us
                  </Link>
                  <Link
                    href='/faq'
                    className='flex-1 text-center py-2 px-4 border border-orange-400 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors'
                  >
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      {/* <RelatedServices currentServiceId={service.id} /> */}

      {/* Call to Action */}
      <ServiceCTA serviceName={service.name} />
    </div>
  );
}

// Add metadata generation for SEO
export async function generateMetadata({ params }: PageProps) {
  const { serviceId } = await params;
  const service = await getServiceData(serviceId);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} | Our Services`,
    description: service.description,
    openGraph: {
      images: [{ url: service.src }],
    },
  };
}
