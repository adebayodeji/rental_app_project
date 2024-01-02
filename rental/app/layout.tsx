import type { Metadata } from 'next';
import { fonts } from '@/app/ui/fonts';
import ReactQueryProvider from './components/global/ReactQueryProvider';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import Navbar from './components/partials/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rwanda Rentals',
  description: 'The number one rental platform in Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${fonts.className} antialiased`}>
      <ReactQueryProvider>
        {children}
        <ReactQueryDevtools />
        </ReactQueryProvider>
        <Navbar />
      </body>
    </html>
  );
}
