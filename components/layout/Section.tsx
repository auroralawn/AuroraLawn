interface SectionProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Section({
  children,
  customClass,
}: Readonly<SectionProps>) {
  return <section className={`section ${customClass}`}>{children}</section>;
}
