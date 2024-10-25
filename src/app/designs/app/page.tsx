import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";

export default function AppDesigns(){

    const data = {
        title: "App Design", 
        description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    }
    return(
        <main className={`${styles["web"]}`}>
            <TitleSection data={data}/>
            <CallToAction />
        </main>
    );
}