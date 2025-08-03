'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import {
  RenderImageContext,
  RenderImageProps,
  ColumnsPhotoAlbum,
} from 'react-photo-album';
import 'react-photo-album/columns.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { CloudinaryImageData } from '@/types';

interface GalleryProps {
  gallery: CloudinaryImageData[];
}

export default function Gallery({ gallery }: Readonly<GalleryProps>) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ColumnsPhotoAlbum
        photos={gallery}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1400} // Increased from 1200
        spacing={8} // Reduced spacing between images (default is 8)
        columns={(containerWidth) => {
          // Fewer columns means larger images
          if (containerWidth < 768) return 2; // Mobile: 1 column
          if (containerWidth < 1024) return 3; // Tablet: 2 columns
          return 4; // Desktop: 3 columns (reduced from default)
        }}
        sizes={{
          size: '100vw', // Use full viewport width
          sizes: [
            { viewport: '(min-width: 1024px)', size: '33vw' }, // Desktop: 1/3 of viewport
            { viewport: '(min-width: 768px)', size: '50vw' }, // Tablet: 1/2 of viewport
            { viewport: '(max-width: 767px)', size: '100vw' }, // Mobile: full viewport
          ],
        }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={gallery}
      />
    </>
  );
}

function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
        borderRadius: '4px', // Optional: add rounded corners
        overflow: 'hidden', // Ensure images don't overflow the container
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        style={{ objectFit: 'cover' }} // Ensure images cover their container
        className='transition-transform duration-300 hover:scale-105' // Optional: add hover effect
      />
    </div>
  );
}
