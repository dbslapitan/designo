import Link from "next/link";
import styles from "./page.module.scss";
import passionate from "../../public/home/desktop/illustration-passionate.svg";
import resourceful from "../../public/home/desktop/illustration-resourceful.svg";
import friendly from "../../public/home/desktop/illustration-friendly.svg";
import Image from "next/image";
import CallToAction from "@/ui/call-to-action/call-to-action";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <section className={`${styles["home__hero"]}`}>
            <h1 className={`${styles["home__heading"]}`}>Award-winning custom designs and digital branding solutions</h1>
            <p className={`${styles["home__paragraph"]}`}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Link href={`/about`} className={`btn btn__dark ${styles["home__learn"]}`}>LEARN MORE</Link>
            <div className={`${styles["home__cover-container"]}`}>
            </div>
        </section>
        <ul className={`${styles["designs"]}`}>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/designs/web`} className={`${styles["designs__link"]} ${styles["designs__link--web"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>WEB DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/designs/app`} className={`${styles["designs__link"]} ${styles["designs__link--app"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>APP DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/designs/graphic`} className={`${styles["designs__link"]} ${styles["designs__link--graphic"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>GRAPHIC DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
        </ul>
        <ul className={`${styles["characters"]}`}>
            <li className={`${styles["characters__item"]}`}>
                <div className={`${styles["characters__background"]}`}>
                    <Image src={passionate} alt="an illustration depicting a passionate characteristic"></Image>
                </div>
                <h2 className={`${styles["characters__title"]}`}>PASSIONATE</h2>
                <p className={`${styles["characters__description"]}`}>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
            </li>
            <li className={`${styles["characters__item"]}`}>
                <div className={`${styles["characters__background"]} ${styles["characters__background--270"]}`}>
                    <Image src={resourceful} alt="an illustration depicting a passionate characteristic"></Image>
                </div>
                <h2 className={`${styles["characters__title"]}`}>RESOURCEFUL</h2>
                <p className={`${styles["characters__description"]}`}>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients&apos; needs.</p>
            </li>
            <li className={`${styles["characters__item"]}`}>
                <div className={`${styles["characters__background"]} ${styles["characters__background--90"]}`}>
                    <Image src={friendly} alt="an illustration depicting a passionate characteristic"></Image>
                </div>
                <h2 className={`${styles["characters__title"]}`}>FRIENDLY</h2>
                <p className={`${styles["characters__description"]}`}> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </li>
        </ul>
        <CallToAction />
    </main>
  );
}
