import type { Metadata } from 'next';
import { fonts } from '@/app/ui/fonts';
import './globals.css';
import Navbar from './components/partials/Navbar';

export const metadata: Metadata = {
  title: 'Rwanda Rentals',
  description: 'The number one rental platform in East Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${fonts.className} antialiased`}>
        {children}
        <Navbar />
      </body>
      {/* <div className="pb-20 pt-28">{children}</div> */}
    </html>
  );
}
