import { FaHandsHelping } from 'react-icons/fa';
import {
  FaFacebook,
  // FaFacebookMessenger,
  FaGoogle,
  FaHouse,
  FaLightbulb,
  FaPhoneVolume,
  FaToolbox,
} from 'react-icons/fa6';
import { IoIosSend } from 'react-icons/io';
import { IoRibbon } from 'react-icons/io5';
import { PiPlantFill } from 'react-icons/pi';
// import { RiInstagramFill } from 'react-icons/ri';

export const companyName = 'Aurora Lawn & Landscaping';

export const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: FaHouse,
  },
  {
    name: 'About Us',
    href: '/about',
    icon: FaLightbulb,
  },
  {
    name: 'Services',
    href: '/services',
    icon: FaToolbox,
  },
  {
    name: 'Contact Us',
    href: '/contact',
    icon: FaPhoneVolume,
  },
];

export const companyValues = [
  {
    label: 'Integrity',
    description:
      'Treating your property like our own isn’t just a slogan—it’s how we operate. Honest communication, fair pricing, and respect for your home are non-negotiables.',
    icon: FaHandsHelping,
  },
  {
    label: 'Quality',
    description:
      'We don’t cut corners—we build landscapes that last. From premium materials to skilled craftsmanship, every project reflects our commitment to excellence.',
    icon: IoRibbon,
  },
  {
    label: 'Commitment',
    description:
      'Beautiful spaces shouldn’t cost the earth. We prioritize water-wise designs, native plants, and eco-friendly practices to protect your yard—and the planet.',
    icon: PiPlantFill,
  },
];

// Target values for the metrics
export const metrics = [
  {
    metric: 'Years of Experience',
    target: 6,
    duration: 4,
    suffix: '+',
  },
  {
    metric: 'Completed Projects',
    target: 20,
    duration: 4,
    suffix: '+',
  },
  {
    metric: 'Client Satisfaction',
    target: 100,
    duration: 3,
    suffix: '%',
  },
];

export const contactInfo = [
  {
    name: 'Email',
    content: 'AuroraLawnandLandscape@gmail.com',
    url: 'mailto:AuroraLawnandLandscape@gmail.com',
    icon: IoIosSend,
  },
  {
    name: 'Phone Number',
    content: '(612) 612-6122',
    url: 'tel:6126126122',
    icon: FaPhoneVolume,
  },
];

// export const socials = [
//   {
//     name: 'Facebook',
//     url: 'https://www.facebook.com/',
//     icon: FaFacebookMessenger,
//   },
//   {
//     name: 'Instagram',
//     url: 'https://www.instagram.com/',
//     icon: RiInstagramFill,
//   },
// ];

export const reviewLinks = [
  {
    name: 'GoogleReview',
    url: 'https://search.google.com/local/writereview?placeid=',
    label: 'Leave Us a Google Review!',
    icon: FaGoogle,
  },
  {
    name: 'FacebookReview',
    url: 'https://www.facebook.com/profile.php?id=',
    label: 'Share Your Feedback on Facebook!',
    icon: FaFacebook,
  },
];

export const testimonials = [
  {
    clientName: 'John Doe',
    location: 'minnesota',
    rating: 5,
    review:
      'Very Good work I love it oh yeahhhh. It was very good and my yard is clean and beautiful.Very Good work I love it oh yeahhhh. It was very good and my yard is clean and beautiful.Very Good work I love it oh yeahhhh. It was very good and my yard is clean and beautiful.',
  },
  {
    clientName: 'John Doe',
    location: 'minnesota',
    rating: 5,
    review:
      'Very Good work I love it oh yeahhhh. It was very good and my yard is clean and beautiful.',
  },
  {
    clientName: 'John Doe',
    location: 'minnesota',
    rating: 5,
    review:
      'Very Good work I love it oh yeahhhh. It was very good and my yard is clean and beautiful.',
  },
];

// export const servicePlans = [
//   {
//     id: 'basic-plan',
//     name: 'Basic Plan',
//     perks: [
//       'Lawn Mowing',
//       'Lawn Blowing',
//       'Push Mow + $35',
//       'Trimmings + $10',
//       'Edging + $10',
//       'Bagging/Disposal + $5',
//       'Per Extra Cut + $5',
//     ],
//     price: 25,
//   },
//   {
//     id: 'advanced-plan',
//     name: 'Advanced Plan',
//     perks: [
//       'Double Cut Lawn Mowing',
//       'Lawn Blowing',
//       'Push Mow',
//       // 'Lawn Blowing would this be done if things are being bagged?',
//       // 'Push Mow what is diffrence between lawn mow and push mow?',
//       'Trimmings',
//       'Edging',
//       'Bagging/Disposal',
//       'Per Extra Cut + $5',
//     ],
//     price: 55,
//   },
//   {
//     id: 'premium-plan',
//     name: 'Premium Plan',
//     perks: [
//       'Multiple Cut Lawn Mowing',
//       'Lawn Blowing',
//       'Push Mow + $35',
//       // 'Lawn Blowing would this be done if things are being bagged?',
//       // 'Push Mow what is diffrence between lawn mow and push mow?',
//       'Trimmings',
//       'Edging',
//       'Bagging/Disposal',
//       'Patterns',
//       'Per Extra Cut + $5',
//     ],
//     price: 75,
//   },
//   {
//     id: 'cleanup-plan',
//     name: 'Cleanup Plan',
//     perks: ['Bagging/Disposal'],
//     price: 125,
//   },
// ];

import { HiSparkles, HiStar, HiLightningBolt } from 'react-icons/hi';

import { PiBroomBold } from 'react-icons/pi';

export const servicePlans = [
  {
    id: 'basic-plan',
    name: 'Essential Care',
    tagline: 'Get your lawn cut right',
    price: 25,
    frequency: 'Weekly',
    idealFor: 'Small to medium lawns, basic maintenance needs',
    popular: true,
    icon: HiStar,

    perks: [
      '✓ Professional mowing service',
      '✓ Walkway cleanup included',
      '• Push mowing for tight spots (+$35)',
      '• Crisp edge trimming (+$10)',
      '• Grass collection service (+$5)',
    ],
  },
  {
    id: 'advanced-plan',
    name: 'Complete Care',
    tagline: 'Your neighbors will notice',
    price: 55,
    frequency: 'Weekly',
    idealFor: 'Medium to large lawns, professional appearance desired',
    popular: false,
    icon: HiSparkles,

    perks: [
      '✓ Premium double-cut mowing',
      '✓ Complete cleanup service',
      '✓ Push mowing included',
      '✓ Precise edge trimming',
      '✓ Grass collection & disposal',
    ],
  },
  {
    id: 'premium-plan',
    name: 'Signature Care',
    tagline: 'Magazine-worthy results',
    price: 75,
    frequency: 'Weekly',
    idealFor: 'Large properties, premium curb appeal, HOA requirements',
    popular: false,
    icon: HiLightningBolt,

    perks: [
      '✓ Multi-pass perfection mowing',
      '✓ Premium cleanup service',
      '✓ Detailed push mowing',
      '✓ Precision edge trimming',
      '✓ Full collection & disposal',
      '✓ Custom mowing patterns',
    ],
  },
  {
    id: 'cleanup-plan',
    name: 'Fresh Start',
    tagline: 'Reset your outdoor space',
    price: 125,
    frequency: 'One-time',
    idealFor: 'Spring/fall cleanup, post-storm recovery, move-in preparation',
    popular: false,
    icon: PiBroomBold,

    perks: [
      '✓ Complete debris removal',
      '✓ Overgrown area restoration',
      '✓ Storm damage cleanup',
      '✓ Event preparation service',
      '✓ Bulk waste disposal',
    ],
  },
];

export const services = [
  {
    id: 'lawn-mowing',
    name: 'Lawn Mowing',
    mainImageId: 'lawn-mowing-main',
    galleryTag: 'lawn-mowing',
    description:
      'Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.',
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    mainImageId: 'landscaping-main',
    galleryTag: 'landscaping',
    description:
      'Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.',
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
  },
  {
    id: 'gardening',
    name: 'Gardening',
    mainImageId: 'gardening-main',
    galleryTag: 'gardening',
    description:
      'Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.',
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
  },
  {
    id: 'decks',
    name: 'Decks',
    mainImageId: 'decks-main',
    galleryTag: 'decks',
    description:
      'Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.',
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
  },
  {
    id: 'pond-building',
    name: 'Pond Building',
    mainImageId: 'pond-building-main',
    galleryTag: 'pond-building',
    description:
      'Elegant, durable paver driveways and pathways that enhance property access while adding distinctive character to your landscape.',
    fullDescription: `Our custom driveways and pathways combine functionality with aesthetic appeal, creating striking first impressions and improving property navigation. Using premium paving materials and expert installation techniques, we ensure these high-traffic areas remain beautiful and functional for decades. From grand circular driveways to charming garden paths, each project is engineered for proper drainage, stability, and visual harmony with your home and surrounding landscape. Transform ordinary transitions into extraordinary features that guide and delight.`,
  },
];
