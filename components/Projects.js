import { projects } from "../utils/projects";
import Image from "next/image";
import styles from "../styles/projects.module.css";
import Link from "next/link";

export default function Projects({ alt }) {
  return (
    <div className={styles.projects}>
      {projects.map(
        (project) =>
        //   project.made.includes(alt) && alt == "" (
            (alt ? project.made.includes(alt) : true) && (
            <div className={styles.project} key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <a>
                  <div className={styles.name}>{project.name}</div>
                  <Image
                    src={project.image}
                    width={2000}
                    height={1000}
                    objectFit={"cover"}
                    alt={project.name}
                  ></Image>
                </a>
              </Link>
            </div>
          )
      )}
    </div>
  );
}
