# Nettoyage éditorial BESTA — 12 octobre 2026

Nettoyage de la démonstration commerciale RugosTech. Les validations de l'entreprise restent internes : voir CONTENT-TO-CONFIRM.md. Aucun prix, poids inconnu, composition, usage ou engagement de livraison n'a été inventé.

## Principales corrections

- Suppression des avertissements illustratifs sous les photos et des annotations sur les images.
- Suppression des lignes de caractéristiques sans données vérifiées, des introductions redondantes et des paragraphes de remplissage.
- Textes commerciaux raccourcis ; récit de marque recentré sur les informations connues de Best Food Solutions.
- État du panier vide explicite ; montants inconnus présentés « Sur demande ».
- Conservation des précautions d'utilisation et des indications sur l'absence de paiement et d'envoi de commande. Les formulaires conservent leur fonctionnement.
- Rééquilibrage de l'en-tête de collection et des espacements après suppression des paragraphes. Images inchangées.

## Fichiers modifiés

- src/components/homepage.tsx
- src/components/products.tsx
- src/components/customer-sections.tsx
- src/components/forms.tsx
- src/components/site.tsx
- src/lib/marketing.ts
- src/lib/products.ts
- src/app/notre-histoire/page.tsx
- src/app/pourquoi-besta/page.tsx
- src/app/livraison/page.tsx
- src/app/faq/page.tsx
- src/app/commande/page.tsx
- src/app/contact/page.tsx
- src/app/produits/page.tsx
- src/app/responsive.css
- scripts/verify.mjs
- scripts/check-public-copy.mjs
- scripts/editorial-audit.mjs (ajout)
- EDITORIAL-CLEANUP.md (ajout)

## Vérifications

- npm run build : réussi.
- npm run lint : réussi.
- scripts/verify.mjs : panier, persistance, formulaires, navigation et routes réussis.
- Recherche dans src : aucune des anciennes annotations ciblées ni « À confirmer ».
- scripts/check-public-copy.mjs : aucune mention ciblée dans les textes rendus des 12 routes.
- 12 routes contrôlées à 390 et 1440 px : aucun débordement, bouton inférieur à 44 px, défaut de chargement d'image ou erreur JavaScript détecté. Captures inspectées ; résultats dans test-results/audit-editorial.

Modifications locales uniquement, sans déploiement.
