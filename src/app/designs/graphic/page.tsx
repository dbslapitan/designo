import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";
import DesignLinks from "@/ui/design-links/design-links";
import science from "../../../../public/graphic-design/desktop/image-science.jpg";
import boxed from "../../../../public/graphic-design/desktop/image-boxed-water.jpg";
import change from "../../../../public/graphic-design/desktop/image-change.jpg";
import Card from "@/ui/card/card";


export default function GraphicDesigns(){

    const data = {
        title: "Graphic Design", 
        description: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
    }

    const content = [{
        image: change,
        title: "TIM BROWN",
        description: "A book cover designed for Tim Brown’s new release, ‘Change’"
        }, {
            image: boxed,
            title: "BOXED WATER",
            description: "A simple packaging concept made for Boxed Water"
        }, {
            image: science,
            title: "SCIENCE!",
            description: "A poster made in collaboration with the Federal Art Project"
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
            <DesignLinks current="graphic" />
            <CallToAction />
        </main>
    );
}