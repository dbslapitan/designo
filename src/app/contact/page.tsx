import DetailsFrom from "@/ui/details-form/details-form";
import styles from "./page.module.scss";
import Countries from "@/ui/countries/countries";

export default function Contact(){

    return(
        <main className={`${styles["contact"]}`}>
            <section className={`${styles["header"]}`}>
                <h1 className={`${styles["header__title"]}`}>Contact Us</h1>
                <p className={`${styles["header__description"]}`}>{`Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.`}</p>
                <DetailsFrom />
            </section>
            <Countries />
        </main>
    );
}