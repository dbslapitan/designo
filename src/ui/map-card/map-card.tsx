"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./map-card.module.scss";
import { ILocation } from "@/models/locations";

const MAP_API = process.env.NEXT_PUBLIC_MAPS_API;

export default function MapCard({ data, className = "" }: { data: ILocation, className?: string }) {

    return (
        <APIProvider apiKey={`${MAP_API}`}>
            <section className={`${styles["card"]} ${className}`}>
                <Map
                    mapId={`319978e10de52f81`}
                    className={`${styles["card__map"]}`}
                    defaultCenter={data.location}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <AdvancedMarker position={data.location} />
                </Map>
                <div className={`${styles["card__info"]}`}>
                    <h2 className={`${styles["card__country"]}`}>{data.country}</h2>
                    <address className={`${styles["card__address"]}`}>
                        <strong className={`${styles["card__sub"]}`}>{data.office}</strong>
                        <br />
                        {`${data.street}`}
                        <br />
                        {`${data.address}`}
                    </address>
                    <address className={`${styles["card__address"]}`}>
                        <strong>Contact</strong>
                        <br />
                        {`P: ${data.phone}`}
                        <br />
                        {`M: ${data.email}`}
                    </address>
                </div>
            </section>
        </APIProvider>
    );
}