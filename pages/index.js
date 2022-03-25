import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Projects from "../components/Projects";
import { gsap } from "gsap/dist/gsap";
import { useRef, useState, useEffect } from "react";
import { Draggable } from "gsap/dist/Draggable";

export default function Home() {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(Draggable);
        Draggable.create("#test", {
            type: "rotation",
            trigger: "#test1",
            transformOrigin: "center center",
            lockAxis:true,
            // onDrag: function() {
            //   console.log("weee");
            // }
          })
      }
    

    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.to(".string", {
            x: -4000,
            repeat:-1,
            yoyoEase: true,
            duration: 14,
            ease: "linear"
        }
        );
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Takt digital</title>
                <meta name="description" content="Visual expirience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <main className={styles.main}>
                    <div id="test1"className={styles.animatedLogo}>
                        <div className={styles.mainLogo}>
                            <div id="test" className={styles.mainLogoCont}>
                                <span className={styles.logoChar} style={{ "--charIndex": 1 }}>T</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 2 }}>a</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 3 }}>k</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 4 }}>t</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 5 }}> </span>
                                <span className={styles.logoChar} style={{ "--charIndex": 6 }}>T</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 7 }}>a</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 8 }}>k</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 9 }}>t</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 10 }}> </span>
                                <span className={styles.logoChar} style={{ "--charIndex": 11 }}>T</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 12 }}>a</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 13 }}>k</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 14 }}>t</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 15 }}> </span>
                                <span className={styles.logoChar} style={{ "--charIndex": 16 }}>T</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 17 }}>a</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 18 }}>k</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 19 }}>t</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 20 }}> </span>
                                <span className={styles.logoChar} style={{ "--charIndex": 21 }}>T</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 22 }}>a</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 23 }}>k</span>
                                <span className={styles.logoChar} style={{ "--charIndex": 24 }}>t</span>
                            </div>
                        </div>
                    </div>

                    <div id={"second"} className={styles.aboutContainer}>
                        <div className={styles.aboutUs + " row"}>
                            <div className={"col2"}>
                                <h2>Co děláme?</h2>
                            </div>

                            <div className={styles.aboutUsText + " col2"}>Jsme designové studio, které vytváří moderní webové řešení.
                                Děláme Webový design a Vývoj, E-commerce, Grafický design, úpravu fotek a videí, SMM, Copywriting, Identity a Branding.</div>
                        </div>
                        <div>
                            <div ref={ref} className={styles.animatedLine + " string"}>WEB DESIGN  AND DEVELOPMENT, E-COMMERCE, GRAPHIC DESIGN, PHOTO AND VIDEO PRODUCTION, SMM, COPYWRITING, IDENTITY AND BRANDING.</div>
                        </div>
                    </div>

                    <div>
                        <h2>Projects</h2>
                        <Projects />

                    </div>

                </main>

            </Layout>
        </div>
    )
}
