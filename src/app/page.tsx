import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import hero from "../../public/home/desktop/image-hero-phone.png";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <section className={`${styles["home__hero"]}`}>
            <h1 className={`${styles["home__heading"]}`}>Award-winning custom designs and digital branding solutions</h1>
            <p className={`${styles["home__paragraph"]}`}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Link href={`#`} className={`btn btn__dark ${styles["home__learn"]}`}>LEARN MORE</Link>
            <div className={`${styles["home__cover-container"]}`}>
                <Image src={hero} alt="phone with a fixture on it" className={`${styles["home__cover"]}`} priority={true} height={0} width={0}></Image>
            </div>
        </section>
    </main>
  );
}
