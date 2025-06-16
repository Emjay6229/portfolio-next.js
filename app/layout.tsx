import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "devicon/devicon.min.css";

export const metadata: Metadata = {
  title: "Joshua Onwuemene | Backend and Cloud Engineer",
  description:
    "Professional portfolio of Joshua Onwuemene, Backend and Cloud Engineer"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'