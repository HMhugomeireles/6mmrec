import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "6mmrec",
  description: "6mmrec",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <section className="fog">
          <div className="bg-color-overlap"></div>
          <div className="absolute-bg"></div>
          <div className="fog-container">
            <div className="fog-img fog-img-first"></div>
            <div className="fog-img fog-img-second"></div>
          </div>
        </section>
        <div className="z-10 top-0 left-0 absolute text-foreground w-full flex flex-col min-h-screen">
          <Header />
          <main className="container flex-1 py-5 h-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}