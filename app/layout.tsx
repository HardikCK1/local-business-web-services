import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContentProvider } from "@/components/content-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LocalWeb Pro - Professional Websites for Local Businesses",
  description:
    "Get your business online with stunning, mobile-friendly websites that attract customers and grow revenue.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ContentProvider>
      </body>
    </html>
  )
}
