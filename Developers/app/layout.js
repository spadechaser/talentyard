import "./globals.css";
import { lexend } from "./localFont";

export const metadata = {
  metadataBase: new URL('https://firebasestorage.googleapis.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: 'black',
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  title: "Talentyard: Achieving Innovation through Collaboration",
  description: "Building for the next generation",
  category: 'technology',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'resume',
    'portfolio',
    'career',
    'tech',
    'tech career',
  ],
  openGraph: {
    images:
      'v0/b/warp-communication-app.appspot.com/o/summary_card.png?alt=media&token=5d2291b7-aee8-428d-b707-876431ce547c',
    title: 'Career OS - Building a Sustainable Career.',
    description:
      'A super platform designed to be the operating system for professionals getting into tech. The goal of this platform is to help individuals level up in the key areas that influences their career outcomes.',
    type: 'website',
    siteName: 'Career OS',
    authors: ['Augustine Francis'],
    url: 'https://www.tryporpra.com',
  },
  twitter: {
    card: 'summary_large_image',
    images:
      'v0/b/warp-communication-app.appspot.com/o/summary_card.png?alt=media&token=5d2291b7-aee8-428d-b707-876431ce547c',
    creator: '@_talentseeker',
    alt: 'propel your career',
    url: 'https://www.tryporpra.com',
    title: 'Career OS - Building a Sustainable Career.',
    description:
      'A super platform designed to be the operating system for professionals getting into tech. The goal of this platform is to help individuals level up in the key areas that influences their career outcomes.',
    id: {
      iphone: 'twitter_app://iphone',
      ipad: 'twitter_app://ipad',
      googleplay: 'twitter_app://googleplay',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexend.variable}`}>{children}</body>
    </html>
  );
}
