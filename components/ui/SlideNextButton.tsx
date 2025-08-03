import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className='text-4xl text-gray-400 hover:text-gray-600 transition-colors z-10'
      aria-label='Next slide'
    >
      <IoIosArrowDroprightCircle aria-hidden />
    </button>
  );
}
