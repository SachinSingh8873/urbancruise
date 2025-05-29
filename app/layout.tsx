import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from "@next/third-parties/google";
import './globals.css'

export const metadata: Metadata = {
  title: 'Urban Cruise',
  description: 'Created By Sachin',
  generator: 'sachinsingh8873',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-7CN7T3VZLJ" />
    </html>
  )
}
