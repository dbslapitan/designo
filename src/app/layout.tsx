import type { Metadata } from "next";
import "./globals.scss";
import { jost } from "@/libs/fonts";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

export const metadata: Metadata = {
  title: "Designo | Home",
  description: "Dirk Brandon Lapitan. Award-winning custom designs and digital branding solutions. With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services. PASSIONATE - Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions. RESOURCEFUL - Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. FRIENDLY -  We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
