import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "chinxeleer.io",
  description: "chinxeleer personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className="flex flex-col bg-slate-100 md:px-0 xl:px-20 justify-center items-center min-w-screen min-h-screen">
        <BackgroundBeams />
        <Nav />
        <main className="min-h-max xl:mt-6 sm:mt-2 min-w-full flex flex-col items-center pt-20 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
