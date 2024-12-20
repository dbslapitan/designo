"use client";

import style from "./navigation.module.scss";
import hamburger from "../../../public/shared/mobile/icon-hamburger.svg";
import close from "../../../public/shared/mobile/icon-close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const body = document.querySelector("body");

        const windowClickHandler = () => {
            if(isOpen){
                setIsOpen(false);
            }
        };
        const escListener = (e: KeyboardEvent) => {
            if(e.key === "Escape" && isOpen){
                setIsOpen(false);
            }
        };

        document.addEventListener("click", windowClickHandler);
        document.addEventListener("keyup", escListener);

        if(isOpen){
            (body as HTMLElement).style.maxHeight = "100vh";
            (body as HTMLElement).style.overflowY = "hidden";
        }
        else{
            (body as HTMLElement).style.maxHeight = "none";
            (body as HTMLElement).style.overflowY = "revert";
        }

        return () => {
            document.removeEventListener("click", windowClickHandler);
            document.removeEventListener("keyup", escListener);
        }
    });

    return(
        <div>
            <button className={`${style["nav__toggle"]}`} onClick={toggle}>
                <Image src={isOpen ? close : hamburger} alt={isOpen ? "close button" : "hamburger button"}/>
            </button>
            <ul className={`${style["nav__links"]} ${isOpen ? style["nav__links--show"] : ""}`}>
                <li className={`${style["nav__item"]}`}>
                    <Link href={"/"} className={`${style["nav__link"]}`}>OUR COMPANY</Link>
                </li>
                <li className={`${style["nav__item"]}`}>
                    <Link href={"/about"} className={`${style["nav__link"]}`}>ABOUT</Link>
                </li>
                <li className={`${style["nav__item"]}`}>
                    <Link href={"/contact"} className={`${style["nav__link"]}`}>CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}