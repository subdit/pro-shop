import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import styles from '@/assets/styles/styles';
import { APP_NAME } from '@/lib/constants';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${APP_NAME} | A modern Thai dress shop in the USA`,
  description: 'A modern Thai dress shop in the USA built with Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { wrapper } = styles;
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen flex-col'>
          <main className={`flex-1 ${wrapper}`}>{children}</main>
        </div>
      </body>
    </html>
  );
}
