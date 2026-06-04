# Youcef Boualili Portfolio

Portfolio Docusaurus bilingue pour un profil DevSecOps, Cloud Security et Kubernetes Security.

## Installation

```bash
npm install
```

## Developpement local

```bash
npm run start
```

Pour limiter la memoire utilisee par Node pendant le developpement:

```bash
npm run start:safe
```

Le serveur de developpement Docusaurus ne sert qu'une langue a la fois. Pour tester
uniquement la version anglaise en mode dev:

```bash
npm run start:en:safe
```

Dans ce mode, la page d'accueil anglaise est disponible sur `http://127.0.0.1:3000/`.
Le chemin `/en/` est utilise par le build de production bilingue, pas par le serveur
de developpement lance avec `--locale en`.

Pour tester le selecteur de langue proprement en local, utilise le preview statique
bilingue. Cette commande construit le site puis sert `build/` sur un seul port, comme
la structure de production:

```bash
npm run start:i18n:safe
```

Le francais sera servi sur `http://127.0.0.1:4173/` et l'anglais sur
`http://127.0.0.1:4173/en/`. Le selecteur de langue bascule entre ces deux chemins
sur le meme serveur.

## Apercu statique leger

Pour afficher le dernier build existant sans lancer Docusaurus:

```bash
npm run preview
```

Puis ouvrir `http://127.0.0.1:4173`. Cette commande sert uniquement les fichiers deja presents dans `build/`.

## Build

```bash
npm run build
```

Pour limiter la memoire utilisee par Node pendant le build:

```bash
npm run build:safe
```

Le site est en francais par defaut et la version anglaise est disponible sur `/en/`.
