import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../../public/shared/desktop/logo-dark.png";

export default function Header(){
    return(
        <header className={`${style["header"]}`}>
            <Link href={"/"}>
                <Image src={logo} alt="designo logo" priority={true}></Image>
            </Link>
        </header>
    );
}