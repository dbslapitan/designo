import Link from "next/link";
import styles from "./footer.module.scss";
import logo from "../../../public/shared/desktop/logo-light.png";
import Image from "next/image";
import facebook from "../../../public/shared/desktop/icon-facebook.svg";
import youtube from "../../../public/shared/desktop/icon-youtube.svg";
import twitter from "../../../public/shared/desktop/icon-twitter.svg";
import pinterest from "../../../public/shared/desktop/icon-pinterest.svg";
import instagram from "../../../public/shared/desktop/icon-instagram.svg";

export default function Footer(){
    return(
        <footer className={`${styles["footer"]}`}>
            <div className={`${styles["footer__top"]}`}>
                <Link href={"/"} className={`${styles["footer__logo"]}`}>
                    <Image src={logo} alt="designo logo" priority={true} width={197}></Image>
                </Link>
                <ul className={`${styles["footer__links"]}`}>
                    <li className={`${styles["footer__item"]}`}>
                        <Link href={"#"} className={`${styles["footer__link"]}`}>OUR COMPANY</Link>
                    </li>
                    <li className={`${styles["footer__item"]}`}>
                        <Link href={"#"} className={`${styles["footer__link"]}`}>LOCATIONS</Link>
                    </li>
                    <li className={`${styles["footer__item"]}`}>
                        <Link href={"#"} className={`${styles["footer__link"]}`}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles["footer__bottom"]}`}>
                <address className={`${styles["footer__address"]}`}>
                    <strong className={`${styles["footer__header"]}`}>Designo Central Office</strong>
                    <br />
                    3886 Wellington Street
                    <br />
                    Toronto, Ontario M9C 3J5
                </address>
                <address className={`${styles["footer__address"]} ${styles["footer__contact"]}`}>
                    <strong className={`${styles["footer__header"]}`}>Contact Us (Central Office)</strong>
                    <br />
                    P : +1 253-863-8967
                    <br />
                    M : contact@designo.co
                </address>
                <div className={`${styles["footer__socials"]}`}>
                    <Link href={`#`}>
                        <Image src={facebook} alt="facebook icon"></Image>
                    </Link>
                    <Link href={`#`}>
                        <Image src={youtube} alt="youtube icon"></Image>
                    </Link>
                    <Link href={`#`}>
                        <Image src={twitter} alt="twitter icon"></Image>
                    </Link>
                    <Link href={`#`}>
                        <Image src={pinterest} alt="pinterest icon"></Image>
                    </Link>
                    <Link href={`#`}>
                        <Image src={instagram} alt="instagram icon"></Image>
                    </Link>
                </div>
            </div>
        </footer>
    );
}