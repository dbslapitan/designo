import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <section className={`${styles["home__hero"]}`}>
            <h1 className={`${styles["home__heading"]}`}>Award-winning custom designs and digital branding solutions</h1>
            <p className={`${styles["home__paragraph"]}`}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Link href={`#`} className={`btn btn__dark ${styles["home__learn"]}`}>LEARN MORE</Link>
            <div className={`${styles["home__cover-container"]}`}>
            </div>
        </section>
        <ul className={`${styles["designs"]}`}>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/#`} className={`${styles["designs__link"]} ${styles["designs__link--web"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>WEB DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/#`} className={`${styles["designs__link"]} ${styles["designs__link--app"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>APP DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
            <li className={`${styles["designs__item"]}`}>
                <Link href={`/#`} className={`${styles["designs__link"]} ${styles["designs__link--graphic"]}`}>
                    <h2 className={`${styles["designs__title"]}`}>GRAPHIC DESIGN</h2>
                    <p className={`${styles["designs__sub"]}`}>VIEW PROJECTS</p>
                </Link>
            </li>
        </ul>
    </main>
  );
}
