import React, {useEffect} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

function getLocalEnRedirect() {
  if (typeof window === 'undefined') {
    return null;
  }

  const {hostname, pathname, search, hash} = window.location;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

  if (!isLocalhost || !pathname.match(/^\/en(?=\/|$)/)) {
    return null;
  }

  return `${pathname.replace(/^\/en(?=\/|$)/, '') || '/'}${search}${hash}`;
}

export default function NotFoundContent({className}) {
  const redirectTo = getLocalEnRedirect();

  useEffect(() => {
    if (redirectTo) {
      window.location.replace(redirectTo);
    }
  }, [redirectTo]);

  if (redirectTo) {
    return (
      <main className={clsx('container margin-vert--xl', className)}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">
              Redirection locale
            </Heading>
            <p>Ouverture de la route anglaise locale sans le préfixe /en...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
        </div>
      </div>
    </main>
  );
}
