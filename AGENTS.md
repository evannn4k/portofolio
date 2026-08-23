# AGENTS.md

## Project Overview

Single-page personal portfolio website built with React 19 + Vite.

The portfolio belongs to an SMK PPLG student who is currently doing an internship and actively learning modern web development.

The website should present the developer in an authentic, professional, and modern way.

The visual design system is defined in `DESIGN.md`.

When implementing UI, `DESIGN.md` is the source of truth for:

* Colors
* Typography
* Spacing
* Layout
* Components
* Responsive behavior
* Dark mode
* Animation
* Visual hierarchy

Do not introduce visual patterns that conflict with `DESIGN.md` unless explicitly requested.

---

# Tech Stack

* React 19
* Vite
* JavaScript
* JSX
* Tailwind CSS v4
* shadcn/ui
* Base UI
* Lucide React
* pnpm

This project intentionally does **not** use TypeScript.

Do not introduce `.ts` or `.tsx` files unless explicitly requested.

---

# Commands

Package manager is **pnpm**.

Do not use npm or yarn.

```sh
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

Development server:

```sh
pnpm dev
```

Production build:

```sh
pnpm build
```

Lint:

```sh
pnpm lint
```

Preview production build:

```sh
pnpm preview
```

There is currently no test suite or typecheck.

Before considering a change complete, run:

```sh
pnpm lint && pnpm build
```

### Existing Lint Errors

`pnpm lint` currently contains pre-existing errors in:

* `button.jsx`
* `badge.jsx`
* `card.jsx`
* `vite.config.js`

These may include:

* unused variables
* React Refresh export warnings/errors
* `__dirname` related issues

Do not assume these errors were introduced by a new change.

Use `pnpm build` as the primary build verification gate.

---

# Architecture

## Entry Point

Application flow:

```text
index.html
    ↓
src/main.jsx
    ↓
src/pages/LandingPage.jsx
    ↓
src/pages/sections/*.jsx
```

The landing page is composed from reusable sections.

---

## Directory Structure

```text
src/
├── components/
│   ├── app/
│   │   └── application-specific components
│   └── ui/
│       └── shadcn/Base UI primitives
│
├── pages/
│   ├── LandingPage.jsx
│   └── sections/
│       ├── hero.jsx
│       ├── about.jsx
│       ├── projects.jsx
│       ├── skills.jsx
│       └── ...
│
├── lib/
│   └── utilities
│
├── assets/
│   └── local assets
│
├── main.jsx
└── index.css
```

Follow the existing structure.

Do not create additional top-level directories unless there is a clear architectural reason.

---

# Path Alias

The project uses:

```text
@/ → src/
```

The alias is configured in:

* `vite.config.js`
* `jsconfig.json`

Prefer:

```jsx
import { Button } from "@/components/ui/button";
```

instead of:

```jsx
import { Button } from "../../components/ui/button";
```

---

# React Conventions

Use functional components.

Prefer simple component composition.

Example:

```jsx
function ProjectCard({ project }) {
    return (
        <article>
            ...
        </article>
    );
}
```

Avoid unnecessary abstractions.

Do not create a component merely to wrap a few lines of markup unless it provides meaningful reuse or improves readability.

---

# JSX

This project uses plain JSX.

Use:

```text
.jsx
```

for React components.

Do not convert existing components to TypeScript.

Do not introduce:

```text
.ts
.tsx
```

without explicit approval.

---

# State Management

Keep state local whenever possible.

Prefer React's built-in:

```jsx
useState
useEffect
useMemo
useCallback
```

only when actually necessary.

Do not introduce Redux, Zustand, Jotai, or another state-management library for simple portfolio interactions.

A static portfolio should remain mostly presentational.

---

# Data

Portfolio content should be separated from presentation when the data is repeated.

For example:

```jsx
const projects = [
    {
        title: "Project Name",
        description: "...",
        technologies: ["React", "Laravel"],
        github: "...",
        demo: "...",
    },
];
```

Then render through reusable components.

Avoid duplicating large blocks of project markup.

---

# Tailwind CSS

This project uses **Tailwind CSS v4**.

Tailwind configuration lives in:

```text
src/index.css
```

using:

```css
@import "shadcn/tailwind.css";
```

and:

```css
@theme inline
```

with CSS variables.

There is no:

```text
tailwind.config.js
```

Do not create one.

---

# Styling Rules

Prefer Tailwind utilities.

Example:

```jsx
<section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
```

Avoid writing custom CSS when Tailwind can express the design clearly.

Use custom CSS only when:

* Tailwind utilities are insufficient
* A global design token is required
* A complex visual effect cannot be reasonably expressed with utilities

Do not create one-off CSS classes for simple spacing, colors, or typography.

---

# Design System

`DESIGN.md` is the source of truth for visual design.

Before creating or modifying a section, check the relevant rules in `DESIGN.md`.

Important principles:

* Restrained blue accent
* Editorial whitespace
* Lightweight display typography
* Rounded pill buttons
* Rounded cards
* Minimal shadows
* Dark editorial sections
* Real project mockups
* Calm visual hierarchy
* Responsive-first design

Do not introduce:

* Excessive gradients
* Excessive glassmorphism
* Neon effects
* Excessive shadows
* Excessive animations
* Random decorative elements
* Fake statistics
* Fake testimonials
* Fake clients
* Fake professional achievements

---

# Colors

Use semantic theme variables rather than hardcoded colors.

Prefer:

```jsx
className="bg-background text-foreground"
```

over:

```jsx
className="bg-white text-black"
```

Prefer:

```jsx
className="bg-primary text-primary-foreground"
```

for primary actions.

Do not scatter raw hex values throughout JSX.

Design tokens belong in:

```text
src/index.css
```

---

# Dark Mode

Dark mode uses the `.dark` class.

Tailwind v4 is configured with:

```css
@custom-variant dark (&:is(.dark *));
```

Use semantic variables so components automatically adapt to light and dark themes.

Prefer:

```jsx
<div className="bg-background text-foreground">
```

over:

```jsx
<div className="bg-white text-black dark:bg-black dark:text-white">
```

Dark mode should not be implemented independently in every component.

Theme values should be centralized in CSS variables.

The application should support:

```text
Light
Dark
System
```

when the existing theme implementation supports it.

---

# shadcn/ui

The project uses shadcn/ui with **Base UI**, not Radix.

Components use JSX because:

```text
tsx: false
```

in `components.json`.

Add new components using:

```sh
pnpm dlx shadcn@latest add <component>
```

Example:

```sh
pnpm dlx shadcn@latest add button
```

Do not manually recreate a shadcn primitive when an appropriate component already exists.

Before creating a new UI primitive:

1. Check `src/components/ui/`.
2. Check whether shadcn already provides the component.
3. Check whether an existing primitive can be composed.
4. Only create a custom primitive if necessary.

---

# shadcn Styling

Existing shadcn components may use:

```text
cva
```

for variants.

When modifying an existing component, prefer extending its variants instead of adding large amounts of inline styling.

Example:

```jsx
<Button variant="primary">
```

is preferred over repeatedly recreating:

```jsx
<Button className="rounded-full bg-blue-500 ...">
```

when a reusable variant is appropriate.

---

# Icons

Use:

```text
lucide-react
```

for interface icons.

Do not use emoji as UI icons.

Existing static icons are also available through:

```text
public/icons.svg
```

Reuse existing icons when appropriate.

Do not add a new icon library.

---

# Components

Use three levels of component organization.

## UI Components

Location:

```text
src/components/ui/
```

These are generic reusable primitives.

Examples:

```text
Button
Card
Badge
Sheet
Dialog
```

Do not put portfolio-specific business/content logic here.

---

## App Components

Location:

```text
src/components/app/
```

These are reusable components specific to this portfolio.

Examples:

```text
Navbar
Footer
ThemeToggle
ProjectCard
SocialLinks
```

---

## Page Sections

Location:

```text
src/pages/sections/
```

These represent sections of the landing page.

Examples:

```text
Hero
About
Skills
Projects
Experience
Education
Contact
```

A section may compose app and UI components.

---

# Component Reuse

Before creating a component:

1. Search existing components.
2. Check `src/components/ui/`.
3. Check `src/components/app/`.
4. Check existing page sections.
5. Reuse or compose where appropriate.

Avoid both extremes:

### Bad

One giant `LandingPage.jsx` containing everything.

### Also bad

Hundreds of tiny components with no meaningful reuse.

Prefer meaningful boundaries.

---

# Page Sections

The portfolio should generally contain:

```text
Navbar
Hero
About
Skills
Projects
Experience
Education
Contact CTA
Footer
```

Sections may be reordered when needed for visual storytelling.

Projects should receive strong visual emphasis because they demonstrate actual development work.

---

# Hero

The hero should communicate immediately:

* Name
* Developer identity
* Current status
* Short introduction
* Primary action
* Secondary action

Preferred visual direction:

```text
Dark editorial background
+
Large lightweight heading
+
Blue primary CTA
+
Project/product UI mockup
```

Avoid filling the hero with every skill and technology.

---

# Projects

Projects are a major part of the portfolio.

A project should contain:

* Name
* Description
* Technologies
* Preview
* GitHub link
* Live demo when available

Only display information that is actually true.

Do not invent project metrics or users.

---

# Skills

Group technologies by meaningful categories.

Example:

```text
Frontend
Backend
Database
Tools
```

Avoid subjective percentage ratings.

Do not create:

```text
React 95%
Laravel 90%
```

---

# Experience

Internship experience should be presented honestly.

Focus on:

* Actual responsibilities
* Technologies used
* Things learned
* Concrete contributions

Do not exaggerate the role.

---

# Responsive Design

Use mobile-first Tailwind classes.

Example:

```jsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
```

Important breakpoints:

```text
sm → 640px
md → 768px
lg → 1024px
xl → 1280px
```

Do not design desktop-only layouts and attempt to fix mobile afterward.

Every major section must be checked at:

* Mobile
* Tablet
* Desktop

---

# Mobile Navigation

Below approximately `768px`, navigation should collapse into a mobile menu.

Use shadcn `Sheet` when appropriate.

The mobile navigation should:

* Be keyboard accessible
* Have clear close behavior
* Not block page interaction unnecessarily
* Maintain the same visual design system

---

# Accessibility

Use semantic HTML.

Prefer:

```jsx
<header>
<nav>
<main>
<section>
<article>
<footer>
```

over generic `<div>` elements when appropriate.

Buttons should be actual:

```jsx
<button>
```

Links should be actual:

```jsx
<a>
```

or the appropriate routing component.

Interactive elements must have:

* Visible focus state
* Keyboard accessibility
* Accessible labels where necessary
* Appropriate contrast

Images require meaningful `alt` text when informative.

Decorative images should use:

```jsx
alt=""
```

---

# Animation

Animation should support the content rather than dominate it.

Prefer subtle transitions:

```text
150ms - 300ms
```

Good uses:

* Button hover
* Card hover
* Navigation transitions
* Section entrance
* Small transforms

Avoid:

* Excessive parallax
* Constant movement
* Large bouncing animations
* Long entrance animations
* Animating every element

Respect:

```text
prefers-reduced-motion
```

---

# Images and Assets

Prefer local project assets when available.

Before adding an external image:

1. Check whether a local asset already exists.
2. Check whether the image is actually necessary.
3. Optimize large images.

Project screenshots are preferred over generic stock photography.

Do not use random stock photos just to fill empty space.

---

# Content Authenticity

This is a personal student portfolio.

Content must remain realistic.

Do not create:

* Fake companies
* Fake clients
* Fake testimonials
* Fake statistics
* Fake awards
* Fake job positions
* Fake project users
* Fake revenue numbers

If information is unknown, leave a clear placeholder rather than inventing it.

---

# Performance

Avoid unnecessary dependencies.

Do not introduce a library for functionality that can reasonably be implemented with existing tools.

Avoid:

* Huge image files
* Unnecessary JavaScript
* Heavy animation libraries
* Duplicate dependencies
* Unused components

Keep the landing page lightweight.

---

# SEO

The page should contain appropriate:

* `<title>`
* Meta description
* Semantic headings
* Descriptive links
* Image alt text

Use one primary `<h1>` for the page.

Maintain logical heading hierarchy:

```text
h1
 ├── h2
 │    └── h3
 ├── h2
 │    └── h3
 └── h2
```

Do not choose heading tags based solely on their visual size.

---

# Git-Friendly Changes

Keep changes focused.

Do not modify unrelated files.

Do not reformat the entire project when changing one component.

Do not overwrite existing implementations without a reason.

Before changing an existing component:

1. Understand how it is currently used.
2. Check its consumers.
3. Preserve existing behavior unless the task requires changing it.

---

# Dependency Rules

Before installing a package, ask:

1. Is it actually necessary?
2. Does the existing stack already provide the functionality?
3. Does shadcn/ui already provide the component?
4. Can the feature be implemented simply with React or Tailwind?

Do not install dependencies for trivial functionality.

Package manager must remain:

```text
pnpm
```

---

# File Naming

Follow the existing project convention.

React components use:

```text
.jsx
```

Use descriptive names.

Examples:

```text
ProjectCard.jsx
ThemeToggle.jsx
Navbar.jsx
```

For page sections, preserve the existing naming convention unless refactoring the project intentionally.

---

# Verification

After implementing a feature:

## 1. Check lint

```sh
pnpm lint
```

Remember that some existing lint errors are pre-existing.

## 2. Check production build

```sh
pnpm build
```

The build must succeed.

## 3. Check responsive layout

Verify:

```text
Mobile
Tablet
Desktop
```

## 4. Check dark mode

Verify:

```text
Light
Dark
System
```

## 5. Check accessibility

Verify:

* Keyboard navigation
* Focus states
* Button labels
* Link labels
* Image alt text
* Contrast

---

# Working With DESIGN.md

When the task involves UI, follow this order:

1. Read `AGENTS.md`.
2. Read the relevant section of `DESIGN.md`.
3. Inspect existing components.
4. Reuse existing primitives.
5. Implement the smallest appropriate change.
6. Verify responsive behavior.
7. Verify dark mode.
8. Run `pnpm lint && pnpm build`.

`DESIGN.md` controls the visual language.

`AGENTS.md` controls implementation and development behavior.

If the two documents appear to conflict:

* Preserve the existing project architecture.
* Prefer semantic design tokens.
* Avoid unnecessary rewrites.
* Ask for clarification when the conflict materially affects the implementation.

---

# Priority Rules

When implementing a request, prioritize:

1. Correct functionality
2. Existing project architecture
3. Accessibility
4. Responsive behavior
5. `DESIGN.md` visual consistency
6. Component reuse
7. Performance
8. Animation polish

Do not sacrifice maintainability for visual effects.

---

# Final Goal

The finished portfolio should feel:

```text
Minimal
+
Editorial
+
Professional
+
Personal
+
Developer-focused
```

The visual identity should primarily come from:

```text
Typography
+
Whitespace
+
Restrained Blue Accent
+
Dark Editorial Sections
+
Rounded UI
+
Real Project Mockups
```

rather than excessive visual effects.
