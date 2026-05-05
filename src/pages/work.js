import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {selectedWork} from '../data/portfolio';
import styles from './index.module.css';

export default function Work() {
  return (
    <Layout
      title="Work"
      description="Selected work and writing by Shinjini Mondal">
      <main className={styles.page}>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Work</p>
          <Heading as="h1">Selected Work & Writing</Heading>
        </section>

        <section className={styles.fullSection}>
          <div className={styles.workGrid}>
            {selectedWork.map((item, index) => (
              <article className={styles.workItem} key={item.title}>
                <div className={styles.workVisual}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.workBody}>
                  <Heading as="h2">{item.title}</Heading>
                  <p>{item.description}</p>
                  <a href={item.href}>View Project</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
