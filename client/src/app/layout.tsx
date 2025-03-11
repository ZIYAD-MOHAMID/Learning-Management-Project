import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Providers from "./proniders";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learing managenemt",
  description: "Learing managenemt project By next",
  icons: {
    icon: "/download.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
