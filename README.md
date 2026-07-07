# Vardhan Kumar — Data Analyst Portfolio

A modern, responsive personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

## ✨ Features
- Hero, About, Education timeline, Skills, Experience, Projects, Achievements, Contact, Footer
- Blue/purple design system with animated gradients and glassmorphism
- Fully responsive & accessible
- SEO metadata, JSON-LD, custom favicon
- Reusable components under `src/components/portfolio/`

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## 📦 Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `portfolio`) and push this project.
2. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. In `vite.config.ts`, set the `base` to your repo name (only if not a user site):
   ```ts
   export default defineConfig({ base: "/portfolio/", /* ... */ });
   ```
4. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
6. In GitHub → **Settings → Pages**, choose the `gh-pages` branch as the source.

Your site will be live at `https://<username>.github.io/portfolio/`.

## 🗂️ Project Structure

```
src/
  assets/                 # Images
  components/
    portfolio/            # Portfolio sections (Hero, About, Skills, ...)
    ui/                   # Reusable UI primitives (shadcn)
  pages/
    Index.tsx             # Composes all sections
  index.css               # Design tokens (HSL) + utilities
```

## 📇 Contact

- Email: vardhankumar687@gmail.com
- LinkedIn: https://linkedin.com/
- GitHub: https://github.com/
