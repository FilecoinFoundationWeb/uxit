import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UXIT User-Focused Solutions for the Future of Filecoin',
  description:
    "Explore UXIT's journey in transforming the Filecoin ecosystem with data-driven usability insights and user-focused solutions. Stay updated with our Usability Reports for the Filecoin network and engage with the UXIT Project Board to track progress and propose new initiatives. Join us in shaping the future of Filecoin with innovative, user-centric approaches.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="grow">
            <div className="flex grow mx-auto max-w-4xl px-4 py-12 lg:py-16 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center gap-12 lg:gap-20">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
