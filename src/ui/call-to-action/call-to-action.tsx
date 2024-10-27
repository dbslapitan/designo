import Link from "next/link";
import styles from "./call-to-action.module.scss";

export default function CallToAction() {
    return (
        <div className={`${styles["container"]}`}>
            <section className={`${styles["action"]}`}>
                <h2 className={`${styles["action__header"]}`}>Let&apos;s talk about your project</h2>
                <p className={`${styles["action__paragraph"]}`}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                <Link href={`#`} className={`btn btn__dark ${styles["action__call"]}`}>GET IN TOUCH</Link>
            </section>
        </div>
    );
}