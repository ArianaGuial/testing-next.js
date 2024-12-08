import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuildSource - Construction Materials',
  description: 'Sign in or register for BuildSource',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="logo-container">
          <Link href="/" className="logo">
            <Image src="/img/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}

