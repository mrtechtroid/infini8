import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

export const metadata = {
  title: "Infin8 2025 - Osaka Odyssey",
  description: "Infin8, the yearly cultural bash at IIITB, is a three-day extravaganza filled with loads of vibrant shows, performances, competitions, games, and stalls.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/Logo.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
