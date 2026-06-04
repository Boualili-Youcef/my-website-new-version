import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

const LOCALES = [
  {code: 'fr', label: 'Français', htmlLang: 'fr-FR'},
  {code: 'en', label: 'English', htmlLang: 'en-US'},
];

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

export default function LanguageSwitcher({mobile = false}) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const {pathname, search, hash} = useLocation();
  const current = LOCALES.find((locale) => locale.code === currentLocale) ?? LOCALES[0];
  const nextLocale = LOCALES.find((locale) => locale.code !== currentLocale) ?? LOCALES[0];
  const languageLabel = currentLocale === 'en' ? 'Language' : 'Langue';

  if (mobile) {
    return (
      <li className="menu__list-item">
        <span className="menu__link menu__link--sublist">{languageLabel}</span>
        <ul className="menu__list">
          {LOCALES.map((locale) => (
            <li className="menu__list-item" key={locale.code}>
              <a
                className={`menu__link ${
                  locale.code === currentLocale ? 'menu__link--active' : ''
                }`}
                href={getLocaleUrl(locale.code, pathname, search, hash)}
                hrefLang={locale.htmlLang}>
                {locale.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <div className="navbar__item dropdown dropdown--hoverable dropdown--right header-language-switcher">
      <a
        className="navbar__link"
        href={getLocaleUrl(nextLocale.code, pathname, search, hash)}
        hrefLang={nextLocale.htmlLang}
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label={`${languageLabel}: ${current.label}`}>
        <span aria-hidden="true">文</span>
        {current.label}
      </a>
      <ul className="dropdown__menu">
        {LOCALES.map((locale) => (
          <li key={locale.code}>
            <a
              className={`dropdown__link ${
                locale.code === currentLocale ? 'dropdown__link--active' : ''
              }`}
              href={getLocaleUrl(locale.code, pathname, search, hash)}
              hrefLang={locale.htmlLang}>
              {locale.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
