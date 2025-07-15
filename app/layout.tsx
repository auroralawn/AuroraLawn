import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNavBar from '@/components/layout/MobileNavbar';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aurora Lawn & Landscaping',
  description: 'Lawn & Landscaping Company Serving Minnesota Area.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} root-layout antialiased`}>
        <Navbar customClass='hidden md:flex' />
        <MobileNavBar customClass='md:hidden' />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
