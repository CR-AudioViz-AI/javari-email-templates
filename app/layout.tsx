// app/layout.tsx — Javari Email
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Email | Javari by CR AudioViz AI',
  description: 'AI email template creator',
  keywords: 'Javari Email, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Email"
          appColor="#f59e0b"
          appEmoji="📧"
          appDesc="AI email template creator"
      handoffApp="Javari Marketing"
      handoffUrl="https://javari-marketing.vercel.app"
      handoffPitch="Emails ready? Build a full marketing strategy →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
