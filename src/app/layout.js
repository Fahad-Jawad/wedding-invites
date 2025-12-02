import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import ReduxProvider from "@/components/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WeddingInvites - Create Beautiful Digital Wedding Invitations Online | Free Wedding Invitation Maker",
  description: "Design stunning, personalized digital wedding invitations in minutes. Share instantly with guests, track RSVPs in real-time, and manage your guest list effortlessly. Choose from elegant templates, customize every detail, and save time & money. Start free today!",
  keywords: "wedding invitations online, digital wedding invitations, wedding invitation maker, online wedding invites, custom wedding invitations, wedding RSVP tracker, free wedding invitation templates, electronic wedding invitations, wedding invitation design, virtual wedding invitations, modern wedding invites, wedding planning tools, personalized wedding invitations, wedding guest management, wedding invitation website",
  authors: [{ name: "WeddingInvites" }],
  creator: "WeddingInvites",
  publisher: "WeddingInvites",
  metadataBase: new URL('https://weddinginvites.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WeddingInvites - Create Beautiful Digital Wedding Invitations Online',
    description: 'Design stunning, personalized wedding invitations in minutes. Share instantly, track RSVPs, and save hundreds. Join 50,000+ happy couples.',
    url: 'https://weddinginvites.com',
    siteName: 'WeddingInvites',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WeddingInvites - Beautiful Digital Wedding Invitations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeddingInvites - Create Beautiful Digital Wedding Invitations',
    description: 'Design stunning wedding invitations in minutes. Share instantly, track RSVPs, save money.',
    images: ['/images/twitter-image.jpg'],
    creator: '@weddinginvites',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#9333ea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
