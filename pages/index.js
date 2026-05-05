import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {focusCards, selectedWork} from '../data/portfolio';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Portfolio website for Shinjini Mondal, PR and Communications Specialist">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Portfolio & Resume</p>
              <Heading as="h1" className={styles.heroTitle}>
                Shinjini Mondal
              </Heading>
              <p className={styles.heroText}>
                PR & communications specialist with North American experience
                and a global perspective.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="/resume">
                  View Experience
                </a>
                <a className={styles.secondaryButton} href="/work">
                  View Selected Work & Writing
                </a>
                <a className={styles.secondaryButton} href="/contact">
                  Start a Conversation
                </a>
              </div>
            </div>

            <aside className={styles.portraitCard} aria-label="Portrait and career highlights">
              <div className={styles.portraitFrame}>
                <img src="/img/profile.jpg" alt="Shinjini Mondal" />
              </div>
              <div className={styles.statsBar}>
                <span><strong>4+</strong> Years</span>
                <span><strong>30+</strong> Industries</span>
                <span><strong>Global</strong> Perspective</span>
              </div>
            </aside>
          </div>

          <div className={styles.focusGrid}>
            {focusCards.map((card) => (
              <article className={styles.focusCard} key={card.label}>
                <span>{card.label}</span>
                <strong>{card.text}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.sectionLabel}>About Me</div>
          <div>
            <Heading as="h2">
              Shaping how brands are seen, understood, and remembered.
            </Heading>
            <div className={styles.aboutGrid}>
              <div>
                <Heading as="h3">About</Heading>
                <p>
                  Hi! I’m <strong>Shinjini Mondal</strong>, a communications
                  professional with roots in marketing, client relations, and
                  brand strategy, now focused on public relations.
                </p>
                <p>
                  I’m drawn to brands that are intentional. <strong>Luxury.
                  Beauty. Fashion.</strong> Spaces where a single word, a pause,
                  a detail can shift everything. Because communication isn’t
                  about being seen, it’s about being <em>understood</em>.
                </p>
                <p>
                  I’m intuitive and people-focused, but also unmistakably direct.
                  I move with clarity, read situations quickly, and make
                  decisions with purpose. I believe in honesty that builds trust
                  and authenticity that creates lasting impact.
                </p>
                <p>
                  I approach everything with intention and heart — in conversation,
                  in relationships, in work. I don’t do halfway.
                </p>
                <p>
                  I’m building toward becoming an <strong>architect of
                  perception</strong>, shaping how brands are seen, understood,
                  and remembered.
                </p>
              </div>
              <div>
                <Heading as="h3">Beyond Work</Heading>
                <p>
                  When I’m not working, I’m usually in my kitchen experimenting.
                  Cooking runs deep in my Bengali roots. After years of putting
                  everything else first, I’m finally all in on my fitness
                  journey. It’s teaching me discipline, presence, and patience —
                  the same traits I bring into my work and life every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.previewSection}>
          <div>
            <p className={styles.eyebrow}>Selected Work</p>
            <Heading as="h2">Writing and strategy, in progress.</Heading>
          </div>
          <div className={styles.previewGrid}>
            {selectedWork.slice(0, 2).map((item) => (
              <a className={styles.previewItem} href="/work" key={item.title}>
                <Heading as="h3">{item.title}</Heading>
                <p>{item.description}</p>
                <span>View Work</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
