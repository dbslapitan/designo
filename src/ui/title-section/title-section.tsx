import styles from "./title-section.module.scss";

export default function TitleSection({data}: {data: {title: string, description: string}}){
    return(
        <section className={`${styles["section"]}`}>
            <h1 className={`${styles["section__title"]}`}>{data.title}</h1>
            <p className={`${styles["section__description"]}`}>{data.description}</p>
        </section>
    );
}