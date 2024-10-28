import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designo | App Designs",
    description: "Dirk Brandon Lapitan. App Design — Our mobile designs bring intuitive digital solutions to your customers right at their fingertips. AIRFILTER — Solving the problem of poor indoor air quality by filtering the air. EYECAM — Product that lets you edit your favorite photos and videos at any time. FACEIT — Get to meet your favorite internet superstar with the faceit app. TODO — A todo app that features cloud sync with light and dark mode. LOOPSTUDIOS — A VR experience app made for Loopstudios."
  };

export default function AppDesignLayout({
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