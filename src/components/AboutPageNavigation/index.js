import {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

const sections = ['profil', 'focus', 'labs', 'experience', 'competences', 'contact'];

export default function AboutPageNavigation() {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.endsWith('/about')) return undefined;

    const sidebarLinks = Array.from(
      document.querySelectorAll('.profile-page[data-page="about"] .profile-sidebar a'),
    );

    const setActiveSection = () => {
      let currentSection = sections[0];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= 0) {
          currentSection = sectionId;
        }
      }

      sidebarLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
      });
    };

    const handleNavClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      history.pushState(null, '', link.getAttribute('href'));
    };

    const sidebar = document.querySelector('.profile-page[data-page="about"] .profile-sidebar');

    window.addEventListener('scroll', setActiveSection, {passive: true});
    sidebar?.addEventListener('click', handleNavClick);
    setActiveSection();

    return () => {
      window.removeEventListener('scroll', setActiveSection);
      sidebar?.removeEventListener('click', handleNavClick);
    };
  }, [location.pathname]);

  return null;
}
