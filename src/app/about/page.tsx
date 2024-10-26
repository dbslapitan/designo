import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import hero from "../../../public/about/mobile/image-about-hero.jpg";
import real from "../../../public/about/mobile/image-real-deal.jpg";
import world from "../../../public/about/mobile//image-world-class-talent.jpg";
import SingleCard from "@/ui/single-card/single-card";

export default function About(){
    return(
        <main className={`${styles["about"]}`}>
            <SingleCard hero={true} data={{image: hero, title: "About Us", paragrahps: ["Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."]}}/>
            <SingleCard data={{image: world, title: "World-class talent", paragrahps:["We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.", "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."]}}/>
            <CallToAction />
        </main>
    );
}