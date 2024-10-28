import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designo | Contact",
    description: "Dirk Brandon Lapitan. Contact Us — Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
  };

export default function ContactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            {children}
        </>
    );
}