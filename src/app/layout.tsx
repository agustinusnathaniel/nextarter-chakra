import type { Metadata, Viewport } from 'next';
import { Figtree as FontBody } from 'next/font/google';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'nextarter-chakra';

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  description: 'Next.js + chakra-ui + TypeScript template',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    description: 'Next.js + chakra-ui + TypeScript template',
    images: {
      alt: 'nextarter-chakra.sznm.dev og-image',
      url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
    },
    title: 'nextarter-chakra',
    url: 'https://nextarter-chakra.sznm.dev',
  },
  title: { default: APP_NAME, template: '%s | nextarter-chakra' },
  twitter: {
    card: 'summary_large_image',
    creator: '@agstnsnathaniel',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: '#FFFFFF',
  width: 'device-width',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={fontBody.className} lang="en" suppressHydrationWarning>
    <body>
      <Provider>
        <Layout>{children}</Layout>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
