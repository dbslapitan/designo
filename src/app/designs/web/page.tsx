import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";

export default function WebDesigns(){

    const data = {
        title: "Web Design", 
        description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    }
    return(
        <main className={`${styles["web"]}`}>
            <TitleSection data={data}/>
            <CallToAction />
        </main>
    );
}