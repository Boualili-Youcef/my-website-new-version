import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const navItems = {
  fr: [
    {label: 'Accueil', to: '/', icon: 'home', match: (path) => path === '/'},
    {label: 'À propos', to: '/about', icon: 'info', match: (path) => path.startsWith('/about')},
    {label: 'Docs', to: '/docs/labs', icon: 'docs', match: (path) => path.startsWith('/docs')},
    {label: 'Blog', to: '/blog', icon: 'blog', match: (path) => path.startsWith('/blog')},
  ],
  en: [
    {label: 'Home', to: '/', icon: 'home', match: (path) => path === '/'},
    {label: 'About', to: '/about', icon: 'info', match: (path) => path.startsWith('/about')},
    {label: 'Docs', to: '/docs/labs', icon: 'docs', match: (path) => path.startsWith('/docs')},
    {label: 'Blog', to: '/blog', icon: 'blog', match: (path) => path.startsWith('/blog')},
  ],
};

const plusLabel = {
  fr: 'Plus',
  en: 'More',
};

const panelCopy = {
  fr: {
    title: 'Accès rapides',
    subtitle: 'Contact, réseaux et préférences.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
    themeLight: 'Mode clair',
    themeDark: 'Mode sombre',
    language: 'English version',
    close: 'Fermer le menu plus',
    open: 'Ouvrir les actions rapides',
  },
  en: {
    title: 'Quick access',
    subtitle: 'Contact, socials and preferences.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    language: 'Version française',
    close: 'Close more menu',
    open: 'Open quick actions',
  },
};

function Icon({name}) {
  const commonProps = {
    'aria-hidden': 'true',
    className: styles.icon,
    fill: 'none',
    viewBox: '0 0 24 24',
  };

  if (name === 'home') {
    return (
      <svg {...commonProps}>
        <path d="M4 11.2 12 4l8 7.2" />
        <path d="M6.5 10.5V20h11v-9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }

  if (name === 'info') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </svg>
    );
  }

  if (name === 'docs') {
    return (
      <svg {...commonProps}>
        <path d="M7 4h7l3 3v13H7z" />
        <path d="M14 4v4h4" />
        <path d="M9.5 12h5" />
        <path d="M9.5 15h5" />
      </svg>
    );
  }

  if (name === 'blog') {
    return (
      <svg {...commonProps}>
        <path d="M5 19V5h14v14z" />
        <path d="M8 9h8" />
        <path d="M8 12h8" />
        <path d="M8 15h5" />
      </svg>
    );
  }

  if (name === 'more') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg {...commonProps}>
        <path d="M7 10v8" />
        <path d="M11 18v-4.4c0-2 1.1-3.2 2.8-3.2 1.8 0 3 1.3 3 3.4V18" />
        <path d="M7 7h.01" />
      </svg>
    );
  }

  if (name === 'github') {
    return (
      <svg {...commonProps}>
        <path d="M9 19c-4 1.2-4-2-5.5-2.5" />
        <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.8 4.8 0 0 0 18.7 7c.1-.3.6-1.7-.2-3.4 0 0-1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 3.3 5.5 3.6 5.5 3.6 4.7 5.3 5.2 6.7 5.3 7A4.8 4.8 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
      </svg>
    );
  }

  if (name === 'mail') {
    return (
      <svg {...commonProps}>
        <path d="M4 7h16v10H4z" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    );
  }

  if (name === 'theme') {
    return (
      <svg {...commonProps}>
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M4.2 4.2l1.4 1.4" />
        <path d="M18.4 18.4l1.4 1.4" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
        <path d="M4.2 19.8l1.4-1.4" />
        <path d="M18.4 5.6l1.4-1.4" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M6 12h12" />
    </svg>
  );
}

function normalizePath(pathname) {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

function stripLocalePrefix(pathname) {
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

function withLocalePrefix(locale, pathname) {
  const cleanPath = stripLocalePrefix(pathname);
  return locale === 'en' ? `/en${cleanPath === '/' ? '/' : cleanPath}` : cleanPath;
}

function getLocaleUrl(locale, pathname, search, hash) {
  return `${withLocalePrefix(locale, pathname)}${search}${hash}`;
}

export default function MobileBottomNav() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const {pathname, search, hash} = useLocation();
  const {colorMode, setColorMode} = useColorMode();
  const [panelOpen, setPanelOpen] = useState(false);
  const normalizedPath = normalizePath(pathname);
  const items = currentLocale === 'en' ? navItems.en : navItems.fr;
  const copy = currentLocale === 'en' ? panelCopy.en : panelCopy.fr;
  const nextLocale = currentLocale === 'en' ? 'fr' : 'en';
  const isDark = colorMode === 'dark';

  useEffect(() => {
    setPanelOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!panelOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setPanelOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [panelOpen]);

  const toggleTheme = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <>
      {panelOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label={copy.close}
          onClick={() => setPanelOpen(false)}
        />
      )}

      <aside className={clsx(styles.panel, panelOpen && styles.panelOpen)} aria-hidden={!panelOpen}>
        <div className={styles.panelHeader}>
          <div>
            <strong>{copy.title}</strong>
            <span>{copy.subtitle}</span>
          </div>
          <button type="button" className={styles.closeButton} onClick={() => setPanelOpen(false)}>
            ×
          </button>
        </div>

        <div className={styles.quickActions}>
          <Link
            className={styles.quickAction}
            to="https://linkedin.com/in/youcef-boualili"
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="linkedin" />
            <span>{copy.linkedin}</span>
          </Link>
          <Link
            className={styles.quickAction}
            to="https://github.com/Boualili-Youcef"
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="github" />
            <span>{copy.github}</span>
          </Link>
          <a className={styles.quickAction} href="mailto:youcefboualili0@gmail.com">
            <Icon name="mail" />
            <span>{copy.email}</span>
          </a>
          <button type="button" className={styles.quickAction} onClick={toggleTheme}>
            <Icon name="theme" />
            <span>{isDark ? copy.themeLight : copy.themeDark}</span>
          </button>
          <a
            className={styles.quickAction}
            href={getLocaleUrl(nextLocale, pathname, search, hash)}
            hrefLang={nextLocale === 'en' ? 'en-US' : 'fr-FR'}>
            <Icon name="docs" />
            <span>{copy.language}</span>
          </a>
        </div>
      </aside>

      <nav
        className={styles.nav}
        aria-label={
          currentLocale === 'en' ? 'Main mobile navigation' : 'Navigation mobile principale'
        }>
        {items.map((item) => {
          const active = item.match(normalizedPath, hash);

          return (
            <Link
              className={clsx(styles.item, active && styles.active)}
              to={item.to}
              aria-current={active ? 'page' : undefined}
              key={item.label}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <button
          type="button"
          className={clsx(styles.item, styles.moreButton, panelOpen && styles.active)}
          aria-expanded={panelOpen}
          aria-label={panelOpen ? copy.close : copy.open}
          onClick={() => setPanelOpen((open) => !open)}>
          <Icon name="more" />
          <span>{plusLabel[currentLocale] ?? plusLabel.fr}</span>
        </button>
      </nav>
    </>
  );
}
