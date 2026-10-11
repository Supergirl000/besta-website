# BESTA — proposition commerciale

Site en français : Next.js App Router, TypeScript, Tailwind CSS 4, Motion, Lucide et Zustand. Prêt pour Vercel. Cette version est une proposition et ne traite aucun paiement ou commande réelle.

## Démarrer

Node.js 20.9+ (22 LTS conseillé). Exécuter `npm install`, copier `.env.example` vers `.env.local`, puis `npm run dev`. Ouvrir http://localhost:3000. Vérification : `npm run typecheck` et `npm run build`. Production locale : `npm start` après le build.

## Configuration

Si `localhost` affiche une autre application sur cet ordinateur, ouvrir explicitement `http://127.0.0.1:3000/`. Les tests utilisent cette adresse IPv4 pour viser le bon serveur BESTA.

- `src/lib/products.ts` : les deux formats utilisent la photographie fournie le 5 octobre 2026. Le sachet indique « Red Chilli Seeds » et 250 g ; le petit contenant est présenté sous « Red Chilli », sans poids supposé. Renseigner `price` (nombre), `currency` (code ISO) et `available` (booléen) pour activer les achats. Prix, disponibilités, composition et usages inconnus restent à confirmer.
- `src/lib/brand.ts` : nom de l’entreprise, activité, adresse, téléphone, email, site et compte X transcrits de la capture de sa page fournie. Le numéro burundais est normalisé avec l’indicatif +257 pour le lien téléphonique, sans être présenté comme un compte WhatsApp.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` : numéro officiel validé, au format international avec indicatif. Aucun bouton WhatsApp n’est affiché tant qu’un numéro valide n’est pas configuré.
- `NEXT_PUBLIC_CONTACT_EMAIL` : remplace, si renseigné, l’adresse `info@bfsolutions.com` visible dans la capture fournie. Le contact prépare un fichier téléchargeable ; l’email ouvre le client mail de l’utilisateur. Aucun envoi automatique.
- `NEXT_PUBLIC_SITE_URL` : URL de production pour les métadonnées.
- `src/app/layout.tsx` : `robots` empêche l’indexation de la proposition ; activer l’indexation après validation de la marque et des données.

## Photographies intégrées et compléments à obtenir

La photographie réelle fournie remplace les cadres produit dans l’accueil, le catalogue, la présentation signature, le sélecteur et l’histoire de la marque. L’original est conservé dans `public/images/products/besta-reference.png` ; les versions WebP et cadrages conservent les conditionnements et les étiquettes sans retouche. La galerie permet de passer du cadrage du produit à la collection complète.

Compléments souhaitables pour la version commerciale finale :

1. Sachet 250 g de face sur fond uni, haute résolution.
2. Petit contenant de face avec étiquette complète et poids lisible.
3. Verso et gros plans des étiquettes et fiches produit validées.
4. Logo officiel transparent ou SVG.

Le logo imprimé reste visible dans les photographies authentiques. Le mot BESTA dans la navigation est un wordmark temporaire jusqu’à réception du fichier du logo, sans reproduction approximative.

La photographie générique de piments utilise Unsplash (`photo-1588252303782-cb80119abd6d`), téléchargée dans `public/chilli.jpg` et vérifiée visuellement, uniquement comme ambiance : elle ne représente pas des cultures ou installations BESTA. Licence : https://unsplash.com/license (usage commercial autorisé). Source : https://images.unsplash.com/photo-1588252303782-cb80119abd6d. Aucun visuel générique n’est utilisé comme photographie produit.

## Comportement commercial

Le panier persiste les IDs et quantités dans LocalStorage (`besta-cart-v1`). Il n’accepte que les produits ayant un prix et une disponibilité configurés. Les coordonnées du formulaire restent en mémoire et ne sont pas sauvegardées dans LocalStorage. Le récapitulatif de commande est téléchargeable et peut être transmis via WhatsApp configuré. Le site n’affirme jamais qu’une commande est reçue.

## Déployer sur Vercel

Importer ce dépôt dans Vercel, choisir Next.js, laisser le répertoire racine du dépôt, commande `npm run build`. Renseigner les variables publiques dans les paramètres Vercel, puis déployer. Ne pas mettre de secret dans une variable `NEXT_PUBLIC_*`. Aucune clé ou compte Vercel n’est inclus.

## Évolution backend

Le système opérationnel, sa base de données et ses comptes staff appartiendront à un projet séparé en Phase 2, uniquement sur demande explicite. En Phase 3, une API sécurisée pourra fournir les produits et accepter les demandes de commande du site public. Le backend devra alors valider prix, stocks et quantités ; les montants du navigateur ne seront jamais une source d’autorité. Aucune intégration, administration privée ou couche de paiement n’est créée pendant cette Phase 1.

## Routes

`/`, `/produits`, `/produits/[slug]`, `/notre-histoire`, `/pourquoi-besta`, `/contact`, `/panier`, `/commande`, `/faq`, `/livraison`, page 404 personnalisée.

## Architecture — Phase 1

Ce dépôt contient uniquement le site public BESTA. Le précédent dashboard de démonstration a été conservé dans `archive/besta-dashboard-prototype-2026-10-05.zip` et retiré des routes actives. `/admin` retourne une page 404. Aucun projet de gestion n’a été démarré.

Le futur système opérationnel devra être créé dans un projet distinct avec ses propres comptes, règles métier, base de données et déploiement. Une API sécurisée pourra relier les deux projets seulement après demande explicite ; aucune intégration n’est activée ici.

Les tarifs et disponibilités se configurent dans `src/lib/products.ts`, les coordonnées dans `src/lib/brand.ts` et les conditions de livraison dans `src/lib/delivery.ts`. Les données inconnues restent nulles et ne sont jamais remplacées par des prix, stocks ou conditions inventés.

## Vérification

Build et TypeScript validés avec Next.js 16.3.8. Audit des dépendances : zéro vulnérabilité après mise à jour. Avec `npm start` actif, exécuter `node scripts/verify.mjs`. Les tests utilisent Edge/Chrome installé ou Chromium Playwright (`npx playwright install chromium`). Ils contrôlent les routes, recherche, formulaire de contact, sélecteur, navigation mobile, récapitulatif, suppression et persistance du panier, limites de quantité, blocage des produits sans prix, chargement des photos, changement de vue de galerie et coordonnées de contact. Les prix de test sont injectés uniquement dans une copie isolée du catalogue en mémoire. Captures dans `test-results/` (ignoré par Git).
