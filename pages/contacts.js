import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/contacts.module.css"

export default function Contacts() {
    return (
        <Layout>
            <h1>Contacts</h1>
            <div className={styles.contactSection}>
                <h2 className={styles.heading}>Služby</h2>
                <div className={styles.text}>Branding, Graphic Design, PPC, Digital, Website Design, Web Development, SMM, SEO, Strategy, Art, Packaging, Film, 3D, Video, Brand Strategy.</div>
            </div>

            <div className={styles.contactSection}>
                <h2 className={styles.heading}>Zákazníci</h2>
                <div className={styles.text}>PWC, BAK, 13, Vanguard, Alta, House of Hedonism, 2×2, Trindadent, Wellfed, Bohemia Twist, Applebro, Jack Bright..
                </div>
            </div>

            <div className={styles.contactSection}>
                <h2 className={styles.heading}>Kontakt</h2>
                <div className="row">
                    <div className="col2">
                        <div className={styles.text}><span style={{color: "var(--main-color)"}}>hello@takt.digital</span><br></br>
                            +420 775 216 513
                        </div>
                    </div>

                    <div className="col2">
                        <div className={styles.text}>@takt.studio
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contactSection + " " + styles.photos}>
                <h2 className={styles.heading}>My</h2>
                <div className="row">
                    <div className="col2">
                        <Image src={"https://takt.digital/wp-content/uploads/2022/01/4-tym.jpeg"} width={1000} height={700} objectFit="cover" alt="Peter"></Image>
                        <div className={styles.text}>Peter Kudryavtsev</div>
                    </div>
                    <div className="col2">
                        <Image src={"https://takt.digital/wp-content/uploads/2022/01/tym-5.jpeg"} width={1000} height={700} objectFit="cover" alt="Azat"></Image>
                        <div className={styles.text}>Azat Tulegenov</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}