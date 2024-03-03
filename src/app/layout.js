import { ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Miro || Sakebul islam',
  description:
    'Miro is a Single Page NextJS Application Create by Sakebul islam',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
        <link rel='shortcut icon' href='./logo.svg' />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
