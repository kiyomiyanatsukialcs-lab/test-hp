import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '富士にじいろ保育園 ｜ 静かで、自由な場所。',
    template: '%s ｜ 富士にじいろ保育園',
  },
  description: '富士にじいろ保育園は、建築の美しさとともに、一人ひとりの可能性が育つ場所です。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerif.variable} ${notoSerifJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
