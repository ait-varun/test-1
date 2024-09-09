import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const openSansCondensedRegular = localFont({
  src: "./fonts/BetonCGExtraBoldRegular.woff",
  variable: "--font-open-sans-condensed",
  weight: "100 700 900",
});

const betonFont = localFont({
  src: "./fonts/BetonCGExtraBoldRegular.woff",
  variable: "--font-beton-cg-extra-bold",
  weight: "100 700 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSansCondensedRegular.variable}
        ${betonFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
