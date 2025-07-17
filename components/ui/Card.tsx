import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  primary?: boolean;
  even?: boolean;
  url?: string;
  onClick?: () => void;
  customClass?: string;
}

export default function Card({
  children,
  primary = true,
  even = true,
  url = '',
  customClass,
  // onClick,
}: Readonly<CardProps>) {
  const mode1 = even ? 'testimonial-card-even' : 'testimonial-card-odd';
  const mode2 = primary ? 'basic-card' : mode1;

  return (
    <div className={`${mode2} ${customClass} text-center`}>
      {url ? (
        <Link
          href={url}
          className='group'
        >
          {children}
        </Link>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
