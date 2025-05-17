// Imports:
import { DESCRIPTION, TITLE } from '@/constants/Metadata';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// This is a custom font from Google Fonts:
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
