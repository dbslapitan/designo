import MapCard from "@/ui/map-card/map-card";
import styles from "./page.module.scss";
import { ILocation } from "@/models/locations";

export default function Page(){

    const canada: ILocation = {
        location:{
            lat: 43.64404647006728,
            lng: -79.39454728790129
        },
        country: "Canada",
        street: "3886 Wellington Street",
        address: "Toronto, Ontario M9C 3J5",
        office: "Designo Central Office",
        phone: "+1 253-863-8967",
        email: "contact@designo.co"
    };

    const australia: ILocation = {
        location:{
            lat: -30.329384113333177,
            lng: 149.7882117140661
        },
        country: "Australia",
        street: "19 Balonne Street",
        address: "New South Wales 2443",
        office: "Designo AU Office",
        phone: "(02) 6720 9092",
        email: "contact@designo.au"
    };

    const uk: ILocation = {
        location:{
            lat: 51.732094702484,
            lng: -3.861195017401781
        },
        country: "United Kingdom",
        street: "13 Colorado Way",
        address: "Rhyd-y-fro SA8 9GA",
        office: "Designo UK Office",
        phone: "078 3115 1400",
        email: "contact@designo.uk"
    };

    return(
        <main className={`${styles["locations"]}`}>
            <MapCard id="canada" data={canada}/>
            <MapCard reverse={true} id="australia" className={`${styles["card"]}`} data={australia} />
            <MapCard id="united-kingdom" className={`${styles["card"]}`} data={uk} />
        </main>
    );
}