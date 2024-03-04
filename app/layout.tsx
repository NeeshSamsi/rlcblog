import type { Metadata } from "next"

import { createClient, repositoryName } from "@/prismicio"

import { Playfair_Display, Nunito_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

import { PrismicPreview } from "@prismicio/next"
import Header from "./components/Header"
import Navbar from "@/app/components/Navbar"
import Wrapper from "@/app/components/Wrapper"
import Footer from "@/app/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" })
const algerian = localFont({
  src: [
    {
      path: "./assets/fonts/Algerian Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-algerian",
})

export async function generateMetadata() {
  const client = createClient()
  const settings = await client.getSingle("site_settings")

  const { meta_title, meta_description, og_image, site_name, deployed_url } =
    settings.data

  const meta: Metadata = {
    metadataBase: new URL(deployed_url || "http://localhost:3000"),
    title: meta_title,
    description: meta_description,
    openGraph: {
      title: meta_title || "",
      description: meta_description || "",
      url: "/",
      siteName: site_name || "",
      type: "website",
    },
    twitter: {
      title: meta_title || "",
      description: meta_description || "",
      card: "summary",
    },
    alternates: {
      canonical: "/",
    },
    verification: { google: "38LuebO4j0DPN0B3jwmNTKIFcdP6SfDu9MnvQaDLBs0" },
  }
  return meta
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overscroll-x-none scroll-smooth">
      <body
        className={`${playfair.variable} ${nunito.variable} ${algerian.variable}`}
      >
        <Header />
        <Navbar />
        <Wrapper>
          {children}
          <Footer />
        </Wrapper>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
