import "./globals.css"

import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Geist } from "next/font/google"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_INFO } from "@/config/site"

const geist = Geist({
  variable: "--font-sans",
  weight: ["400"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: SITE_INFO.title,
    template: `%s | Jaimin Chovatia`,
  },
  description: SITE_INFO.description,
  icons: {
    icon: "/jaimin.svg",
    apple: "/jaimin.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    siteName: "Jaimin Chovatia",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mx-2 flex min-h-screen max-w-3xl flex-col border-x-2 border-dashed md:mx-auto lg:min-w-[48rem]">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-4NN21FTRK9" />
    </html>
  )
}
