import { StaticImageData } from "next/image";
import styles from "./single-card.module.scss";

export default function SingleCard({className = "", data, hero = false, cover}: {cover: string, className?: string, data: {image: StaticImageData, title: string, paragrahps: string[]}, hero?: boolean}){


    return(
        <section className={`${styles["card"]} ${className ? className : ""}`}>
            <div className={`${styles["card__first"]} ${styles[`card__first--${cover}`]}`}>
            </div>
            <div className={`${styles["card__last"]} ${hero ? styles["card__last--peach"] : styles["card__last--light"]}`}>
                {hero && <h1 className={`${styles["card__title"]}`}>{data.title}</h1>}
                {!hero && <h2 className={`${styles["card__title"]} ${styles["card__title--h2"]}`}>{data.title}</h2>}
                {
                    data.paragrahps.map(paragraph => {
                        return(
                            <p key={paragraph} className={`${styles["card__description"]} ${hero ? styles["card__description--white"] : styles["card__description--black"]}`}>{paragraph}</p>
                        );
                    })
                }
            </div>
        </section>
    );
}