import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Container({
  children,
  customClass,
}: Readonly<ContainerProps>) {
  return <div className={`my-container ${customClass}`}>{children}</div>;
}
