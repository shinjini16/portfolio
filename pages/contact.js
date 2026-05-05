import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Contact Shinjini Mondal for PR and communications opportunities">
      <main className={styles.page}>
        <section className={styles.contactPage}>
          <div>
            <p className={styles.eyebrow}>Contact</p>
            <Heading as="h1">Let’s connect.</Heading>
            <p>
              For public relations, communications, and brand storytelling
              opportunities, feel free to reach out directly.
            </p>
            <figure className={styles.contactImageBlock}>
              <img src="/img/contact.png" alt="Shinjini Mondal" />
              <figcaption>
                If my background and approach resonate with you, I’d welcome the
                opportunity to connect and learn more about your team and the
                work you’re building.
              </figcaption>
            </figure>
            <div className={styles.heroActions}>
              <a
                className={styles.secondaryButton}
                href="https://www.linkedin.com/in/shinjinimondal/"
                target="_blank"
                rel="noreferrer">
                Visit My LinkedIn
              </a>
              <a
                className={styles.primaryButton}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer">
                Download My Resume
              </a>
            </div>
          </div>

          <form
            className={styles.contactForm}
            name="contact"
            method="POST"
            data-netlify="true"
            action="/contact">
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
