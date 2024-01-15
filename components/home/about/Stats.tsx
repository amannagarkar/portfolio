import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Pytorch</span>
            <span className="chip">Tensorflow</span>
            <span className="chip">Pandas, Numpy, Pickle, Seaborne</span>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">Kafka</span>
            <span className="chip">Airflow</span>
            <span className="chip">Data Analysis</span>
            <span className="chip">Snowflake</span>
            <span className="chip">ONNX</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Anaconda</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Native</span>
            <span className="chip">Flutter</span>
            <span className="chip">Langchain</span>
            <span className="chip">StreamLit</span>
            <span className="chip">Figma</span>
            <span className="chip">Terraform</span>
            <span className="chip">GraphQL</span>
            <span className="chip">MLLib</span>
            <span className="chip">Java</span>
            <span className="chip">Vercel</span>
            <span className="chip">Laravel</span>
            <span className="chip">Redis</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
