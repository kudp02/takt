import Layout from "../../components/Layout";
import styles from "../../styles/services.module.css";
import Link from "next/link";
import Services from "../../components/Services"

export default function ProjectsPage() {
  return (
    <Layout>
      <h1>Služby</h1>
      <div className={styles.text}>
        <p>
          Prvním krokem při zahájení jakéhokoli projektu je plánování.
          Definujeme seznam úkolů, spočítáme náklady a podmínky.
        </p>
        <p>
          Vyplňte
          <Link href="/brief">
            <a> brief </a>
          </Link>
          a my vám do dvou dnů zašleme nabídku. Řekneme vám, která stránka
          vyřeší váš problém a pomůže vám se strategií propagace.
        </p>
      </div>

      <Services/>

      <div className={styles.aboutUs}>
        <h2>My</h2>
        <div className={styles.row}>

          <div className={styles.col}>
            <div className={styles.number}>1</div>
            <p>Budování na datech</p>
            <p>
              Vyvíjíme design na základě analýzy a marketingového výzkumu.
              Dodržujeme termíny
            </p>
          </div>
        
        
          <div className={styles.col}>
            <div className={styles.number}>2</div>
            <p>Dodržujeme termíny</p>
            <p>
            Chápeme, jak drahé je zpoždění pro podnikání, a nedopustíme to.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.number}>3</div>
            <p>Čistý kód</p>
            <p>
            Zdrojové kódy píšeme bez „berliček“, používáme běžné technologie. Stránky se budou snadno udržovat a upravovat.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.number}>4</div>
            <p>Transparentní proces</p>
            <p>
            Komunikaci budujeme pomocí pravidelných sprintů a denních aktualizací úložiště. Budete mít přehled o všech událostech a budete moci ovládat veškeré fáze.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
