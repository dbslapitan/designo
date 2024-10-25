import { StaticImageData } from "next/image";
import styles from "./card.module.scss";

export default function Card({data}: {data: {image: StaticImageData, title: string, description: string}}){
    return (
        <li className={`${styles["card"]}`}>
            <div className={`${styles["card__first"]}`}>
                <img src={data.image.src} alt={`cover for ${data.title}`}  className={`${styles["card__cover"]}`}/>
            </div>
            <div className={`${styles["card__last"]}`}>
                <h2 className={`${styles["card__title"]}`}>{data.title}</h2>
                <p className={`${styles["card__description"]}`}>{data.description}</p>
            </div>
        </li>
    );
}