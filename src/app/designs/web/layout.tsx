import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designo | App Designs",
    description: "Dirk Brandon Lapitan. Web Design — We build websites that serve as powerful marketing tools and bring memorable brand experiences. EXPRESS — A multi-carrier shipping website for ecommerce businesses. TRANSFER — Site for low-cost money transfers and sending money within seconds. PHOTON — A state-of-the-art music player with high-resolution audio and DSP effects. BUILDER — Connects users with local contractors based on their location. BLOGR — Blogr is a platform for creating an online blog or publication. CAMP — Get expert training in coding, data, design, and digital marketing."
  };

export default function WebDesignLayout({
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