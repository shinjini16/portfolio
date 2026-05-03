import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const experience = [
  {
    role: 'Marketing & PR Professional',
    place: 'Brand Communications · Media Relations · Campaign Support',
    detail:
      'Building clear narratives, polished public-facing content, and structured campaigns that help brands show up with clarity and confidence.',
  },
  {
    role: 'Communications Strategy',
    place: 'Messaging · Positioning · Stakeholder Communication',
    detail:
      'Translating ideas into structured communication strategies across audiences, from clients and partners to media and internal teams.',
  },
  {
    role: 'Client Relations & Account Management',
    place: 'Client Management · Relationship Building · Cross-Functional Collaboration',
    detail:
      'Managing multiple client relationships, aligning expectations, and ensuring communication flows clearly across teams and deliverables.',
  },
  {
    role: 'Content & Social Media',
    place: 'Editorial Planning · Copywriting · Digital Storytelling',
    detail:
      'Creating content that feels intentional, relevant, and aligned with the brand voice.',
  },
];

const skillGroups = [
  {
    category: 'Public Relations & Communications',
    skills: [
      'Media Outreach & Relations',
      'Brand Messaging & Positioning',
      'Reputation Management',
      'Stakeholder Communication',
    ],
  },
  {
    category: 'Brand & Content Strategy',
    skills: [
      'Brand Storytelling',
      'Copywriting',
      'Content Strategy',
      'Campaign Planning',
    ],
  },
  {
    category: 'Brand Growth & Audience Engagement',
    skills: [
      'Audience Engagement & Growth',
      'Social Media Strategy',
      'Brand Visibility & Awareness',
      'Digital Communication Strategy',
    ],
  },
  {
    category: 'Client & Campaign Management',
    skills: [
      'Client Relationship Management',
      'Campaign Coordination',
      'Cross-Functional Collaboration',
      'Strategic Communication',
    ],
  },
];

const selectedWork = [
  {
    title: 'Press Release (Spec Work)',
    description:
      'A sample press release developed to demonstrate media writing, structure, and brand positioning.',
    href: '#contact',
  },
  {
    title: 'Brand Messaging Breakdown',
    description:
      'An analysis of brand voice, positioning, and communication strategy across platforms.',
    href: '#contact',
  },
  {
    title: 'Campaign Concept (Spec Work)',
    description:
      'A conceptual PR and communications campaign designed to showcase strategic thinking and storytelling.',
    href: '#contact',
  },
];

export default function Home() {
  return (
    <Layout
      title="Portfolio"
      description="Portfolio website for Shinjini Mondal, Marketing and PR Professional">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.sideLabel}>Marketing & PR</div>
          <div className={styles.heroImage} aria-label="Editorial portrait area">
            <div className={styles.heroOverlay}>
              <p className={styles.eyebrow}>Portfolio & Resume</p>
              <Heading as="h1" className={styles.heroTitle}>
                Shinjini Mondal
              </Heading>
              <p className={styles.heroText}>
                Building memorable brand presence through public relations,
                campaigns, content, and clear storytelling.
              </p>
            </div>
          </div>
          <div className={styles.heroTiles}>
            <a href="#about">About Me <span>→</span></a>
            <a href="#experience">Experience <span>→</span></a>
            <a href="#contact">Get In Touch <span>→</span></a>
          </div>
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
              <strong>Selected Work</strong>
              <p>Add writing samples, campaign concepts, and brand strategy projects.</p>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.sectionLabel}>Skills</div>
          <div className={styles.skillGroups}>
            {skillGroups.map((group) => (
              <div className={styles.skillGroup} key={group.category}>
                <Heading as="h3">{group.category}</Heading>
                <div className={styles.skills}>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionLabel}>Work</div>
          <div>
            <Heading as="h2">Selected Work & Writing</Heading>
            <div className={styles.workGrid}>
              {selectedWork.map((item, index) => (
                <article className={styles.workItem} key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.description}</p>
                  <a href={item.href}>View Project</a>
                </article>
              ))}
            </div>
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
