import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/headshot.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Aman<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Machine Learning Engineer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;m a machine learning engineer with expertise in natural language processing and a passion for 
              developing innovative solutions. As a recent graduate of Santa Clara University's Master of Science 
              program in Computer Science and Engineering, I focused my studies on advanced techniques like deep learning 
              and neural networks. Let&apos;s connect!

            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Aman Nagarkar | Machine Learning Engineer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
