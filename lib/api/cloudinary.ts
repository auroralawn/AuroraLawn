import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { services } from '../data';
import {
  CloudinaryApiResponse,
  CloudinaryImageData,
  CloudinaryReource,
  Service,
  ServiceBase,
} from '@/types';
import { cache } from 'react';

const cldCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cldApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const cldApiSecret = process.env.SERVER_CLOUDINARY_API_SECRET;

if (!cldCloudName || !cldApiKey || !cldApiSecret) {
  console.error('Cloudinary API credentials not found');
  throw new Error('Missing Cloudinary environment variables.');
}

// Init Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: cldCloudName,
    apiKey: cldApiKey,
    apiSecret: cldApiSecret,
  },
});

export const getServiceByID = (id: string): ServiceBase | undefined => {
  return services.find((service) => service.id === id);
};

// Get cldnry img URL data for specific path
export const getCloudinaryImageData = cache(
  (
    public_id: string,
    width: number = 1800,
    height: number = 1200,
    alt?: string
  ): CloudinaryImageData => {
    const img = cld.image(public_id);
    img.resize(fill().width(width).height(height));

    if (!img)
      throw new Error(`Image data not found for public_id: ${public_id}`);

    return {
      src: img.toURL(),
      width,
      height,
      alt: alt ?? public_id,
    };
  }
);

export const getImagesByTag = async (
  tag: string
): Promise<CloudinaryImageData[]> => {
  try {
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${
      cld.getConfig().cloud?.cloudName
    }/resources/search`;

    const response = await fetch(cloudinaryURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          cldApiKey + ':' + cldApiSecret
        ).toString('base64')}`,
      },

      body: JSON.stringify({
        expression: `tags:${tag}`,
        max_results: 30,
      }),
    });

    const data = (await response.json()) as CloudinaryApiResponse;

    if (data.resources) {
      return data.resources.map((resource: CloudinaryReource) => {
        return getCloudinaryImageData(
          resource.public_id,
          resource.width,
          resource.height
        );
      });
    }

    return [];
  } catch (error) {
    console.error('Error fetching images by tag from Cloudinary:', error);
    return [];
  }
};

export const processServiceData = (
  service: ServiceBase,
  galleryImages?: CloudinaryImageData[]
): Service => {
  const { src } = getCloudinaryImageData(service.mainImageId, 800, 600);

  if (!galleryImages) galleryImages = [];

  return {
    ...service,
    src,
    gallery: galleryImages,
  };
};
