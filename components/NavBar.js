import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a>
          <Image src="/logo.svg" width={120} height={100}></Image>
        </a>
      </Link>

      <div className={styles.menu}>
        <Link href={"/services"}>
          <a className={styles.menuItem}>
          Služby
            <span className={styles.Mask}>
              <span>Služby</span>
            </span>
            <span className={styles.Mask}>
              <span>Služby</span>
            </span>
          </a>
        </Link>

        <Link href={"/projects"}>
          <a className={styles.menuItem}>
            Projekty
            <span className={styles.Mask}>
              <span>Projekty</span>
            </span>
            <span className={styles.Mask}>
              <span>Projekty</span>
            </span>
          </a>
        </Link>

        <Link href={"/contacts"}>
          <a className={styles.menuItem}>
            Kon-takt
            <span className={styles.Mask}>
              <span>Kon-takt</span>
            </span>
            <span className={styles.Mask}>
              <span>Kon-takt</span>
            </span>
          </a>
        </Link>

        <Link href={"/brief"}>
          <a className={styles.menuItem + " " + styles.brief}>
            Brief
            <span className={styles.Mask}>
              <span>Brief</span>
            </span>
            <span className={styles.Mask}>
              <span>Brief</span>
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
}
