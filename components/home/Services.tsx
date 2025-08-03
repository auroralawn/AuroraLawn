import { services } from '@/lib/data';
import Container from '../layout/Container';
import Section from '../layout/Section';

import { getImagesByTag, processServiceData } from '@/lib/api/cloudinary';
import Carousel from '../ui/Carousel';

async function getServicesData() {
  const processedServices = await Promise.all(
    services.map(async (service) => {
      const galleryImages = await getImagesByTag(service.galleryTag);
      const processedData = processServiceData(service, galleryImages);

      return {
        id: service.id,
        name: service.name,
        description: service.description,
        imageSrc: processedData.src,
      };
    })
  );
  return processedServices;
}

export default async function Services() {
  const servicesData = await getServicesData();

  return (
    <Section>
      <Container>
        <h4>Our Services</h4>
        <h3>Committed to Exceptional Results</h3>
        <Carousel services={servicesData} />
      </Container>
    </Section>
  );
}

// export default function Services() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: string) => {
//     if (scrollContainerRef.current) {
//       const cardWidth = 360;
//       const gap = 24;
//       const scrollAmount = cardWidth + gap;

//       const finalScrollAmount =
//         direction === 'left' ? -scrollAmount : scrollAmount;

//       scrollContainerRef.current.scrollBy({
//         left: finalScrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Center the first card on mount and resize
//   useEffect(() => {
//     const centerFirstCard = () => {
//       if (scrollContainerRef.current) {
//         const container = scrollContainerRef.current;
//         const containerWidth = container.clientWidth;
//         const cardWidth = 360;

//         // Calculate the left padding needed to center the first card
//         const paddingLeft = Math.max(0, (containerWidth - cardWidth) / 2);
//         container.style.paddingLeft = `${paddingLeft}px`;
//         container.style.paddingRight = `${paddingLeft}px`;
//       }
//     };

//     // Center on mount
//     centerFirstCard();

//     // Center on resize
//     window.addEventListener('resize', centerFirstCard);
//     return () => window.removeEventListener('resize', centerFirstCard);
//   }, []);

//   return (
//     <Section>
//       <Container>
//         <h4>Our Services</h4>
//         <h3>Committed to Exceptional Results</h3>

//         <div className='relative w-full max-w-full'>
//           {/* Carousel Container */}
//           <div
//             ref={scrollContainerRef}
//             className='flex gap-6 pb-4 bg-black'
//             style={{
//               overflowX: 'scroll',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               WebkitOverflowScrolling: 'touch',
//             }}
//           >
//             {services.map((service) => (
//               <div
//                 key={service.name}
//                 className='flex-shrink-0'
//                 style={{ width: '360px' }}
//               >
//                 <ServiceCard
//                   href={service.id}
//                   serviceName={service.name}
//                   serviceDescrition={service.description}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <div className='flex justify-center gap-4 mt-6'>
//             <button
//               onClick={() => scroll('left')}
//               className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50'
//               aria-label='Previous services'
//             >
//               <BiChevronLeft className='w-5 h-5 text-gray-600' />
//             </button>

//             <button
//               onClick={() => scroll('right')}
//               className='flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50'
//               aria-label='Next services'
//             >
//               <BiChevronRight className='w-5 h-5 text-gray-600' />
//             </button>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }

// const scrollContainerRef = useRef(null);

// const scroll = (direction: string) => {
//   if (scrollContainerRef.current) {
//     const containerWidth = scrollContainerRef.current.clientWidth;
//     const scrollAmount =
//       direction === 'left' ? -containerWidth * 0.8 : containerWidth * 0.8;
//     scrollContainerRef.current.scrollBy({
//       left: scrollAmount,
//       behavior: 'smooth',
//     });
//   }
// };

// <Card
//   key={service.id}
//   primary={index % 2 == 0}
//   customClass='p-10 mx-2'
// >
//   <div className='overflow-hidden rounded-md transition-shadow'>
//     <div className='relative h-20 md:h-20 lg:h-32 '>
//       <Image
//         src={service.mainImageId}
//         alt='Main'
//         fill
//         className='object-cover group-hover:scale-105 transition-transform duration-300'
//       />
//     </div>
//   </div>

//   <div className=''>
//     <h6>{service.name}</h6>
//     <p>{service.description}</p>
//     <button className='btn-primary'>More Details</button>
//   </div>
// </Card>

// import { processServiceData } from '@/lib/api/cloudinary';

// async function getServicesData() {
//   return services.map((service) => processServiceData(service));
// }

// const servicesWithImages = await getServicesData();

// if (filterOut) {
//   servicesWithImages = servicesWithImages.filter(
//     (service) => service.id !== filterOut
//   );
// }
// const displayedServices = showAmount
//   ? servicesWithImages.slice(0, showAmount)
//   : servicesWithImages;

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
