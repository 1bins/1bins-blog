import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.scss";
import { blogName, blogDesc, blogThumbnailURL } from "@/configs/const";

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        {children}
      </body>
    </html>
  );
}
