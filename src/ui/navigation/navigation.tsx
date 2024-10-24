"use client";

import style from "./navigation.module.scss";
import hamburger from "../../../public/shared/mobile/icon-hamburger.svg";
import close from "../../../public/shared/mobile/icon-close.svg";
import Image from "next/image";
import { useState } from "react";

export default function Navigation(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`${style["nav"]}`}>
            <button className={`${style["nav__toggle"]}`} onClick={toggle}>
                <Image src={isOpen ? close : hamburger} alt={isOpen ? "close button" : "hamburger button"}/>
            </button>
        </div>
    );
}