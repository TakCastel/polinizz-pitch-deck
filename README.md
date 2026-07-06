# Polinizz — Pitch Deck Demo Day

Deck de 12 slides en React 19 + Vite.

## Lancer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de prod dans dist/
```

## Vue aperçu (par défaut)

Les slides sont empilées verticalement, avec une barre d'outils :

- **▶ Présenter** — passe en mode présentation plein écran (`Échap` pour revenir)
- **⬇ Télécharger (.pptx)** — exporte les 12 slides en PowerPoint, avec le texte de pitch en notes de présentateur
- **💬 Notes de pitch** — affiche à droite de chaque slide la bulle avec le texte à prononcer (éditable dans `src/notes.js`)

## Navigation (mode présentation)

- `→` / `Espace` / clic droit de l'écran : slide suivante
- `←` / clic gauche de l'écran : slide précédente
- `Home` / `End` : première / dernière slide
- `F` : plein écran
- URL directe : `#5` ouvre la slide 5

## Structure

- `src/slides/S01…S12` — une slide par composant (positionnement absolu en % sur une scène 1280×722, ratio 13.3:7.5)
- `src/components/Deck.jsx` — navigation, mise à l'échelle plein écran, compteur
- `src/components/Slide.jsx` — chrome commun (mot vertical POLINIZZ, logo, numéro de page)
- `src/components/BeeLogo.jsx` — logo abeille SVG
- `public/fonts/` — Zain (titres) et Nunito (texte)
