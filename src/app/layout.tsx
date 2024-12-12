/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-11-29 15:03:43
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 18:04:38
 */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import ThemeCom from "./components/ThemeCom";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from "flowbite-react";
import FooterCom from "./components/Footer";

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

export const metadata: Metadata = {
  title: "yq blog",
  description: "Generated by create yq blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeCom>
              <Header />
              {children}
              <FooterCom />
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
