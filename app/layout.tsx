import './globals.css';
import { inter, roboto_mono } from '@/src/assets/fonts/default';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const fontOptimization = `${inter.variable} ${roboto_mono.variable}`;

  return (
    <html lang="en" className={fontOptimization}>
      <body className="h-screen">{children}</body>
    </html>
  );
}
