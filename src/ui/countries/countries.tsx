import styles from "./countries.module.scss";
import canada from "../../../public/shared/desktop/illustration-canada.svg";
import australia from "../../../public/shared/desktop/illustration-australia.svg";
import uk from "../../../public/shared/desktop/illustration-united-kingdom.svg";
import Image from "next/image";
import Link from "next/link";

export default function Countries(){

    const locations = [{
        country: "CANADA",
        image: canada,
    }, {
        country: "AUSTRALIA",
        image: australia,
    }, {
        country: "UNITED KINGDOM",
        image: uk,
    }];

    return(
        <ul className={`${styles["countries"]}`}>
                {
                    locations.map((location, index) => {
                        const link = location.country.split(" ").join("-").toLowerCase();
                        console.log(link);
                        return (
                            <li key={location.country} className={`${styles["countries__country"]}`}>
                                <div className={`${styles["countries__background"]} ${index === 0 ? styles["countries__background--90"] : ""} ${index === 2 ? styles["countries__background--180"] : ""}`}>
                                    <Image src={location.image} alt={`illustration of ${location.country}`} />
                                </div>
                                <h2 className={`${styles["countries__heading"]}`}>{location.country}</h2>
                                <Link href={`/locations/#${link}`} className={`btn btn__light ${styles["countries__link"]}`}>
                                    SEE LOCATION
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
    );
}