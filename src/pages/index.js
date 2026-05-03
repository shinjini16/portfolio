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

const focusCards = [
  {
    label: 'Current Focus',
    text: 'Public Relations for Luxury, Beauty & Lifestyle Brands',
  },
  {
    label: 'Expertise',
    text: 'Brand Messaging, Stakeholder Relations & Audience Engagement',
  },
  {
    label: 'Based In',
    text: 'UAE',
  },
];

const education = [
  {
    credential: 'Bachelor of Business Administration (BBA), International Business',
    school: 'Royal Roads University (Ras Al Khaimah Campus), UAE',
    date: 'In Progress · Expected 2027',
  },
  {
    credential: 'General Business Diploma',
    school: 'Douglas College, New Westminster, BC',
    date: '2018 - 2021',
  },
];

export default function Home() {
  return (
    <Layout
      title="Portfolio"
      description="Portfolio website for Shinjini Mondal, PR and Communications Specialist">
      <main className={styles.page}>
        <section id="home" className={styles.hero}>
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
                <a className={styles.primaryButton} href="#experience">
                  View Experience
                </a>
                <a className={styles.secondaryButton} href="#work">
                  View Selected Work & Writing
                </a>
                <a className={styles.secondaryButton} href="#contact">
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

        <section id="resume" className={styles.resumeSection}>
          <div>
            <p className={styles.sectionLabel}>Resume</p>
            <Heading as="h2">A closer look at my work and experience.</Heading>
            <p>
              A focused view of my communications experience, cross-industry
              client work, core skills, and education.
            </p>
            <a className={styles.primaryButton} href="/resume.pdf" download>
              Download My Resume
            </a>
          </div>
          <div className={styles.resumeGrid}>
            <div>
              <span>01</span>
              <strong>Experience</strong>
              <p>PR, communications, account management, and brand strategy.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Skills</strong>
              <p>Media outreach, messaging, stakeholder communication, and campaigns.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Education</strong>
              <p>Business education across Canada and the UAE.</p>
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

        <section id="education" className={styles.section}>
          <div className={styles.sectionLabel}>Education</div>
          <div className={styles.educationGrid}>
            {education.map((item) => (
              <article className={styles.educationItem} key={item.credential}>
                <span>{item.date}</span>
                <Heading as="h3">{item.credential}</Heading>
                <p>{item.school}</p>
              </article>
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
          <div>
            <p className={styles.sectionLabel}>Contact</p>
            <Heading as="h2">Start a conversation.</Heading>
            <p>
              For PR, communications, writing, or brand storytelling
              opportunities, send a note directly through the form.
            </p>
            <a
              className={styles.secondaryButton}
              href="https://www.linkedin.com/in/shinjinimondal/">
              Visit My LinkedIn
            </a>
          </div>
          <form
            className={styles.contactForm}
            name="contact"
            method="POST"
            data-netlify="true"
            action="/#contact">
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit">Email Shinjini</button>
          </form>
        </section>
      </main>
    </Layout>
  );
}
