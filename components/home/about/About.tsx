import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            I am a machine learning engineer with expertise in natural language processing and a passion for developing innovative solutions. 
            As a recent graduate of Santa Clara University's Master of Science program in Computer Science and Engineering, 
            I focused my studies on advanced techniques like deep learning and neural networks.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am proficient in large scale data wrangling, training and deploying ML models, posses a strong knowledge of computer science fundamentals and,
              integrating machine learning capabilities in real world applications. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Outside of work, I'm like to watch football(soccer), seek adrenaline and, am an avid lover of cars and motorsports in general.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          
        </div>
        <Stats />
      </div>
    </section>
  );
};
