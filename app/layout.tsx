import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Devshock",
  description:
    "A decade of SaaS, MVPs, and AI-driven product delivery—delivered through a founder-led team and executed by our global full-stack in-house team.",
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
      </head>
      <body className="bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
