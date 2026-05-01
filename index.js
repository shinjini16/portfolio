import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const experience = [
  {
    role: 'Marketing & PR Professional',
    place: 'Brand communications, media relations, and campaign support',
    detail:
      'Building clear stories, polished public-facing content, and organized campaigns that help brands show up with confidence.',
  },
  {
    role: 'Communications Strategy',
    place: 'Messaging, positioning, launches, and stakeholder updates',
    detail:
      'Turning ideas into structured narratives for audiences, partners, press, and internal teams.',
  },
  {
    role: 'Content & Social Media',
    place: 'Editorial planning, copywriting, and digital storytelling',
    detail:
      'Creating content that feels thoughtful, relevant, and aligned with the brand voice.',
  },
];

const skills = [
  'Public relations',
  'Brand storytelling',
  'Campaign planning',
  'Copywriting',
  'Media outreach',
  'Social media strategy',
  'Event coordination',
  'Presentation building',
];

export default function Home() {
  return (
    <Layout
      title="Portfolio"
      description="Portfolio website for Shinjini Mondal, Marketing and PR Professional">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Marketing & PR Professional</p>
            <Heading as="h1" className={styles.heroTitle}>
              Shinjini Mondal
            </Heading>
            <p className={styles.heroText}>
              I help brands communicate with clarity through public relations,
              content, campaigns, and thoughtful storytelling.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#resume">
                View resume
              </a>
              <a className={styles.secondaryButton} href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <aside className={styles.profileCard} aria-label="Profile summary">
            <div className={styles.initials}>SM</div>
            <p>Based in the UAE</p>
            <strong>Marketing, PR, communications, and brand storytelling</strong>
          </aside>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionLabel}>About</div>
          <div>
            <Heading as="h2">A clear voice for brands and people.</Heading>
            <p>
              This portfolio is a home for my professional story: what I do,
              how I think, and the work I want to be known for. The next step is
              to replace these starter lines with your real bio, achievements,
              and career highlights.
            </p>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.sectionLabel}>Experience</div>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article className={styles.timelineItem} key={item.role}>
                <span>{item.place}</span>
                <Heading as="h3">{item.role}</Heading>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className={styles.resumeSection}>
          <div>
            <p className={styles.sectionLabel}>Resume</p>
            <Heading as="h2">Make this section your career snapshot.</Heading>
            <p>
              Add your education, internships, work experience, certificates,
              selected campaigns, and a downloadable resume link here.
            </p>
          </div>
          <div className={styles.resumeGrid}>
            <div>
              <span>01</span>
              <strong>Education</strong>
              <p>Add your degree, university, dates, and academic highlights.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Experience</strong>
              <p>Add roles, companies, dates, and the impact you created.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Portfolio</strong>
              <p>Add campaigns, writing samples, events, and creative projects.</p>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.sectionLabel}>Skills</div>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <p className={styles.sectionLabel}>Contact</p>
          <Heading as="h2">Let us connect.</Heading>
          <p>
            Replace this with your real email and LinkedIn link when you are
            ready.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="mailto:hello@example.com">
              Email me
            </a>
            <a className={styles.secondaryButton} href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
