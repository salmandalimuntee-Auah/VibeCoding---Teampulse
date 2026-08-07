import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TeamPulse - Dashboard Kinerja Tim',
  description: 'Masuk untuk melihat dashboard kinerja tim Anda.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark" data-theme="dark">
      <body className="antialiased selection:bg-blue-500/20 selection:text-blue-400">
        {children}
      </body>
    </html>
  );
}
