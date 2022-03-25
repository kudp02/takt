import { projects } from "../../utils/projects";
import Layout from "../../components/Layout";
import styles from "../../styles/project.module.css";
import Image from "next/image";

const Project = (projekt) => {
  const gallery = projekt.gallery1[0];
  return (
    <Layout>
      <div className={styles.projectHeader}>
        <h1>{projekt.name}</h1>
        <div className={styles.projectInfo}>
          <div className={styles.projectInfoCol}>
            <div className={styles.heading}>Time to create</div>
            {projekt.time}
          </div>
          <div className={styles.projectInfoCol}>
            <div className={styles.heading}>Type</div>
            {projekt.type.map((typ) => (
              <div key={typ}>{typ}</div>
            ))}
          </div>
          <div className={styles.projectInfoCol}>
            <div className={styles.heading}>URL</div>
            <a href={projekt.url}>Go to website</a>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.heading}>O projektu</div>
        <div className={styles.aboutText}>{projekt.about}</div>
      </div>

      <div className={styles.imageCont}>
      {!projekt.video1 && (
        <Image
          src={projekt.image}
          width={2000}
          height={1000}
          objectFit="contain"
        />
      )}

        {projekt.video1 && (
          <video autoPlay loop muted playsinline>
            <source src={projekt.video1} type="video/mp4" />
          </video>
        )}

        {projekt.video2 && (
          <video autoPlay loop muted playsinline>
            <source src={projekt.video2} type="video/mp4" />
          </video>
        )}
      </div>

      {projekt.title1 && (
        <div className={styles.section}>
          <div className="row">
            <div className={styles.bigHeading + " col"}>{projekt.title1}</div>
            <div className="col">{projekt.desc1}</div>
          </div>
        </div>
      )}

      {gallery && (
        <div className={styles.galleryCont + " row"}>
          {projekt.gallery1.map((image) => (
            <img src={image} alt="" />
          ))}

          {/* {projekt.gallery1.map(image => (
                    <div key={image} style={{ position: "relative", width: "100%", height: "100%"}}>
                        <Image
                            src={image} width="100%" height="100%" layout="fill"/>
                    </div>
                ))} */}
        </div>
      )}

      {projekt.title2 && (
        <div className={styles.section}>
          <div className="row">
            <div className={styles.bigHeading + " col"}>{projekt.title2}</div>
            <div className="col">{projekt.desc2}</div>
          </div>
        </div>
      )}

      {projekt.title3 && (
        <div className={styles.section}>
          <div className="row">
            <div className={styles.bigHeading + " col"}>{projekt.title3}</div>
            <div className="col">{projekt.desc3}</div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projekt = projects.find((el) => el.id == params.id);
  // Pass post data to the page via props
  return { props: projekt };
}

export default Project;
