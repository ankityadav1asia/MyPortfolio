import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
})

const description =
  "AI & Backend Engineer in Mumbai. Builder of Corpus, a team RAG workspace with hybrid search, re-ranking, guardrails and cited answers."

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitss.vercel.app"),
  title: "Ankit Yadav — AI & Backend Engineer",
  description,
  openGraph: {
    title: "Ankit Yadav — AI & Backend Engineer",
    description,
    url: "https://ankitss.vercel.app",
    siteName: "Ankit Yadav",
    images: [{ url: "/corpus/chat-dark.webp", width: 1440, height: 1400 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ankiteatt",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#141311" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
