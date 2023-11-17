import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UXIT User-Focused Solutions for the Future of Filecoin",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
