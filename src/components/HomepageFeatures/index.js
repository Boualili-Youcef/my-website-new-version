import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const content = {
  fr: {
    proofTitle: 'Ce que je mets en pratique',
    proofSubtitle:
      'Comprendre les risques, automatiser les contrôles et documenter des labs reproductibles.',
    proofs: [
      {
        title: 'Sécuriser Kubernetes',
        body: 'RBAC, NetworkPolicies, admission control, policy-as-code et détection runtime pour réduire la surface d’attaque des workloads.',
      },
      {
        title: 'Automatiser les contrôles cloud',
        body: 'Scripts et scans AWS pour identifier les mauvaises configurations IAM, S3 ou EC2 et produire des recommandations actionnables.',
      },
      {
        title: 'Construire avec méthode',
        body: 'Pipelines CI/CD, Linux, GitHub Actions et documentation technique pour rendre les projets lisibles et vérifiables.',
      },
    ],
    labsTitle: 'Labs sélectionnés',
    labsSubtitle:
      'Trois projets qui résument mon axe DevSecOps: Kubernetes, cloud security et backend sécurisé.',
    labsCta: 'Ouvrir la page Labs',
    repoCta: 'Voir le dépôt GitHub',
    reportCta: 'Rapport PDF',
    labs: [
      {
        name: 'k8s-sec-lab',
        type: 'Kubernetes Security',
        description:
          'Lab DevSecOps qui combine contrôle RBAC, validation CI, admission control, détection runtime et confinement réseau.',
        highlight: '3 scénarios reproduits · 5 couches · 10 charts Helm pré-audités.',
        stack: ['Kubernetes', 'Kyverno', 'Gatekeeper', 'Falco', 'CI/CD'],
        href: 'https://github.com/Boualili-Youcef/k8s-sec-lab',
        reportHref: '/files/k8s-sec-lab-rapport-technique.pdf',
      },
      {
        name: 'CloudSecVision',
        type: 'Cloud Security',
        description:
          'Scanner AWS avec CLI et dashboard Streamlit pour analyser IAM, S3 et EC2 et produire des recommandations de remédiation.',
        highlight: 'Contrôles AWS · rapports JSON · analyse locale Ollama optionnelle.',
        stack: ['AWS', 'Python', 'Streamlit', 'Docker', 'IAM'],
        href: 'https://github.com/Boualili-Youcef/CloudSecVision',
      },
      {
        name: 'secure-card-vault-poc',
        type: 'Secure Backend',
        description:
          'Coffre-fort numérique security-by-design avec envelope encryption, double contrôle 2FA et révocation sans rechiffrer la base.',
        highlight: 'KEK → Master Key → DEK · clés sensibles uniquement en RAM.',
        stack: ['Python', 'AES-GCM', 'Argon2id', 'Key slots', 'Audit'],
        href: 'https://github.com/Boualili-Youcef/secure-card-vault-poc',
      },
    ],
    stackTitle: 'Stack de travail',
    stackGroups: [
      {
        label: 'Cloud & plateforme',
        items: ['AWS', 'Notions Azure', 'Kubernetes', 'Docker', 'Linux'],
      },
      {
        label: 'Sécurité',
        items: ['IAM', 'RBAC', 'NetworkPolicies', 'Policy-as-Code', 'Détection runtime'],
      },
      {
        label: 'Automatisation',
        items: ['Python', 'Bash', 'GitHub Actions', 'Git', 'Notions Ansible'],
      },
      {
        label: 'Backend & systèmes',
        items: ['C/C++', 'JavaScript', 'Node.js', 'MySQL', 'MongoDB'],
      },
    ],
    journeyTitle: 'Parcours & Expériences',
    journeySubtitle: 'Mon évolution professionnelle et académique.',
    journey: [
      {
        period: '2026 - Présent',
        title: 'Stage DevOps, Cloud & Security',
        place: 'ESSEC Business School',
        badge: 'ESSEC',
        body: 'Contribution à des sujets d’automatisation, de cloud et de sécurité opérationnelle: fiabiliser les déploiements, documenter les pratiques et renforcer les contrôles techniques.',
        stack: ['DevOps', 'Cloud', 'Security', 'CI/CD', 'Automation'],
      },
      {
        period: 'Juin 2025 - Août 2025',
        title: 'Développeur Power Platform',
        place: 'ArcelorMittal France',
        logo: '/img/icons/Arcelor.jpeg',
        body: 'Digitalisation industrielle avec Power Apps, Power Automate et SharePoint pour le Département de la Transformation Digitale.',
        stack: ['Power Platform', 'Power BI', 'Microsoft 365', 'API'],
      },
      {
        period: '2025 - 2027',
        title: 'Master Cloud Computing & Cybersecurity',
        place: 'Université de Lille',
        logo: '/img/icons/lille.jpeg',
        body: 'Formation orientée cloud, systèmes distribués, sécurité et architectures modernes.',
        stack: ['Cloud', 'Cybersecurity', 'Distributed systems'],
      },
      {
        period: '2022 - 2025',
        title: 'Licence Informatique',
        place: 'ULCO / Paris-Saclay',
        logo: '/img/icons/ulco.jpeg',
        body: 'Bases solides en algorithmique, systèmes, programmation, IA et projets logiciels.',
        stack: ['Algorithms', 'Systems', 'Software', 'AI'],
      },
    ],
    contactTitle: 'Travailler ensemble',
    contactBody:
      'Je recherche un stage en Cloud Security, DevSecOps ou Platform Security et je suis ouvert aux échanges techniques.',
    emailCta: 'Me contacter',
    linkedinCta: 'LinkedIn',
  },
  en: {
    proofTitle: 'What I put into practice',
    proofSubtitle:
      'Understand risks, automate controls and document reproducible labs.',
    proofs: [
      {
        title: 'Secure Kubernetes',
        body: 'RBAC, NetworkPolicies, admission control, policy-as-code and runtime detection to reduce workload attack surface.',
      },
      {
        title: 'Automate cloud controls',
        body: 'AWS scripts and scanners to identify IAM, S3 or EC2 misconfigurations and produce actionable remediation guidance.',
      },
      {
        title: 'Build with method',
        body: 'CI/CD pipelines, Linux, GitHub Actions and technical documentation to make projects readable and verifiable.',
      },
    ],
    labsTitle: 'Selected labs',
    labsSubtitle:
      'Three projects that summarize my DevSecOps direction: Kubernetes, cloud security and secure backend design.',
    labsCta: 'Open Labs page',
    repoCta: 'Repository',
    reportCta: 'Technical report',
    labs: [
      {
        name: 'k8s-sec-lab',
        type: 'Kubernetes Security',
        description:
          'DevSecOps lab combining RBAC controls, CI validation, admission control, runtime detection and network containment.',
        highlight: '3 scenarios reproduced · 5 layers · 10 Helm charts pre-audited.',
        stack: ['Kubernetes', 'Kyverno', 'Gatekeeper', 'Falco', 'CI/CD'],
        href: 'https://github.com/Boualili-Youcef/k8s-sec-lab',
        reportHref: '/files/k8s-sec-lab-rapport-technique.pdf',
      },
      {
        name: 'CloudSecVision',
        type: 'Cloud Security',
        description:
          'AWS scanner with CLI and Streamlit dashboard for IAM, S3 and EC2 analysis with remediation guidance.',
        highlight: 'AWS controls · JSON reports · optional local Ollama analysis.',
        stack: ['AWS', 'Python', 'Streamlit', 'Docker', 'IAM'],
        href: 'https://github.com/Boualili-Youcef/CloudSecVision',
      },
      {
        name: 'secure-card-vault-poc',
        type: 'Secure Backend',
        description:
          'Security-by-design digital vault with envelope encryption, dual-control 2FA and revocation without database re-encryption.',
        highlight: 'KEK → Master Key → DEK · sensitive keys remain in memory.',
        stack: ['Python', 'AES-GCM', 'Argon2id', 'Key slots', 'Audit'],
        href: 'https://github.com/Boualili-Youcef/secure-card-vault-poc',
      },
    ],
    stackTitle: 'Working stack',
    stackGroups: [
      {
        label: 'Cloud & platform',
        items: ['AWS', 'Azure basics', 'Kubernetes', 'Docker', 'Linux'],
      },
      {
        label: 'Security',
        items: ['IAM', 'RBAC', 'NetworkPolicies', 'Policy-as-Code', 'Runtime detection'],
      },
      {
        label: 'Automation',
        items: ['Python', 'Bash', 'GitHub Actions', 'Git', 'Ansible basics'],
      },
      {
        label: 'Backend & systems',
        items: ['C/C++', 'JavaScript', 'Node.js', 'MySQL', 'MongoDB'],
      },
    ],
    journeyTitle: 'Background & Experience',
    journeySubtitle: 'My professional and academic path.',
    journey: [
      {
        period: '2026 - Present',
        title: 'DevOps, Cloud & Security Intern',
        place: 'ESSEC Business School',
        badge: 'ESSEC',
        body: 'Contributing to automation, cloud and operational security topics: improving deployment reliability, documenting practices and strengthening technical controls.',
        stack: ['DevOps', 'Cloud', 'Security', 'CI/CD', 'Automation'],
      },
      {
        period: 'June 2025 - August 2025',
        title: 'Power Platform Developer',
        place: 'ArcelorMittal France',
        logo: '/img/icons/Arcelor.jpeg',
        body: 'Industrial digitalization with Power Apps, Power Automate and SharePoint for the Digital Transformation Department.',
        stack: ['Power Platform', 'Power BI', 'Microsoft 365', 'API'],
      },
      {
        period: '2025 - 2027',
        title: 'MSc Cloud Computing & Cybersecurity',
        place: 'University of Lille',
        logo: '/img/icons/lille.jpeg',
        body: 'Program focused on cloud, distributed systems, security and modern infrastructure architectures.',
        stack: ['Cloud', 'Cybersecurity', 'Distributed systems'],
      },
      {
        period: '2022 - 2025',
        title: 'Computer Science Bachelor',
        place: 'ULCO / Paris-Saclay',
        logo: '/img/icons/ulco.jpeg',
        body: 'Strong foundations in algorithms, systems, programming, AI and software projects.',
        stack: ['Algorithms', 'Systems', 'Software', 'AI'],
      },
    ],
    contactTitle: 'Let’s connect',
    contactBody:
      'I am looking for a Cloud Security, DevSecOps or Platform Security internship and welcome technical conversations.',
    emailCta: 'Contact me',
    linkedinCta: 'LinkedIn',
  },
};

function getContent(locale) {
  return locale === 'en' ? content.en : content.fr;
}

function SectionHeader({title, subtitle}) {
  return (
    <div className={styles.sectionHeader}>
      <Heading as="h2">{title}</Heading>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const copy = getContent(i18n.currentLocale);

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <SectionHeader title={copy.proofTitle} subtitle={copy.proofSubtitle} />
          <div className={styles.proofGrid}>
            {copy.proofs.map((proof) => (
              <article className={styles.proofCard} key={proof.title}>
                <h3>{proof.title}</h3>
                <p>{proof.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.splitHeader}>
            <SectionHeader title={copy.labsTitle} subtitle={copy.labsSubtitle} />
            <Link className="button button--outline button--primary" to="/docs/labs">
              {copy.labsCta}
            </Link>
          </div>
          <div className={styles.labsGrid}>
            {copy.labs.map((lab) => (
              <article className={styles.labCard} key={lab.name}>
                <p className={styles.labType}>{lab.type}</p>
                <h3>{lab.name}</h3>
                <p>{lab.description}</p>
                <p className={styles.labHighlight}>{lab.highlight}</p>
                <div className={styles.tagList}>
                  {lab.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <Link to={lab.href} target="_blank" className={styles.cardLink}>
                    {copy.repoCta}
                  </Link>
                  {lab.reportHref && (
                    <Link to={lab.reportHref} target="_blank" className={styles.cardLinkMuted}>
                      {copy.reportCta}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeader title={copy.stackTitle} />
          <div className={styles.stackGrid}>
            {copy.stackGroups.map((group) => (
              <article className={styles.stackGroup} key={group.label}>
                <h3>{group.label}</h3>
                <div className={styles.tagList}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <SectionHeader title={copy.journeyTitle} subtitle={copy.journeySubtitle} />
          <div className={styles.timeline}>
            {copy.journey.map((item) => (
              <article className={styles.timelineItem} key={`${item.period}-${item.title}`}>
                <div className={styles.timelineMeta}>
                  {item.logo ? (
                    <img src={item.logo} alt="" aria-hidden="true" loading="lazy" />
                  ) : (
                    <div className={styles.timelineBadge} aria-hidden="true">
                      {item.badge ??
                        item.place
                          .split(' ')
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join('')}
                    </div>
                  )}
                  <span>{item.period}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className={styles.place}>{item.place}</p>
                  <p>{item.body}</p>
                  {item.stack && (
                    <div className={styles.tagList}>
                      {item.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactPanel}>
            <div>
              <Heading as="h2">{copy.contactTitle}</Heading>
              <p>{copy.contactBody}</p>
            </div>
            <div className={styles.contactActions}>
              <a className="button button--primary" href="mailto:youcefboualili0@gmail.com">
                {copy.emailCta}
              </a>
              <Link
                className="button button--secondary"
                to="https://linkedin.com/in/youcef-boualili"
                target="_blank">
                {copy.linkedinCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
