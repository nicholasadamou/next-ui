import React from "react";

import type { Metadata } from "next"

import localFont from "next/font/local";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

import "./globals.css"

import { Navbar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "UI",
  description: "A collection of UI beautifully crafted components"
}

export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background", geistMono.className, geistSans.className, "dark")}
        suppressHydrationWarning
      >
        <div className="px-4 mx-auto flex min-h-screen max-w-7xl flex-col">
          <Navbar />
          <main className="flex-1">{props.children}</main>
         <Footer />
        </div>
      </body>
    </html>
  )
}
