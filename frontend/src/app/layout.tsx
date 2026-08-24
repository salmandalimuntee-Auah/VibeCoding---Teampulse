import type { Metadata } from 'next';
import '../design-system/tokens/theme-tokens.css';
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className="antialiased selection:bg-blue-500/20 selection:text-blue-400">
        {children}
      </body>
    </html>
  );
}
