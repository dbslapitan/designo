import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";
import DesignLinks from "@/ui/design-links/design-links";
import airFilter from "../../../../public/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../../../public/app-design/desktop/image-eyecam.jpg";
import faceit from "../../../../public/app-design/desktop/image-faceit.jpg";
import loopStudios from "../../../../public/app-design/desktop/image-loopStudios.jpg";
import todo from "../../../../public/app-design/desktop/image-todo.jpg";
import Card from "@/ui/card/card";

export default function AppDesigns(){

    const data = {
        title: "App Design", 
        description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    }
    
    const content = [{
            image: airFilter,
            title: "AIRFILTER",
            description: "Solving the problem of poor indoor air quality by filtering the air"
        }, {
            image: eyecam,
            title: "EYECAM",
            description: "Product that lets you edit your favorite photos and videos at any time"
        }, {
            image: faceit,
            title: "FACEIT",
            description: "Get to meet your favorite internet superstar with the faceit app"
        }, {
            image: todo,
            title: "TODO",
            description: "A todo app that features cloud sync with light and dark mode"
        }, {
            image: loopStudios,
            title: "LOOPSTUDIOS",
            description: "A VR experience app made for Loopstudios"
        }
    ];

    return(
        <main className={`${styles["web"]}`}>
            <TitleSection data={data}/>
            <ul className={`${styles["web__cards"]}`}>
                {
                    content.map(content => {
                        return(
                            <Card key={content.title} data={content}/>
                        );
                    })
                }
            </ul>
            <DesignLinks current="app" />
            <CallToAction />
        </main>
    );
}