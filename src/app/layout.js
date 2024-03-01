import { ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';

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
      </head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
