import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const homeCopy = {
  fr: {
    title: 'Youcef Boualili',
    pageTitle: 'Youcef Boualili - DevSecOps & Kubernetes Security',
    metaDescription:
      'Profil junior DevSecOps et Cloud Security de Youcef Boualili: Kubernetes Security, AWS, CI/CD, policy-as-code et runtime detection.',
    eyebrow: 'Profil junior · DevSecOps & Cloud Security',
    subtitle:
      'Je construis des labs DevSecOps reproductibles autour de Kubernetes Security, AWS Security et l’automatisation des contrôles.',
    description:
      'Étudiant en Master Cloud Computing & Cybersecurity, je cherche à combiner prévention, détection et confinement pour réduire les risques liés aux workloads cloud-native.',
    primaryCta: 'Voir les labs',
    githubCta: 'GitHub',
    linkedinCta: 'LinkedIn',
    portraitAlt: 'Portrait de Youcef Boualili',
    availability: 'Disponible pour un stage Cloud Security, DevSecOps ou Platform Security.',
    profileTitle: 'Fil rouge Kubernetes Security',
    profileBody:
      'Mon lab principal montre pourquoi RBAC ne suffit pas: validation CI, admission control, détection runtime avec Falco et confinement réseau avec NetworkPolicies.',
    profileMeta: 'Lille, France · Cloud & Cybersecurity',
    statsLabel: 'Points clés du profil',
    stats: [
      {value: '3', label: 'scénarios Kubernetes reproduits'},
      {value: '5', label: 'couches de sécurité combinées'},
      {value: '10', label: 'charts Helm pré-audités'},
      {value: 'AWS', label: 'IAM · S3 · EC2'},
    ],
  },
  en: {
    title: 'Youcef Boualili',
    pageTitle: 'Youcef Boualili - DevSecOps & Kubernetes Security',
    metaDescription:
      'Junior DevSecOps and Cloud Security profile by Youcef Boualili: Kubernetes Security, AWS, CI/CD, policy-as-code and runtime detection.',
    eyebrow: 'Junior profile · DevSecOps & Cloud Security',
    subtitle:
      'I build reproducible DevSecOps labs around Kubernetes Security, AWS Security and security control automation.',
    description:
      'Master’s student in Cloud Computing & Cybersecurity, focused on combining prevention, detection and containment to reduce cloud-native workload risks.',
    primaryCta: 'View labs',
    githubCta: 'GitHub',
    linkedinCta: 'LinkedIn',
    portraitAlt: 'Portrait of Youcef Boualili',
    availability: 'Open to Cloud Security, DevSecOps or Platform Security internships.',
    profileTitle: 'Kubernetes Security direction',
    profileBody:
      'My main lab shows why RBAC is not enough: CI validation, admission control, Falco runtime detection and network containment with NetworkPolicies.',
    profileMeta: 'Lille, France · Cloud & Cybersecurity',
    statsLabel: 'Profile highlights',
    stats: [
      {value: '3', label: 'Kubernetes scenarios reproduced'},
      {value: '5', label: 'security layers combined'},
      {value: '10', label: 'Helm charts pre-audited'},
      {value: 'AWS', label: 'IAM · S3 · EC2'},
    ],
  },
};

function getCopy(locale) {
  return locale === 'en' ? homeCopy.en : homeCopy.fr;
}

function HomepageHeader() {
  const {i18n} = useDocusaurusContext();
  const copy = getCopy(i18n.currentLocale);

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <section className={styles.heroText} aria-labelledby="homepage-title">
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <Heading as="h1" id="homepage-title" className={styles.heroTitle}>
            {copy.title}
          </Heading>
          <p className={styles.heroSubtitle}>{copy.subtitle}</p>
          <p className={styles.availability}>{copy.availability}</p>
          <p className={styles.heroDescription}>{copy.description}</p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/labs">
              {copy.primaryCta}
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Boualili-Youcef"
              target="_blank">
              {copy.githubCta}
            </Link>
            <Link
              className={styles.textLink}
              to="https://linkedin.com/in/youcef-boualili"
              target="_blank">
              {copy.linkedinCta}
            </Link>
          </div>
        </section>

        <aside className={styles.profilePanel} aria-label={copy.profileTitle}>
          <img
            src="/img/profile/profile-photo.webp"
            alt={copy.portraitAlt}
            className={styles.profileImage}
            decoding="async"
            fetchPriority="high"
            height="1200"
            width="960"
          />
          <div className={styles.profileContent}>
            <p className={styles.profileKicker}>{copy.profileTitle}</p>
            <p>{copy.profileBody}</p>
            <span>{copy.profileMeta}</span>
          </div>
        </aside>
      </div>

      <div className={styles.stats} aria-label={copy.statsLabel}>
        {copy.stats.map((stat) => (
          <div className={styles.statItem} key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const copy = getCopy(i18n.currentLocale);

  return (
    <Layout title={copy.pageTitle} description={copy.metaDescription}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
