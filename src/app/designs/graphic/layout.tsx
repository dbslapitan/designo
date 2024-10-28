import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designo | App Designs",
    description: "Dirk Brandon Lapitan. Graphic Design — We deliver eye-catching branding materials that are tailored to meet your business objectives. TIM BROWN — A book cover designed for Tim Brown’s new release, ‘Change’. BOXED WATER — A simple packaging concept made for Boxed Water. SCIENCE! — A poster made in collaboration with the Federal Art Project."
  };

export default function GraphicDesignLayout({
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