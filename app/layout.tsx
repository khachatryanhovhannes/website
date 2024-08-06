import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hovhannes Khachatryan",
  description: `As a detail-oriented Software Developer proficient in React and
          Node.js, I bring a wealth of experience and dedication to every
          project. With a passion for problem-solving and a drive to deliver
          impactful solutions, I thrive in dynamic team environments. I am
          committed to continuous learning and growth, always seeking to expand
          my knowledge and skills in software development.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="As a detail-oriented Software Developer proficient in React and
          Node.js, I bring a wealth of experience and dedication to every
          project. With a passion for problem-solving and a drive to deliver
          impactful solutions, I thrive in dynamic team environments. I am
          committed to continuous learning and growth, always seeking to expand
          my knowledge and skills in software development."
        />
        <meta name="author" content="Hovhannes Khachatryan" />
        <meta property="og:title" content="Hovhannes Khachatryan" />
        <meta
          property="og:description"
          content="As a detail-oriented Software Developer proficient in React and
          Node.js, I bring a wealth of experience and dedication to every
          project. With a passion for problem-solving and a drive to deliver
          impactful solutions, I thrive in dynamic team environments. I am
          committed to continuous learning and growth, always seeking to expand
          my knowledge and skills in software development."
        />
        <meta property="og:image" content="../public/hero.png" />
        <meta
          property="og:url"
          content="https://hovhanneskhachatryan.netlify.app/"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
