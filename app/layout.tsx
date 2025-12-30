import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Email Template Builder | Javari AI',
  description: 'Create beautiful, responsive email templates with AI. Design newsletters, campaigns, and transactional emails.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
