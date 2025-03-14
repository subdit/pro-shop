import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import styles from '@/assets/styles/styles';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: `%s | APP_NAME`, default: APP_NAME },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
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
