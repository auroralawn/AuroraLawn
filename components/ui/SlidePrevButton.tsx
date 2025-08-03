import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      aria-label='Previous slide'
    >
      <IoIosArrowDropleftCircle
        className='text-4xl text-gray-400 hover:text-gray-600 transition-colors'
        aria-hidden
      />
    </button>
  );
}
