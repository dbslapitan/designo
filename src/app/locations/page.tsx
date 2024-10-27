import styles from "./page.module.scss";

export default function Page(){
    return(
        <main className={`${styles["locations"]}`}>
            <h1>Locations</h1>
        </main>
    );
}