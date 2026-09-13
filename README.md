# IEEE RAS VIT Chennai — Website

A modern, dark-themed, fully responsive website for the IEEE Robotics and
Automation Society (RAS) Student Chapter at VIT Chennai, built with React
and Vite.

All chapter and society information used in this site is drawn from
publicly available sources (ieee-ras.org, the chapter's public LinkedIn
and Instagram pages, and VIT Chennai's own site). No members, events, or
statistics have been invented — where VIT Chennai–specific detail wasn't
publicly verifiable, general IEEE RAS activity categories are used instead.

## Tech stack

- React 19 + Vite
- Plain CSS (custom design system — no CSS framework)
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Building for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Project structure

```
src/
  components/     One component + matching .css file per section
  data/content.js All copy and links — edit this file to update content
  hooks/          useActiveSection (scroll-spy for the nav bar)
  App.jsx         Assembles all sections
  index.css       Design tokens (colors, type, spacing) and shared styles
```

## Updating content

Nearly everything text-based — domains, events, resources, contact links —
lives in `src/data/content.js`. Edit that file rather than the components
to change copy, add a resource, or add a new event.

The contact form does not send email on its own: submitting it opens the
visitor's own email client with the message pre-filled, addressed to the
chapter's email. Wiring it to a real backend (e.g. Formspree, EmailJS, or
a custom API route) is a drop-in replacement for the `handleSubmit`
function in `src/components/Contact.jsx`.

## Deploying

This is a static site after `npm run build` — deploy the `dist/` folder to
any static host.

**Vercel**
1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Vite. Build command: `npm run build`. Output
   directory: `dist`.

**Netlify**
1. Push this project to a GitHub repository.
2. Import the repo at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`. Publish directory: `dist`.

Both platforms auto-detect these settings for a Vite project, so the
defaults usually work without changes.
