import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Insideout Automation - Smart Living & Property Tech',
    short_name: 'Insideout',
    description: 'Outage-resilient smart home kits and professional 3D virtual tours designed for Ghanaian realities. Upgrade your space today.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#114a2a',
    icons: [
      {
        src: 'images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
