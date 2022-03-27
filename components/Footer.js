import styles from "../styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return ( 
        <footer className={styles.footer}>
        <div className={styles.footerText}>Takt Studios</div>
        <div className={styles.footerRow + " " + "row"}>
            <div className="col2"><Link href="mailto:hello@taktstudio.cz">hello@taktstudio.cz</Link></div>
            <div className={styles.brief + " " + "col2"}><Link href="/brief"><a>Brief</a></Link> </div>
        </div>
        </footer>
     )
}

