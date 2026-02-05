import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Refresh Reproduction',
  description: 'Minimal reproduction for Fast Refresh with barrel imports',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
