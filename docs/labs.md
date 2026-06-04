---
title: Labs & preuves techniques
sidebar_label: Labs
description: Études de cas vérifiables autour de Kubernetes Security, DevSecOps, AWS Security et backend sécurisé.
hide_table_of_contents: true
---

# Labs & preuves techniques

<div className="labs-intro">
  <p className="labs-intro-lead">
    Je construis mes projets comme des démonstrations rejouables: un risque concret,
    une chaîne de contrôles, des résultats observables et des limites documentées.
  </p>
  <p>
    Pour une lecture rapide, commencez par le projet phare ci-dessous. Les liens mènent
    directement au rapport, au workflow CI et aux logs de preuve.
  </p>
</div>

<section className="case-study case-study-featured">
  <div className="case-study-heading">
    <div>
      <p className="lab-eyebrow">Projet phare · PJI universitaire 2025–2026</p>
      <h2>k8s-sec-lab</h2>
      <p className="lab-thesis">
        RBAC autorise l'action. Il ne garantit pas que le workload est sûr.
      </p>
    </div>
    <div className="case-study-actions">
      <a className="lab-action lab-action-primary" href="https://github.com/Boualili-Youcef/k8s-sec-lab" target="_blank" rel="noopener noreferrer">
        Explorer le dépôt
      </a>
      <a className="lab-action" href="/files/k8s-sec-lab-rapport-technique.pdf" target="_blank" rel="noopener noreferrer">
        Lire le rapport PDF
      </a>
    </div>
  </div>

  <p className="case-study-summary">
    Un profil <strong>dev-user</strong> ne peut pas lire les secrets du namespace, mais peut créer
    des pods. Le lab reproduit trois configurations risquées qui passent avec RBAC seul, puis
    combine prévention, détection runtime et confinement réseau pour réduire le risque.
  </p>

  <div className="lab-metrics" aria-label="Résultats clés de k8s-sec-lab">
    <div>
      <strong>3</strong>
      <span>scénarios risqués reproduits</span>
    </div>
    <div>
      <strong>5</strong>
      <span>couches de sécurité combinées</span>
    </div>
    <div>
      <strong>10</strong>
      <span>charts Helm pré-audités</span>
    </div>
    <div>
      <strong>20</strong>
      <span>findings à examiner avant adoption</span>
    </div>
  </div>

  <h3>Une chaîne de sécurité, pas une collection d'outils</h3>
  <div className="control-chain" aria-label="Chaîne de contrôle Kubernetes">
    <div>
      <span>01</span>
      <strong>RBAC</strong>
      <small>Droits API</small>
    </div>
    <div>
      <span>02</span>
      <strong>Conftest</strong>
      <small>Régression CI</small>
    </div>
    <div>
      <span>03</span>
      <strong>Kyverno · Gatekeeper</strong>
      <small>Admission control</small>
    </div>
    <div>
      <span>04</span>
      <strong>Falco</strong>
      <small>Détection runtime</small>
    </div>
    <div>
      <span>05</span>
      <strong>NetworkPolicy</strong>
      <small>Confinement egress</small>
    </div>
  </div>

  <div className="lab-proof-layout">
    <div>
      <h3>Ce que le lab démontre</h3>
      <div className="proof-list">
        <article>
          <span>Prévention</span>
          <strong>Trois manifests dangereux refusés</strong>
          <p>Privileged container, volume hostPath et token ServiceAccount sont bloqués en CI puis à l'admission.</p>
        </article>
        <article>
          <span>Détection</span>
          <strong>Le runtime reste une couche indispensable</strong>
          <p>Un pod conforme peut exécuter ensuite <code>curl</code> ou <code>sh</code>. Falco détecte ces comportements après admission.</p>
        </article>
        <article>
          <span>Confinement</span>
          <strong>Détecter et bloquer sont deux actions différentes</strong>
          <p>Une NetworkPolicy ciblée coupe l'egress du pod sans empêcher son déploiement.</p>
        </article>
        <article>
          <span>Supply chain</span>
          <strong>Les règles servent aussi avant adoption</strong>
          <p>Le même contrôle Rego pré-audite dix charts Helm. Un finding déclenche une revue, pas un verdict automatique de vulnérabilité.</p>
        </article>
      </div>
    </div>

    <aside className="evidence-panel">
      <p className="lab-eyebrow">Preuves consultables</p>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/.github/workflows/security-audit.yml" target="_blank" rel="noopener noreferrer">
        Workflow GitHub Actions <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/tree/main/scripts/evidence" target="_blank" rel="noopener noreferrer">
        Scripts rejouables <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/report/evidence/logs/14-falco-runtime-detection.log" target="_blank" rel="noopener noreferrer">
        Logs Falco runtime <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/report/evidence/logs/15-networkpolicy-egress-proof.log" target="_blank" rel="noopener noreferrer">
        Preuve NetworkPolicy <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/scan/results/summary.md" target="_blank" rel="noopener noreferrer">
        Résultats du scan Helm <span>↗</span>
      </a>
    </aside>
  </div>

  <p className="lab-scope">
    <strong>Portée assumée:</strong> laboratoire local Kind, scénarios contrôlés et CD volontairement
    local. L'objectif est de rendre chaque affirmation vérifiable, pas de simuler une plateforme de production.
  </p>
</section>

## Projets complémentaires

<p>
  Ces projets élargissent le profil sans diluer l'axe principal: automatiser des contrôles
  de sécurité et documenter des décisions techniques vérifiables.
</p>

<div className="labs-grid labs-grid-secondary">
  <article className="lab-card">
    <p className="lab-eyebrow">Cloud Security AWS · Scanner opérationnel</p>
    <h2>CloudSecVision</h2>
    <p>
      Scanner Python avec CLI et dashboard Streamlit pour détecter des mauvaises configurations
      IAM, S3 et EC2, puis produire des rapports JSON et des recommandations exploitables.
    </p>
    <div className="lab-signal">
      <strong>Ce que le projet montre</strong>
      <span>Automatisation de contrôles cloud, restitution orientée remédiation et attention portée à la sécurité opérationnelle des rapports.</span>
    </div>
    <div className="lab-facts">
      <span><strong>IAM</strong> wildcards, politiques risquées et clés obsolètes</span>
      <span><strong>S3</strong> exposition publique, chiffrement, logs et versioning</span>
      <span><strong>EC2</strong> security groups publics, ports sensibles et egress large</span>
    </div>
    <div className="lab-stack">
      <span>AWS</span>
      <span>Python</span>
      <span>Streamlit</span>
      <span>Docker</span>
      <span>Ollama optionnel</span>
    </div>
    <a href="https://github.com/Boualili-Youcef/CloudSecVision" target="_blank" rel="noopener noreferrer">
      Explorer le dépôt <span>↗</span>
    </a>
  </article>

  <article className="lab-card">
    <p className="lab-eyebrow">Secure Backend · Cryptographie appliquée</p>
    <h2>secure-card-vault-poc</h2>
    <p>
      Coffre-fort numérique pour données bancaires sensibles: deux responsables authentifiés
      par deux facteurs reconstruisent en RAM les clés nécessaires au déchiffrement.
    </p>
    <div className="lab-signal">
      <strong>Ce que le projet montre</strong>
      <span>Une architecture security-by-design où ni le disque ni un administrateur isolé ne suffisent pour accéder aux données.</span>
    </div>
    <div className="lab-facts">
      <span><strong>Envelope encryption</strong> KEK → Master Key → DEK</span>
      <span><strong>Double contrôle</strong> mot de passe + fichier USB pour chaque acteur</span>
      <span><strong>Révocation O(1)</strong> ré-encapsulation de la DEK sans rechiffrer la base</span>
    </div>
    <div className="lab-stack">
      <span>Python</span>
      <span>AES-256-GCM</span>
      <span>Argon2id</span>
      <span>Key slots</span>
      <span>Audit SIEM</span>
    </div>
    <a href="https://github.com/Boualili-Youcef/secure-card-vault-poc" target="_blank" rel="noopener noreferrer">
      Explorer le dépôt <span>↗</span>
    </a>
  </article>
</div>
