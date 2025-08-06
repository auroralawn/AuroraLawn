import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
  variant?: string;
  py?: string;
}

export default function Button({
  text,
  link,
  // variant = 'fill',
  // py = 'py-3',
}: Readonly<ButtonProps>) {
  //   const style =
  //     variant === 'outline'
  //       ? 'border border-[#FF8106] text-[#FF8106] hover:bg-gray-100'
  //       : 'bg-[#FF8106]/95 text-white hover:bg-[#ff7206]';

  return (
    <Link
      href={link}
      className={`btn-primary hover:scale-105 transition-all`}
    >
      {text}
    </Link>
  );
}
