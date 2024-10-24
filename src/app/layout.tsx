import type { Metadata } from "next";
import "./globals.scss";
import { jost } from "@/libs/fonts";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

export const metadata: Metadata = {
  title: "Designo | Home"
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
