"use client";

import Link from "next/link";
import styles from "./call-to-action.module.scss";
import { usePathname } from "next/navigation";

export default function CallToAction() {

    const path = usePathname();
    const isContanct = path.toLowerCase().includes("/contact");

    return (
        <div className={`${styles["container"]} ${isContanct ? styles["container--hide"] : ""}`}>
            <section className={`${styles["action"]}`}>
                <h2 className={`${styles["action__header"]}`}>Let&apos;s talk about your project</h2>
                <p className={`${styles["action__paragraph"]}`}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <Link href={`/contact`} className={`btn btn__dark ${styles["action__call"]}`}>GET IN TOUCH</Link>
            </section>
        </div>
    );
}