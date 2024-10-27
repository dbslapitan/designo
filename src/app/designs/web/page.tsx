import CallToAction from "@/ui/call-to-action/call-to-action";
import styles from "./page.module.scss";
import TitleSection from "@/ui/title-section/title-section";
import express from "../../../../public/web-design/desktop/image-express.jpg";
import blogr from "../../../../public/web-design/desktop/image-blogr.jpg";
import builder from "../../../../public/web-design/desktop/image-builder.jpg";
import camp from "../../../../public/web-design/desktop/image-camp.jpg";
import photon from "../../../../public/web-design/desktop/image-photon.jpg";
import transfer from "../../../../public/web-design/desktop/image-transfer.jpg";
import Card from "@/ui/card/card";
import DesignLinks from "@/ui/design-links/design-links";

export default function WebDesigns(){

    const data = {
        title: "Web Design", 
        description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    }

    const content = [{
        image: express,
        title: "EXPRESS",
        description: "A multi-carrier shipping website for ecommerce businesses"
        }, {
            image: transfer,
            title: "TRANSFER",
            description: "Site for low-cost money transfers and sending money within seconds"
        }, {
            image: photon,
            title: "PHOTON",
            description: "A state-of-the-art music player with high-resolution audio and DSP effects"
        }, {
            image: builder,
            title: "BUILDER",
            description: "Connects users with local contractors based on their location"
        }, {
            image: blogr,
            title: "BLOGR",
            description: "Blogr is a platform for creating an online blog or publication"
        }, {
            image: camp,
            title: "CAMP",
            description: "Get expert training in coding, data, design, and digital marketing"
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
            <DesignLinks current="web" />
        </main>
    );
}