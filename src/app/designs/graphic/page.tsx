import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";

export default function GraphicDesigns(){

    const data = {
        title: "Graphic Design", 
        description: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
    }
    return(
        <main className={`${styles["web"]}`}>
            <TitleSection data={data}/>
            <CallToAction />
        </main>
    );
}