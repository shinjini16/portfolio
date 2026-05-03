import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const experience = [
  {
    role: 'Marketing & Communications Consultant, Freelance',
    place: 'Vancouver, BC · Jan 2023 - Present',
    detail:
      'Managed communications and brand presence for five healthcare clients, securing regional media coverage, building community partnerships, and contributing to a 20% increase in patient inquiries.',
  },
  {
    role: 'Account Executive, DAC Group / Vancouver Ltd.',
    place: 'Vancouver, BC · Nov 2022 - Nov 2023',
    detail:
      'Managed 30+ B2B and B2C clients across food and beverage, retail, healthcare, home services, finance, construction, technology, automotive, energy, and professional services while maintaining a 95% retention rate and supporting 30% regional revenue growth.',
  },
  {
    role: 'Marketing Strategist, Percy John Flooring',
    place: 'Burnaby, Canada · Feb 2021 - Oct 2022',
    detail:
      'Led brand positioning and integrated communication strategy across digital platforms, increasing brand visibility through 1,400% traffic growth and 5,000+ new sessions.',
  },
  {
    role: 'Marketing Consultant, Murcialva',
    place: 'Burnaby, Canada · Sept 2021 - Jul 2022',
    detail:
      'Defined brand identity and communication strategy for a retail startup, generating 70+ early customers in eight months and supporting growth from 2% to 7% market share.',
  },
  {
    role: 'Senior Marketing Consultant, The Acquisition Group',
    place: 'Burnaby, Canada · Oct 2020 - Jan 2021',
    detail:
      'Exceeded weekly performance targets by 33-67% in high-volume client-facing environments while strengthening real-time communication, persuasion, and brand representation skills.',
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
          <div className={styles.sectionLabel}>About Me</div>
          <div>
            <Heading as="h2">Shaping how brands are seen, understood, and remembered.</Heading>
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
