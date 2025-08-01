'use client';
import { useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ServiceCard from '../Shared/ServiceCard';

interface Service {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

interface CarouselProps {
  services: Service[];
}

export default function Carousel({ services }: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      // Get the actual rendered width of the first card
      const firstCard = scrollContainerRef.current.querySelector(
        '[style*="width: 360px"]'
      );
      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width
        : 360;
      console.log(cardWidth);
      const gap = 24; // or calculate dynamically if needed
      const scrollAmount = cardWidth + gap;

      const finalScrollAmount =
        direction === 'left' ? -scrollAmount : scrollAmount;

      scrollContainerRef.current.scrollBy({
        left: finalScrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative w-full max-w-full'>
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className='flex gap-6 py-4 px-3'
        style={{
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className='flex-shrink-0 flex'
            style={{ width: '360px' }}
          >
            <ServiceCard
              key={service.id}
              id={service.id}
              imgSrc={service.imageSrc}
              serviceName={service.name}
              serviceDescrition={service.description}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={() => scroll('left')}
          className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50'
          aria-label='Previous services'
        >
          <BiChevronLeft className='w-5 h-5 text-gray-600' />
        </button>

        <button
          onClick={() => scroll('right')}
          className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50'
          aria-label='Next services'
        >
          <BiChevronRight className='w-5 h-5 text-gray-600' />
        </button>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
