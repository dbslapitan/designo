import Link from "next/link";
import styles from "./design-links.module.scss";

export default function DesignLinks({current}: {current: string}) {

    const designs = [{
        title: "WEB",
        link: "/designs/web"
    }, {
        title: "APP",
        link: "/designs/app"
    }, {
        title: "GRAPHIC",
        link: "/designs/graphic"
    }];

    return (
        <ul className={`${styles["links"]}`}>
            {
                designs.map(design => {
                    return (
                        <li className={`${styles["links__item"]}`}>
                            <Link href={design.link} className={`${styles["links__link"]} ${styles[`links__link--${design.title.toLowerCase()}`]} ${ current.toLowerCase() === design.title.toLowerCase() ? styles["links__link--hide"] : ""}`}>
                                <h2 className={`${styles["links__title"]}`}>{`${design.title} DESIGN`}</h2>
                                <p className={`${styles["links__projects"]}`}>VIEW PROJECTS</p>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}