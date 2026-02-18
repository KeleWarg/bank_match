import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import '@/styles/globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Find the Best Bank Account - Forbes Advisor',
  description: 'Compare top bank accounts and find the best match for your needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
