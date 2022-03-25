import { sluzby } from "../utils/sluzby";
import styles from "../styles/sluzby.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div>
      {sluzby.map((sluzba) => (
        <Link href={`/services/${sluzba.name}`}>
          <a className={styles.service}>
            <div>
              <h3 className={styles.name}>{sluzba.name}</h3>
              <div className={styles.short}>{sluzba.short}</div>
            </div>
            <div className={styles.arrow}><Image
                        src="/arrow.svg"
                        width={70}
                        height={100}
                    >
                    </Image></div>
          </a>
        </Link>
      ))}
    </div>
  );
}
