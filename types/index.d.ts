/**
 * Represents an image resource from Cloudinary
 * @interface CloudinaryImage
 */
export interface CloudinaryImage {
  /**
   * The public identifier of the image in Cloudinary
   * @example 'samples/animals/kitten-playing'
   */
  public_id: string;
  /**
   * Original width of the image in pixels
   */
  width: number;
  /**
   * Original height of the image in pixels
   */
  height: number;
  /**
   * Alt text for accessibility - either from context or derived from public_id
   * @example 'A playful kitten'
   */
  alt?: string;
}

// Base service without images
export interface ServiceBase {
  id: string;
  name: string;
  mainImageId: string;
  galleryTag: string;
  description: string;
  fullDescription: string;
}

// Service with processed images
export interface Service extends ServiceBase {
  src: string;
  gallery: CloudinaryImageData[];
}

// Cloudinary image data
export interface CloudinaryImageData {
  src: string;
  width: number;
  height: number;
  alt?: string;
}
// Cloudinary resource from API
export interface CloudinaryReource {
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
}

// Cloudinary API response
export interface CloudinaryApiResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
  rate_limit_allowed?: number;
  rate_limit_remaining?: number;
  rate_limit_reset_at?: string;
}

export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  services: string[];
  message: string;
  image?: File | null;
}
