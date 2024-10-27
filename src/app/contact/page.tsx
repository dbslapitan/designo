import styles from "./page.module.scss";

export default function Contact(){

    return(
        <main className={`${styles["contact"]}`}>
            <section className={`${styles["header"]}`}>
                <h1>Contact Us</h1>
                <p>{`Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.`}</p>
            </section>
        </main>
    );
}