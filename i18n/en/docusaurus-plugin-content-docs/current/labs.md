---
title: Labs & technical evidence
sidebar_label: Labs
description: Verifiable case studies around Kubernetes Security, DevSecOps, AWS Security and secure backend design.
hide_table_of_contents: true
---

# Labs & technical evidence

<div className="labs-intro">
  <p className="labs-intro-lead">
    I build projects as replayable demonstrations: a concrete risk, a chain of controls,
    observable results and documented limitations.
  </p>
  <p>
    For a quick review, start with the featured project below. The links go directly to
    the report, CI workflow and evidence logs.
  </p>
</div>

<section className="case-study case-study-featured">
  <div className="case-study-heading">
    <div>
      <p className="lab-eyebrow">Featured project · University project 2025–2026</p>
      <h2>k8s-sec-lab</h2>
      <p className="lab-thesis">
        RBAC authorizes an action. It does not guarantee that the workload is safe.
      </p>
    </div>
    <div className="case-study-actions">
      <a className="lab-action lab-action-primary" href="https://github.com/Boualili-Youcef/k8s-sec-lab" target="_blank" rel="noopener noreferrer">
        Explore repository
      </a>
      <a className="lab-action" href="/files/k8s-sec-lab-rapport-technique.pdf" target="_blank" rel="noopener noreferrer">
        Read technical report
      </a>
    </div>
  </div>

  <p className="case-study-summary">
    A <strong>dev-user</strong> profile cannot read namespace secrets, but can create pods.
    The lab reproduces three risky configurations that pass with RBAC alone, then combines
    prevention, runtime detection and network containment to reduce the risk.
  </p>

  <div className="lab-metrics" aria-label="Key k8s-sec-lab results">
    <div>
      <strong>3</strong>
      <span>risky scenarios reproduced</span>
    </div>
    <div>
      <strong>5</strong>
      <span>security layers combined</span>
    </div>
    <div>
      <strong>10</strong>
      <span>Helm charts pre-audited</span>
    </div>
    <div>
      <strong>20</strong>
      <span>findings to review before adoption</span>
    </div>
  </div>

  <h3>A security chain, not a collection of tools</h3>
  <div className="control-chain" aria-label="Kubernetes control chain">
    <div>
      <span>01</span>
      <strong>RBAC</strong>
      <small>API permissions</small>
    </div>
    <div>
      <span>02</span>
      <strong>Conftest</strong>
      <small>CI regression</small>
    </div>
    <div>
      <span>03</span>
      <strong>Kyverno · Gatekeeper</strong>
      <small>Admission control</small>
    </div>
    <div>
      <span>04</span>
      <strong>Falco</strong>
      <small>Runtime detection</small>
    </div>
    <div>
      <span>05</span>
      <strong>NetworkPolicy</strong>
      <small>Egress containment</small>
    </div>
  </div>

  <div className="lab-proof-layout">
    <div>
      <h3>What the lab demonstrates</h3>
      <div className="proof-list">
        <article>
          <span>Prevention</span>
          <strong>Three dangerous manifests are rejected</strong>
          <p>Privileged container, hostPath volume and ServiceAccount token are blocked in CI and then at admission.</p>
        </article>
        <article>
          <span>Detection</span>
          <strong>Runtime remains an essential layer</strong>
          <p>A compliant pod can later execute <code>curl</code> or <code>sh</code>. Falco detects these behaviors after admission.</p>
        </article>
        <article>
          <span>Containment</span>
          <strong>Detection and blocking are different actions</strong>
          <p>A targeted NetworkPolicy cuts pod egress without preventing deployment.</p>
        </article>
        <article>
          <span>Supply chain</span>
          <strong>The same rules help before adoption</strong>
          <p>The Rego control pre-audits ten Helm charts. A finding triggers review, not an automatic vulnerability verdict.</p>
        </article>
      </div>
    </div>

    <aside className="evidence-panel">
      <p className="lab-eyebrow">Verifiable evidence</p>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/.github/workflows/security-audit.yml" target="_blank" rel="noopener noreferrer">
        GitHub Actions workflow <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/tree/main/scripts/evidence" target="_blank" rel="noopener noreferrer">
        Replayable scripts <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/report/evidence/logs/14-falco-runtime-detection.log" target="_blank" rel="noopener noreferrer">
        Falco runtime logs <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/report/evidence/logs/15-networkpolicy-egress-proof.log" target="_blank" rel="noopener noreferrer">
        NetworkPolicy evidence <span>↗</span>
      </a>
      <a href="https://github.com/Boualili-Youcef/k8s-sec-lab/blob/main/scan/results/summary.md" target="_blank" rel="noopener noreferrer">
        Helm scan results <span>↗</span>
      </a>
    </aside>
  </div>

  <p className="lab-scope">
    <strong>Honest scope:</strong> local Kind lab, controlled scenarios and intentionally
    local CD. The goal is to make each claim verifiable, not to simulate a production platform.
  </p>
</section>

## Complementary projects

<p>
  These projects broaden the profile without diluting its main direction: automate security
  controls and document verifiable technical decisions.
</p>

<div className="labs-grid labs-grid-secondary">
  <article className="lab-card">
    <p className="lab-eyebrow">AWS Cloud Security · Operational scanner</p>
    <h2>CloudSecVision</h2>
    <p>
      Python scanner with CLI and Streamlit dashboard to detect IAM, S3 and EC2
      misconfigurations, then produce JSON reports and actionable remediation guidance.
    </p>
    <div className="lab-signal">
      <strong>What the project demonstrates</strong>
      <span>Cloud control automation, remediation-oriented reporting and attention to the operational security of scan results.</span>
    </div>
    <div className="lab-facts">
      <span><strong>IAM</strong> wildcards, risky policies and stale keys</span>
      <span><strong>S3</strong> public exposure, encryption, logging and versioning</span>
      <span><strong>EC2</strong> public security groups, sensitive ports and broad egress</span>
    </div>
    <div className="lab-stack">
      <span>AWS</span>
      <span>Python</span>
      <span>Streamlit</span>
      <span>Docker</span>
      <span>Optional Ollama</span>
    </div>
    <a href="https://github.com/Boualili-Youcef/CloudSecVision" target="_blank" rel="noopener noreferrer">
      Explore repository <span>↗</span>
    </a>
  </article>

  <article className="lab-card">
    <p className="lab-eyebrow">Secure Backend · Applied cryptography</p>
    <h2>secure-card-vault-poc</h2>
    <p>
      Digital vault for sensitive banking data: two actors authenticated with two factors
      reconstruct the decryption keys in memory.
    </p>
    <div className="lab-signal">
      <strong>What the project demonstrates</strong>
      <span>A security-by-design architecture where neither disk theft nor a single administrator is sufficient to access data.</span>
    </div>
    <div className="lab-facts">
      <span><strong>Envelope encryption</strong> KEK → Master Key → DEK</span>
      <span><strong>Dual control</strong> password + USB key file for each actor</span>
      <span><strong>O(1) revocation</strong> DEK re-wrapping without database re-encryption</span>
    </div>
    <div className="lab-stack">
      <span>Python</span>
      <span>AES-256-GCM</span>
      <span>Argon2id</span>
      <span>Key slots</span>
      <span>SIEM audit</span>
    </div>
    <a href="https://github.com/Boualili-Youcef/secure-card-vault-poc" target="_blank" rel="noopener noreferrer">
      Explore repository <span>↗</span>
    </a>
  </article>
</div>
