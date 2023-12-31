import type { Metadata } from 'next';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    template: '%s | Logos Systems',
    default: 'Logos Systems',
  },
  description: 'Logos Systems',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
