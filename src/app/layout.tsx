// Imports:
import { DESCRIPTION, TITLE } from '@/constants/Metadata';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Providers from './providers';

// This is a custom font from Google Fonts:
const dmSansFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

// This is a metadata object that contains the title and description of the page:
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

// This is the root layout component that wraps the entire application:
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSansFont.className} bg-background`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
