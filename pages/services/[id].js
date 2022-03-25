import { sluzby } from "../../utils/sluzby";
import Layout from "../../components/Layout";
import styles from "../../styles/sluzba.module.css";
import Projects from "../../components/Projects";

const Sluzba = (sluzba) => {
  return (
    <Layout>
      <h1>{sluzba.name}</h1>
      <div className={styles.items}>
        <div className={styles.short}>{sluzba.short}</div>
        {sluzba.items.map((item) => (
          <div className={styles.item} key={item}>{item}</div>
        ))}
      </div>

      <h2>Dokončené projekty</h2>
      <Projects alt={sluzba.alt}/>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = sluzby.map((sluzba) => ({
    params: { id: sluzba.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const sluzba = sluzby.find((el) => el.name == params.id);
  return { props: sluzba };
}

export default Sluzba;
