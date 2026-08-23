# Personal Portfolio — Design System

## Overview

This is a personal portfolio for an SMK PPLG student who is currently doing an internship and actively learning modern web development.

The visual direction is inspired by clean institutional/editorial fintech websites:

* Minimal
* Calm
* Professional
* Editorial
* Developer-oriented
* Spacious
* Modern
* Personal

The portfolio should feel like a real developer portfolio rather than a generic template.

The design uses a restrained blue accent, large editorial typography, generous whitespace, rounded components, and alternating light/dark sections.

The design should communicate:

> "A young developer who is serious about learning, building, and improving."

It should **not** communicate:

* Fake seniority
* Corporate enterprise branding
* Excessive startup aesthetics
* Generic AI-generated portfolio design
* Excessive gradients or glassmorphism

---

# Design Principles

## 1. Calm Over Flashy

The interface should feel confident without being visually aggressive.

Avoid:

* Excessive gradients
* Excessive animations
* Neon colors
* Large glowing effects
* Excessive shadows
* Too many decorative elements

Use whitespace and typography to create visual hierarchy.

---

## 2. Content First

The portfolio should prioritize:

1. Identity
2. Introduction
3. Projects
4. Skills
5. Internship / Experience
6. Education
7. Contact

Decorative elements should never compete with these areas.

---

## 3. Editorial Rhythm

The page should alternate between several visual modes:

```text
Light Editorial
↓
Dark Hero / Highlight
↓
Light Content
↓
Soft Gray Band
↓
Light Content
↓
Dark CTA
↓
Light Footer
```

This creates rhythm without requiring excessive visual decoration.

---

# Color System

The project uses a restrained blue accent.

## Brand

| Token            | Value     | Usage                                 |
| ---------------- | --------- | ------------------------------------- |
| `primary`        | `#0052ff` | Primary CTA, links, important accents |
| `primary-active` | `#003ecc` | Button pressed state                  |
| `primary-soft`   | `#e8efff` | Very subtle blue surfaces             |

Blue should be used sparingly.

Do not make the entire interface blue.

---

## Light Mode

| Token                   | Value     | Usage                      |
| ----------------------- | --------- | -------------------------- |
| `canvas`                | `#ffffff` | Main background            |
| `surface-soft`          | `#f7f7f7` | Alternating sections       |
| `surface-strong`        | `#eef0f3` | Secondary buttons, tags    |
| `surface-dark`          | `#0a0b0d` | Dark sections              |
| `surface-dark-elevated` | `#16181c` | Cards inside dark sections |
| `ink`                   | `#0a0b0d` | Headings                   |
| `body`                  | `#5b616e` | Body text                  |
| `muted`                 | `#7c828a` | Secondary text             |
| `hairline`              | `#dee1e6` | Borders                    |
| `on-primary`            | `#ffffff` | Text on blue               |

---

## Dark Mode

Dark mode should preserve the same visual hierarchy.

Do not simply invert every color.

| Token            | Value     | Usage               |
| ---------------- | --------- | ------------------- |
| `canvas`         | `#0a0b0d` | Main background     |
| `surface-soft`   | `#101216` | Alternating section |
| `surface-strong` | `#191c21` | Secondary surfaces  |
| `surface-card`   | `#16181c` | Cards               |
| `ink`            | `#ffffff` | Main headings       |
| `body`           | `#c3c7ce` | Body text           |
| `muted`          | `#8d939d` | Secondary text      |
| `hairline`       | `#292d33` | Borders             |
| `primary`        | `#4d7dff` | Blue accent         |
| `primary-active` | `#6b94ff` | Active state        |
| `on-primary`     | `#ffffff` | Text on blue        |

The dark mode should remain close to near-black rather than using pure black:

```text
Prefer:
#0a0b0d

Avoid:
#000000
```

---

# Semantic Colors

Semantic colors are not brand colors.

| Token     | Value     | Usage            |
| --------- | --------- | ---------------- |
| `success` | `#05b169` | Successful state |
| `error`   | `#cf202f` | Error state      |
| `warning` | `#f4b000` | Warning state    |

Semantic colors should primarily be used for text, icons, or status indicators.

Do not use green/red as primary button backgrounds.

---

# Typography

## Font Family

Use:

```text
Inter
```

for the primary interface.

Use:

```text
Geist Mono
```

or:

```text
JetBrains Mono
```

for technical or numerical information.

Example:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", sans-serif;
```

---

# Typography Hierarchy

| Token          | Size | Weight | Line Height | Usage              |
| -------------- | ---: | -----: | ----------: | ------------------ |
| `display-mega` | 80px |    400 |         1.0 | Main hero          |
| `display-xl`   | 64px |    400 |         1.0 | Large section      |
| `display-lg`   | 52px |    400 |         1.0 | Section heading    |
| `display-md`   | 44px |    400 |        1.09 | CTA heading        |
| `display-sm`   | 36px |    400 |         1.1 | Subsection heading |
| `title-lg`     | 32px |    400 |        1.15 | Project group      |
| `title-md`     | 18px |    600 |         1.3 | Card title         |
| `title-sm`     | 16px |    600 |        1.25 | Labels             |
| `body-lg`      | 18px |    400 |         1.6 | Hero description   |
| `body-md`      | 16px |    400 |         1.5 | Default text       |
| `body-sm`      | 14px |    400 |         1.5 | Secondary text     |
| `caption`      | 13px |    400 |         1.5 | Metadata           |
| `button`       | 15px |    600 |         1.2 | Buttons            |
| `nav-link`     | 14px |    500 |         1.4 | Navigation         |

---

# Typography Principles

## Display Weight

Large headings should normally use:

```text
font-weight: 400
```

Avoid extremely bold hero typography.

The portfolio should feel calm and editorial rather than aggressive.

---

## Letter Spacing

Large headings may use negative tracking:

```text
-0.02em
```

Body text should normally use:

```text
0
```

---

# Layout

## Container

Maximum content width:

```text
1200px
```

Tailwind:

```text
max-w-6xl
```

Center the content:

```text
mx-auto
```

Horizontal padding:

```text
px-4
sm:px-6
lg:px-8
```

---

# Spacing System

Base unit:

```text
4px
```

Recommended scale:

| Token        | Value |
| ------------ | ----: |
| `xxs`        |   4px |
| `xs`         |   8px |
| `sm`         |  12px |
| `base`       |  16px |
| `md`         |  20px |
| `lg`         |  24px |
| `xl`         |  32px |
| `xxl`        |  48px |
| `3xl`        |  64px |
| `section`    |  96px |
| `section-lg` | 128px |

Major sections should generally use:

```text
py-24
lg:py-32
```

Avoid tightly packed sections.

---

# Grid

Use a 12-column editorial grid on desktop.

Typical layouts:

```text
Hero:
6 / 6

Projects:
4 / 4 / 4

About:
5 / 7

Experience:
4 / 8

Contact:
6 / 6
```

On mobile:

```text
1 column
```

---

# Border Radius

The portfolio uses rounded geometry consistently.

| Token  |  Value | Usage                   |
| ------ | -----: | ----------------------- |
| `sm`   |    8px | Compact components      |
| `md`   |   12px | Inputs                  |
| `lg`   |   16px | Medium cards            |
| `xl`   |   24px | Project cards           |
| `pill` | 9999px | Buttons, badges         |
| `full` | 9999px | Avatar / circular icons |

Sharp corners should rarely be used.

---

# Shadows

Use shadows sparingly.

Most surfaces should have:

```text
no shadow
```

Default cards should rely on:

* Background contrast
* Borders
* Spacing

When elevation is necessary:

```text
0 4px 12px rgba(0, 0, 0, 0.04)
```

Avoid multiple shadow levels.

---

# Navigation

## Desktop

Navigation should be minimal.

Suggested structure:

```text
[Logo / Name]

About
Skills
Projects
Experience

[Contact]
```

Height:

```text
64px
```

Use a white/light canvas in light mode.

Use near-black canvas in dark mode.

The navigation should remain visually quiet.

---

## Mobile

Below approximately:

```text
768px
```

collapse navigation into a mobile menu.

Use shadcn/ui `Sheet`.

The primary contact CTA may remain visible if space allows.

---

# Hero Section

The hero is the primary visual statement.

Recommended structure:

```text
Small label

Hi, I'm [Name]

PPLG Student & Web Developer

I build web applications while learning
modern technologies and gaining real-world
experience through internship.

[View Projects] [Contact Me]
```

---

## Hero Visual

Use a dark editorial hero or a light hero depending on the page composition.

Preferred portfolio hero:

```text
Dark background
+
Large white heading
+
Blue CTA
+
Floating project/product UI mockup
```

The mockup should represent the developer's work.

Examples:

* Dashboard
* POS application
* Library system
* Task management application
* Code/editor interface

Avoid random stock imagery.

---

# Hero Mockup

The signature visual component is:

```text
product-ui-card
```

Use:

```text
background: #16181c
border-radius: 24px
padding: 32px
```

Possible structure:

```text
┌───────────────────────────────┐
│ Project Dashboard             │
│                               │
│ ┌────────┐ ┌────────┐         │
│ │ Stats  │ │ Stats  │         │
│ └────────┘ └────────┘         │
│                               │
│ Recent Activity               │
│ ─────────────────────         │
└───────────────────────────────┘
```

On desktop, multiple cards may overlap slightly.

On mobile, reduce the stack to a single card.

---

# About Section

The About section should communicate the person behind the code.

Include:

* Current education
* PPLG background
* Internship
* Development interests
* Current learning direction

Avoid writing a long autobiography.

Use a strong heading and concise paragraph.

---

# Skills Section

Group technologies by category.

Example:

```text
Frontend
React
TypeScript
Tailwind CSS
shadcn/ui

Backend
Laravel
PHP
MySQL

Tools
Git
GitHub
Docker
VS Code
```

Do not use percentage skill bars.

Avoid:

```text
React 95%
Laravel 90%
```

because these numbers are subjective and unnecessary.

---

# Project Section

Projects should be one of the most prominent sections.

Each project card should include:

* Project image / UI preview
* Project name
* Description
* Technologies
* GitHub link
* Live demo when available

Example:

```text
┌─────────────────────────────┐
│                             │
│      Project Preview        │
│                             │
├─────────────────────────────┤
│ Library Management System   │
│                             │
│ Web application for...      │
│                             │
│ Laravel · React · MySQL     │
│                             │
│ [Live Demo] [GitHub]        │
└─────────────────────────────┘
```

Use:

```text
rounded-3xl
```

for project cards.

---

# Experience / Internship

The internship section should emphasize real experience.

Suggested structure:

```text
Internship
[Company]

Role
Period

Responsibilities
• ...
• ...
• ...

Technologies
Laravel · React · MySQL · Git
```

Focus on actual work performed.

Do not invent metrics or achievements.

---

# Education

Keep education simple.

Example:

```text
SMK [School Name]

Software and Game Development (PPLG)

[Year] — Present
```

---

# Contact Section

Use a dark CTA band near the bottom of the page.

Example:

```text
Let's build something.

I'm always interested in learning,
building, and working on interesting projects.

[GitHub] [Email]
```

Use the same dark canvas as the hero.

---

# Buttons

## Primary

Blue pill:

```text
background: primary
color: white
border-radius: 9999px
```

Recommended:

```text
height: 44px
padding: 12px 20px
```

---

## Hero CTA

For major hero actions:

```text
height: 56px
padding: 16px 32px
border-radius: 9999px
```

---

## Secondary

Light mode:

```text
background: surface-strong
color: ink
```

Dark mode:

```text
background: surface-card
color: ink
```

---

## Text Link

Use the primary blue:

```text
color: primary
```

Do not underline every navigation link.

Underline may appear on hover for inline content links.

---

# Badges

Use small pill badges.

Example:

```text
React
Laravel
TypeScript
```

Recommended:

```text
rounded-full
background: surface-strong
padding: 6px 12px
font-size: 13px
```

Avoid displaying dozens of badges.

---

# Cards

Cards should use:

```text
rounded-3xl
```

Recommended:

```text
border: 1px solid hairline
background: canvas
padding: 32px
```

Cards should not all have shadows.

Use background contrast and borders instead.

---

# Dark Sections

Dark sections are important for visual rhythm.

Recommended:

```text
Hero
↓
Light Projects
↓
Soft Gray Skills
↓
Light Experience
↓
Dark Contact
```

Dark sections use:

```text
background: #0a0b0d
color: #ffffff
```

Blue remains the primary accent.

Do not introduce another accent color just because the section is dark.

---

# Animation

Animations should be subtle.

Good:

```text
opacity
transform
scale
color
background
```

Recommended duration:

```text
150ms - 300ms
```

Avoid:

* Excessive parallax
* Large rotations
* Constant movement
* Bouncing elements
* Long loading animations
* Animations on every element

Respect:

```text
prefers-reduced-motion
```

---

# Responsive Design

## Mobile

Below:

```text
640px
```

Use:

* Single column layouts
* 40px hero heading
* Compact navigation
* Smaller project cards
* Reduced section spacing
* Single product mockup

---

## Tablet

Between:

```text
640px - 1024px
```

Use:

* 2-column layouts where appropriate
* 52–64px display headings
* More generous spacing

---

## Desktop

Above:

```text
1024px
```

Use:

* 12-column grid
* 64–80px hero typography
* 3-column project grids
* Full editorial spacing
* Layered hero mockups

---

# Accessibility

The portfolio must:

* Use semantic HTML
* Have accessible navigation
* Have visible focus states
* Have keyboard-accessible controls
* Use meaningful alt text
* Maintain sufficient contrast
* Provide labels for form controls
* Support reduced motion

Interactive elements should have a minimum effective touch target of approximately:

```text
44px
```

---

# Dark Mode Implementation

Dark mode should use Tailwind's class-based dark mode.

The application should support:

```text
Light
Dark
System
```

where possible.

Recommended implementation:

```text
ThemeProvider
+
dark class
+
CSS variables
```

Do not hardcode dark-mode colors throughout components.

Use semantic design tokens instead.

Example:

```tsx
<div className="bg-background text-foreground">
```

instead of:

```tsx
<div className="bg-white text-black dark:bg-black dark:text-white">
```

Prefer shadcn/ui semantic variables.

---

# shadcn/ui

Use shadcn/ui as the component foundation.

Recommended components:

```text
Button
Badge
Card
Separator
Sheet
Dialog
Tooltip
NavigationMenu
```

Do not introduce another component library unless explicitly required.

Customize shadcn components through the project's theme.

---

# Do

* Use generous whitespace.
* Use blue sparingly.
* Use large lightweight headings.
* Use rounded pill buttons.
* Use rounded cards.
* Use dark editorial sections.
* Show real projects.
* Use real internship experience.
* Keep content authentic.
* Use subtle animations.
* Maintain responsive layouts.
* Support dark mode.

---

# Don't

* Don't clone Coinbase's website.
* Don't use Coinbase branding or logo.
* Don't use Coinbase-specific assets.
* Don't use excessive blue.
* Don't use excessive gradients.
* Don't use excessive glassmorphism.
* Don't use huge bold typography everywhere.
* Don't use fake testimonials.
* Don't use fake statistics.
* Don't use fake clients.
* Don't use fake work experience.
* Don't use skill percentage bars.
* Don't use excessive animations.
* Don't use random decorative illustrations.
* Don't create unnecessary UI components.

---

# Design Tokens

When implementing the UI, prefer semantic tokens:

```text
bg-background
bg-card
bg-muted
bg-primary

text-foreground
text-muted-foreground
text-primary

border-border
```

Avoid repeatedly writing raw hex values.

The design system should be centralized in:

```text
src/index.css
```

or the project's existing global stylesheet.

---

# Implementation Priority

When building the portfolio, implement in this order:

1. Global theme
2. Typography
3. Navigation
4. Hero
5. Projects
6. Skills
7. Experience
8. Education
9. Contact CTA
10. Footer
11. Responsive behavior
12. Dark mode refinement
13. Animation refinement

Do not polish animations before the layout and content hierarchy are correct.

---

# Final Design Goal

The final portfolio should feel:

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

The design should look intentional even when animations are disabled.

The strongest visual identity should come from:

```text
Typography
+
Whitespace
+
Blue accent
+
Dark editorial sections
+
Rounded UI
+
Real project mockups
```

rather than decorative effects.
