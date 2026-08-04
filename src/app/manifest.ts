import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  background_color: '#FFFFFF',
  dir: 'ltr',
  display: 'standalone',
  icons: [
    {
      purpose: 'any',
      sizes: '48x48 72x72 96x96 128x128 256x256',
      src: '/vercel.svg',
    },
  ],
  lang: 'en',
  name: 'Next.js App Template',
  prefer_related_applications: false,
  short_name: 'nextarter-chakra',
  start_url: '/',
  theme_color: '#FFFFFF',
});

export default manifest;
