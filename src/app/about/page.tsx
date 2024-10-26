import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import hero from "../../../public/about/mobile/image-about-hero.jpg";
import real from "../../../public/about/mobile/image-real-deal.jpg";
import world from "../../../public/about/mobile//image-world-class-talent.jpg";
import SingleCard from "@/ui/single-card/single-card";
import canada from "../../../public/shared/desktop/illustration-canada.svg";
import australia from "../../../public/shared/desktop/illustration-australia.svg";
import uk from "../../../public/shared/desktop/illustration-united-kingdom.svg";
import Image from "next/image";
import Link from "next/link";

export default function About() {

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

    return (
        <main className={`${styles["about"]}`}>
            <SingleCard cover="hero" hero={true} data={{ image: hero, title: "About Us", paragrahps: ["Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."] }} />
            <SingleCard cover="world" data={{ image: world, title: "World-class talent", paragrahps: ["We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.", "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."] }}/>
            <ul className={`${styles["about__countries"]}`}>
                {
                    locations.map((location, index) => {
                        return (
                            <li key={location.country} className={`${styles["about__country"]}`}>
                                <div className={`${styles["about__background"]} ${index === 0 ? styles["about__background--90"] : ""} ${index === 2 ? styles["about__background--180"] : ""}`}>
                                    <Image src={location.image} alt={`illustration of ${location.country}`} />
                                </div>
                                <h2 className={`${styles["about__heading"]}`}>{location.country}</h2>
                                <Link href={`#`} className={`btn btn__light ${styles["about__link"]}`}>
                                    SEE LOCATION
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <SingleCard cover="real" data={{ image: real, title: "The real deal", paragrahps: ["As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.", "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."] }} />
            <CallToAction />
        </main>
    );
}