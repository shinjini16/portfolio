import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {coreExpertise, education, experience} from '../data/portfolio';
import styles from './index.module.css';

export default function Resume() {
  return (
    <Layout
      title="Resume"
      description="Experience, skills, and education for Shinjini Mondal">
      <main className={styles.page}>
        <section className={`${styles.pageHero} ${styles.resumeHero}`}>
          <div>
            <p className={styles.eyebrow}>Resume</p>
            <Heading as="h1">A closer look at my work and experience.</Heading>
            <a
              className={styles.primaryButton}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer">
              Download My Resume
            </a>
          </div>
          <aside className={styles.coreExpertisePanel}>
            <Heading as="h2">Core Expertise</Heading>
            <div className={styles.coreTags}>
              {coreExpertise.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionLabel}>Experience</div>
          <div className={styles.experienceCards}>
            {experience.map((item) => (
              <article className={styles.experienceCard} key={item.role}>
                <div className={styles.experienceMeta}>{item.place}</div>
                <Heading as="h2">{item.role}</Heading>
                <p>{item.detail}</p>
                <div className={styles.roleTags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.educationGrid}>
            {education.map((item) => (
              <article className={styles.educationItem} key={item.credential}>
                <span>{item.date}</span>
                <div>
                  <Heading as="h2">{item.credential}</Heading>
                  <p>{item.school}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
