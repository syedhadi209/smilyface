import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'smileyfacealigner | Premium Clear Aligners for Your Perfect Smile',
  description:
    'smileyfacealigner is changing lives through better smiles with premium clear aligners. Innovative technology, professional certified orthodontics, and life-changing results.',
  keywords: ['clear aligners', 'invisible braces', 'orthodontics', 'smileyfacealigner', 'teeth straightening', 'dental technology'],
  openGraph: {
    title: 'smileyfacealigner | Premium Clear Aligners',
    description: 'Reimagining orthodontics with life-changing smiles. Get your dream smile in as little as 6 months.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
