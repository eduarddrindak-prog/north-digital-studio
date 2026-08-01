# 1. Current Project Overview

## Project Name

North Digital Studio

---

## Repository Type

Single frontend application built with React and Vite.

The repository currently contains only the public website of North Digital Studio.

There are no backend services, APIs, dashboards or separate applications inside this repository.

---

## Current Development Stage

The project is currently in the pre-launch stage.

The website is actively being developed before receiving its first real clients.

At the current moment:

- Home page is implemented.
- Services page is implemented.
- Shared UI system is established.
- Design system is established.
- Reusable component architecture is established.

The project is now transitioning from building the foundation to completing the remaining public pages.

---

## Production Status

Current status:

- Not publicly launched.
- No real client projects yet.
- No production portfolio yet.
- No case studies yet.
- No testimonials yet.

These features are expected to be added only after working with real clients.

Placeholder content may temporarily exist until replaced with real business content.

---

## Current Priorities

Current development priorities are:

1. Finish all public website pages.
2. Keep the design system consistent.
3. Reuse existing components whenever possible.
4. Avoid unnecessary architectural changes.
5. Prepare the project for deployment.
6. Launch the website.
7. Acquire the first client.

Everything outside these priorities should generally be considered lower priority.

---

## Repository Purpose

This repository exists only for the North Digital Studio website.

It should remain focused on:

- public pages;
- reusable UI;
- shared components;
- animations;
- forms;
- assets;
- styling.

Business management tools, dashboards, CMS systems or unrelated projects should not be added unless the project direction changes in the future.

---

# 2. Repository Structure

The repository follows a feature-oriented structure.

Instead of grouping files only by type, the project groups most code by responsibility.

The overall structure is intentionally simple to keep navigation predictable.

---

## src/

Contains all application source code.

Everything related to the website should be located inside this directory.

---

## components/

Contains reusable components shared across multiple pages.

This directory is divided into two groups.

### ui/

Contains primitive reusable UI components.

Current examples include:

- Button
- SectionContainer
- Input
- Textarea
- Label

These components should remain:

- generic;
- reusable;
- independent from business logic;
- independent from specific pages.

Whenever a new section requires a button, input or layout primitive, these components should be reused instead of creating new implementations.

---

### common/

Contains larger reusable application components.

Examples include:

- Header
- Footer
- ContactForm
- Reveal

Unlike ui components, these components may contain application logic or combine multiple UI primitives.

---

## pages/

Contains all website pages.

Each page owns its own internal sections.

Current page structure follows this pattern:

pages/
    Home/
        sections/

    Services/
        sections/

Every section is implemented as an independent component.

This keeps large pages organised while preventing single files from becoming excessively large.

Whenever possible:

- each section should have its own folder;
- page-specific components should stay inside the page;
- reusable components should not be duplicated inside pages.

---

## styles/

Contains global styling.

Currently includes:

- global styles;
- Tailwind imports;
- tokens.css.

The design system is defined here.

---

## lib/

Contains shared utilities.

This includes helper files that are reused across multiple parts of the project.

Current examples include:

- animations
- motion presets

Whenever shared logic becomes reusable across multiple pages, it should generally be placed inside lib instead of individual pages.

---

## assets/

Contains static project assets.

Examples include:

- images;
- icons;
- logos;
- illustrations.

Assets should remain organised by type whenever possible.

---

## Structure Rules

The following rules should be respected when expanding the repository:

- Keep reusable code inside components/.
- Keep page-specific code inside pages/.
- Avoid placing reusable logic inside page folders.
- Avoid creating duplicate UI components.
- Avoid creating deeply nested folder structures without clear benefit.
- Prefer extending existing folders over creating new top-level directories.

---

# 3. Technology Stack

The project intentionally uses a small technology stack.

New dependencies should only be added when they solve a real problem that cannot reasonably be solved with the existing stack.

---

## React

Purpose:

Main UI library.

Current usage:

- page rendering;
- reusable components;
- routing;
- application structure.

React forms the foundation of the entire project.

---

## TypeScript

Purpose:

Static type checking.

Current usage:

- component props;
- shared types;
- safer refactoring;
- improved editor support.

TypeScript is used across the entire project.

---

## Vite

Purpose:

Development server and production build tool.

Current usage:

- local development;
- production builds;
- asset bundling.

---

## Tailwind CSS

Purpose:

Primary styling solution.

Current usage:

- layouts;
- spacing;
- typography;
- responsive design;
- utilities.

Global design decisions should still be defined through tokens.css whenever possible instead of hardcoding values repeatedly.

---

## Framer Motion

Purpose:

Animations.

Current usage:

- section reveals;
- page animations;
- interactive elements.

Animations should preferably reuse existing presets before introducing new animation patterns.

---

## React Router

Purpose:

Client-side routing.

Current usage:

- navigation between pages;
- route management.

---

## React Hook Form

Purpose:

Form state management.

Current usage:

- ContactForm.

Future forms should generally reuse the same approach instead of introducing another form library.

---

## Zod

Purpose:

Form validation.

Current usage:

- ContactForm validation.

Validation schemas should remain separated from presentation whenever practical.

---

## Resend

Purpose:

Email delivery.

Current usage:

- contact form submission.

No other email solution currently exists inside the project.

---

## General Stack Rules

The current stack should remain lightweight.

Before adding a new dependency, consider whether the same result can be achieved using:

- existing project utilities;
- existing libraries already installed;
- native React functionality.

Avoid introducing additional dependencies for small convenience features.

# 4. Project Architecture

The project follows a layered architecture where every level has a clearly defined responsibility.

Instead of building pages directly from individual HTML elements, the project is organised into reusable layers.

Current architecture:

Design System
↓
Reusable UI Components
↓
Common Components
↓
Page Sections
↓
Pages

Every layer depends only on the layers below it.

---

## Design System

The design system is the foundation of the project.

It defines the visual language used across every page.

The design system includes:

- color tokens;
- spacing tokens;
- typography;
- border radius;
- layout values;
- transitions;
- animation rules.

The design system is primarily defined inside `tokens.css`.

Every reusable component should use these values instead of introducing custom ones whenever possible.

---

## Reusable UI Components

The second layer consists of primitive reusable UI components.

These components should:

- solve one specific UI problem;
- contain no page-specific logic;
- be reusable across multiple pages.

Examples include:

- Button
- SectionContainer
- Input
- Label
- Textarea

These components should be considered the first choice whenever new UI is required.

---

## Common Components

The third layer contains larger reusable application components.

Unlike UI primitives, these components may combine multiple UI components together.

Examples include:

- Header
- Footer
- ContactForm
- Reveal

These components provide reusable application behaviour rather than simple visual elements.

---

## Sections

Every page is built from independent sections.

Each section has one clearly defined responsibility.

Examples include:

- Hero
- Services
- FAQ
- Portfolio
- Process

Sections are reusable only when it makes sense.

Most sections remain page-specific because they represent different content and layouts.

---

## Pages

Pages combine multiple sections into complete user flows.

Each page owns its own sections.

Page folders should remain independent from one another.

Avoid importing sections directly between pages unless they are intentionally designed to be shared.

---

## Architecture Principles

The current architecture follows these principles:

- reuse primitives before creating new ones;
- keep page-specific code inside page folders;
- keep reusable code outside pages;
- separate layout from business logic;
- avoid unnecessary abstractions;
- keep responsibilities clear.

---

# 5. Design System

The project uses a centralized design system defined primarily through `tokens.css` and shared UI components.

The purpose of the design system is to keep the website visually consistent while reducing duplicated styling decisions.

---

## Design Tokens

The project defines shared design values inside `src/styles/tokens.css`.

Instead of repeatedly hardcoding colors, spacing or transitions, components should reuse the existing tokens.

The current token categories include:

- Colors
- Typography
- Spacing
- Border Radius
- Layout
- Transitions

Whenever possible, new styling should extend the existing token system instead of introducing new custom values.

---

## Color System

Colors are defined by purpose rather than by visual appearance.

Instead of using color names, the project uses semantic roles such as:

- background
- surface
- primary text
- secondary text
- muted text
- accent
- border

This allows colors to remain consistent across the project and makes future adjustments significantly easier.

---

## Typography

Typography follows a consistent hierarchy across all pages.

Headings, paragraphs, labels and small text should remain visually consistent.

New typography styles should only be introduced when an existing style cannot reasonably be reused.

---

## Spacing

Vertical rhythm is controlled through shared spacing values.

Large sections use shared spacing rather than manually defining different values for every page.

Components should align with the existing spacing system whenever possible.

Avoid arbitrary padding or margin values unless a specific layout requires them.

---

## Border Radius

Border radius values follow a limited scale.

Only the existing radius values should normally be used.

Avoid introducing new custom radius values unless absolutely necessary.

---

## Layout

Page width is controlled through shared layout values.

Most page content should be wrapped inside `SectionContainer`.

This ensures:

- consistent maximum width;
- consistent horizontal padding;
- consistent alignment.

Avoid manually recreating container layouts.

---

## Motion

Animations follow a shared motion system.

Instead of defining animation behaviour separately inside every component, the project provides reusable motion presets.

Whenever possible:

- reuse existing animations;
- reuse Reveal;
- reuse motion variants.

Avoid creating completely new animation styles for individual sections.

---

## Design System Rules

When creating new UI:

- reuse existing tokens;
- reuse existing spacing;
- reuse existing typography;
- reuse existing animation presets;
- reuse existing layout primitives.

Consistency has higher priority than introducing new visual styles.

---

# 6. Reusable UI Components

Reusable UI components are located inside `src/components/ui`.

These components represent the lowest reusable visual layer of the project.

They should remain independent from business logic and specific pages.

---

## Button

Purpose:

Provides a single reusable button component used throughout the project.

Current functionality includes:

- multiple variants;
- multiple sizes;
- configurable border radius;
- optional arrow icon;
- optional link behaviour.

New buttons should reuse this component instead of creating custom implementations.

---

## SectionContainer

Purpose:

Provides the standard page container used across the project.

Responsibilities:

- maximum content width;
- horizontal spacing;
- centered layout.

Nearly every page section should use this component.

Avoid manually recreating page containers.

---

## Input

Purpose:

Reusable text input.

Used inside forms.

Should remain generic and independent from specific form implementations.

---

## Label

Purpose:

Reusable form label.

Used together with Input and Textarea.

Should remain visually consistent across every form.

---

## Textarea

Purpose:

Reusable multiline input.

Designed to match the Input component.

Should always remain visually consistent with the rest of the form system.

---

## Component Reuse Policy

Before creating a new UI component, always check whether an existing component can be reused or extended.

In most situations:

- extend Button instead of creating another button;
- reuse SectionContainer instead of creating another layout wrapper;
- reuse Input and Textarea instead of building new form controls.

New UI primitives should only be introduced when they solve a completely new problem that cannot reasonably be handled by the existing component library.

---

## Responsibilities

Reusable UI components should:

- remain small;
- solve one problem;
- avoid business logic;
- avoid page-specific behaviour;
- remain reusable across the entire project.

If a component becomes tightly coupled to one page, it should generally be moved into that page instead of remaining inside the shared UI directory.

# 7. Common Components

Common components are located inside `src/components/common`.

Unlike primitive UI components, common components combine multiple UI elements together and provide reusable application-level functionality.

These components are intended to be shared across multiple pages while remaining independent from page-specific content.

---

## Header

Purpose:

Provides the global website navigation.

Current responsibilities:

- desktop navigation;
- mobile navigation;
- active route highlighting;
- sticky positioning;
- responsive navigation layout.

The Header exists only once in the application.

All public pages use the same Header.

Page-specific navigation should not be implemented unless absolutely necessary.

---

## Footer

Purpose:

Provides the global footer displayed across the website.

Current responsibilities:

- navigation links;
- company information;
- branding;
- copyright information.

The Footer should remain consistent across all pages.

Avoid creating page-specific footer variations.

---

## ContactForm

Purpose:

Reusable contact form component.

Current implementation includes:

- React Hook Form;
- Zod validation;
- reusable Input components;
- reusable Label components;
- reusable Textarea component;
- email submission.

The ContactForm represents the standard form implementation used by the project.

Future forms should reuse the same architecture whenever possible.

Avoid introducing different validation systems or different form libraries.

---

## Reveal

Purpose:

Reusable animation wrapper.

Reveal hides Framer Motion implementation details behind a simple reusable component.

Instead of configuring animation properties inside every section, components can simply be wrapped inside Reveal.

Current responsibilities:

- reveal animations;
- viewport detection;
- shared animation behavior.

Reveal should remain the preferred solution for section entrance animations.

---

## Common Component Rules

Common components should:

- combine multiple UI primitives;
- remain reusable across pages;
- avoid page-specific content;
- encapsulate common functionality.

If a component is only used by one page and is unlikely to be reused, it should generally remain inside that page instead of being moved into `components/common`.

---

# 8. Shared Utilities

Shared utilities are located inside `src/lib`.

This directory contains reusable logic that is independent from page content or visual components.

Utilities should remain lightweight and focused on solving one reusable problem.

---

## animations.ts

Purpose:

Provides predefined animation configurations.

Current usage:

- fade animations;
- reusable motion properties;
- shared animation presets.

Instead of manually defining animation properties inside every section, components should reuse the existing presets whenever possible.

---

## motion.ts

Purpose:

Provides reusable Framer Motion variants.

Current usage:

- shared motion variants;
- consistent animation behavior;
- reusable transitions.

The project currently separates animation presets from reusable motion variants.

This allows sections to reuse animation logic while keeping implementation consistent.

---

## Utility Guidelines

Files inside `src/lib` should contain:

- reusable helpers;
- animation presets;
- shared logic;
- constants;
- utility functions.

Files inside `src/lib` should not contain:

- page-specific code;
- React components;
- business logic tied to one page.

Whenever logic becomes reusable across multiple areas of the project, it should generally be moved into this directory.

---

# 9. Current Pages

Pages are located inside `src/pages`.

Each page is responsible for one complete user flow.

Instead of building pages as one large component, every page is divided into independent sections.

Each section is stored inside its own directory under the corresponding page.

Current pages are in different stages of completion.

---

## Home

Status:

Completed.

The Home page currently represents the primary landing page of the project.

Current section order:

- Hero
- Problem
- Solution
- Process
- Services
- Portfolio
- FAQ
- Final CTA

Each section is responsible for one specific step in the visitor journey.

The Home page is considered production-ready from a structural perspective, although its content may continue evolving over time.

---

## Services

Status:

Completed.

The Services page provides a detailed explanation of the website development service offered by North Digital Studio.

Current section order:

- Hero
- Website Solutions
- Find Solution
- Development Process
- FAQ Preview
- Final CTA

Unlike the Home page, Services focuses on explaining the service itself rather than introducing the company.

Its structure intentionally differs from Home to avoid repeating the same user experience.

---

## Portfolio

Status:

Planned.

The route exists as part of the project roadmap but the page has not yet been implemented.

The page is expected to present completed client projects once real work becomes available.

Until real projects exist, placeholder content may be used if necessary.

---

## FAQ

Status:

Planned.

The project currently contains FAQ sections inside existing pages.

A dedicated FAQ page has not yet been developed.

---

## Contact

Status:

Planned.

The Contact page has not yet been implemented.

The reusable ContactForm component already exists and is expected to become the foundation of this page.

---

## Page Architecture

Every page follows the same high-level structure.

Page
↓
Sections
↓
Shared Components
↓
Reusable UI
↓
Design Tokens

This structure allows pages to remain independent while sharing the same design system and reusable components.

---

## Page Development Rules

When creating a new page:

- create a dedicated page directory inside `src/pages`;
- keep page-specific sections inside that page;
- reuse shared UI components whenever possible;
- reuse common components whenever possible;
- avoid copying sections from other pages unless intentional;
- follow the existing project structure.

The goal is to keep every page self-contained while preserving consistency across the entire project.

# 10. Section Architecture

The website is built around independent page sections.

A section is the highest-level reusable building block inside a page.

Unlike UI components, sections are responsible for complete parts of the user journey rather than individual interface elements.

Each section should have a single responsibility and should not attempt to solve multiple unrelated problems.

---

## General Structure

Every page follows the same structural pattern.

Page
↓
Sections
↓
Reusable Components
↓
UI Components
↓
Design Tokens

This hierarchy should remain consistent across the entire project.

---

## Section Directory Structure

Every section should have its own directory inside the corresponding page.

Typical structure:

pages/
    Home/
        sections/
            Hero/
            Problem/
            Solution/
            Process/
            Services/
            Portfolio/
            FAQ/
            FinalCTA/

Keeping sections separated prevents very large page files and makes individual sections easier to maintain.

---

## Section Responsibilities

Each section should answer one specific question for the visitor.

Examples:

Hero
- Introduces the page.
- Explains the primary message.
- Creates the first impression.

Problem
- Explains the problem being solved.

Solution
- Explains the offered solution.

Process
- Explains how work is performed.

Portfolio
- Demonstrates previous work.

FAQ
- Answers common questions.

CTA
- Encourages the visitor to take action.

Sections should not duplicate the responsibilities of other sections.

---

## Section Independence

Each section should remain as independent as possible.

A section should:

- contain its own layout;
- contain its own page-specific components;
- import reusable UI components when necessary;
- avoid depending on neighboring sections.

Whenever possible, sections should be removable without breaking the remaining page.

---

## Shared Section Rules

All sections should:

- use SectionContainer for layout;
- use shared typography;
- use design tokens;
- use reusable Button components;
- use Reveal or shared animation presets;
- follow the spacing system.

Avoid introducing custom solutions that duplicate existing project standards.

---

## Home Structure

Current Home order:

Hero
↓

Problem
↓

Solution
↓

Process
↓

Services
↓

Portfolio
↓

FAQ
↓

Final CTA

This order should generally remain unchanged unless a strong UX reason exists.

Each section represents one logical step in the visitor journey.

---

## Services Structure

Current Services order:

Hero
↓

Website Solutions
↓

Find Solution
↓

Development Process
↓

FAQ Preview
↓

Final CTA

The Services page intentionally uses a different sequence than Home.

Its purpose is to explain the website development service rather than introducing the studio.

Future changes should preserve this distinction.

---

## Creating New Sections

Before creating a new section, consider:

- Can the existing page structure solve the problem?
- Does the new section provide unique value?
- Does it duplicate another section?
- Can existing reusable components be reused?

New sections should only be introduced when they improve the page rather than increasing complexity.

---

# 11. Routing

The project currently uses React Router for client-side navigation.

All public pages are routed through the main React application.

Routing should remain simple and predictable.

---

## Current Routes

Current public routes include:

- Home
- Services

Additional routes are planned but not yet implemented.

Planned routes include:

- Portfolio
- FAQ
- Contact

Additional informational pages may be added later if required.

---

## Routing Philosophy

Each route should represent a complete page.

Routes should not be created for small UI variations.

Whenever possible:

- one route = one page;
- one page = one responsibility.

---

## Navigation

Navigation is centralized inside the shared Header component.

The Header is responsible for:

- desktop navigation;
- mobile navigation;
- active page indication.

Individual pages should not implement their own navigation systems.

---

## Route Organization

Every page should have:

- its own directory;
- its own sections;
- its own page entry component.

Avoid mixing sections from multiple pages inside the same directory.

---

## Future Routes

Future routes should follow the same architecture as existing pages.

Each new route should:

- receive its own page directory;
- keep sections inside that directory;
- reuse shared components;
- reuse the existing design system.

---

# 12. Assets

Static assets are stored separately from application logic.

Assets should remain organised and easy to locate.

---

## Asset Types

The project currently stores assets such as:

- logo;
- icons;
- illustrations;
- images;
- visual graphics.

Each asset should have a clear purpose.

Unused assets should be removed whenever possible.

---

## Asset Organization

Assets should remain grouped by type rather than by page.

Examples:

assets/

images/

icons/

logos/

illustrations/

Keeping assets organised prevents duplication and simplifies maintenance.

---

## Image Usage

Whenever possible:

- reuse existing assets;
- optimise image sizes;
- avoid duplicate copies of the same asset.

Large image files should only be used when necessary.

---

## Icons

Icons should remain visually consistent across the project.

Avoid mixing different icon styles.

If a new icon set is introduced, it should match the existing visual language.

---

## Logo

The North Digital Studio logo represents the brand identity.

The logo should remain visually consistent across all pages.

Different logo variations should only exist when required by layout or background contrast.

---

## Asset Guidelines

When adding new assets:

- use descriptive filenames;
- avoid duplicate files;
- optimise file size;
- place files inside the appropriate asset category.

Do not store page-specific assets inside component directories unless there is a strong reason.

---

## Reuse Policy

Before importing a new image or icon, always verify whether a similar asset already exists.

Reusing existing assets helps maintain consistency while reducing repository size.

Whenever possible, prefer extending the existing visual language instead of introducing completely new styles.

# 13. Current Features

This section describes the functionality that currently exists inside the project.

Only implemented features are documented here.

Future functionality should be documented only after implementation.

---

## Responsive Layout

The website is fully responsive.

Current responsive behavior includes:

- mobile layout;
- tablet layout;
- desktop layout;
- responsive navigation;
- responsive grids;
- responsive typography;
- responsive spacing.

Responsive behavior is implemented directly inside components using Tailwind responsive utilities.

New sections should follow the same responsive approach.

---

## Shared Design System

The project already includes a centralized design system.

Current implementation includes:

- shared color tokens;
- shared spacing system;
- shared typography hierarchy;
- shared border radius scale;
- shared transition timing;
- shared container widths.

Most visual values are defined inside `tokens.css`.

The design system should always be extended before introducing new design values.

---

## Reusable UI Library

The project already contains a reusable UI layer.

Current reusable components include:

- Button;
- SectionContainer;
- Input;
- Label;
- Textarea.

These components should be reused whenever possible instead of creating new implementations.

---

## Shared Layout

All implemented pages follow the same layout strategy.

Current shared layout includes:

- global Header;
- global Footer;
- SectionContainer;
- consistent section spacing;
- consistent content width.

This creates a predictable page structure across the entire website.

---

## Animation System

Animations are already standardized.

Current animation features include:

- Reveal component;
- reusable motion variants;
- shared animation presets;
- consistent transition timing.

Animations should follow the existing system instead of introducing new animation styles.

---

## Form System

The project currently contains one reusable form implementation.

Current features include:

- React Hook Form;
- Zod validation;
- reusable inputs;
- reusable labels;
- reusable textarea;
- email submission.

Future forms should build on the existing architecture.

---

## Routing

Client-side routing is implemented using React Router.

Each public page has its own route and page directory.

Future pages should follow the existing routing structure.

---

## Build System

The project currently supports:

- local development;
- production builds;
- static asset bundling;
- TypeScript compilation.

The build process is handled by Vite.

---

# 14. Current Development Rules

This section documents the development rules currently used throughout the repository.

These rules describe existing project conventions rather than future ideas.

---

## Before Creating Anything

Before creating any new file, component or utility, always verify whether a similar implementation already exists.

Check:

- ui/
- common/
- lib/
- current page sections

Reuse existing implementations whenever possible.

---

## Reuse Before Creating

The project always prefers extending existing components instead of creating duplicates.

Examples:

Instead of:

- creating another Button;
- creating another Input;
- creating another container;

extend the existing implementation whenever practical.

---

## Keep Responsibilities Clear

Every file should have one primary responsibility.

Examples:

UI Components

↓

Visual primitives.

Common Components

↓

Reusable application blocks.

Sections

↓

Page content.

Pages

↓

Section composition.

Avoid mixing these responsibilities.

---

## Keep Pages Independent

Each page owns its own sections.

Do not move page-specific components into shared directories unless they become genuinely reusable.

Likewise, do not copy shared components into page folders.

---

## Keep Design System Consistent

Whenever new UI is created:

- reuse tokens;
- reuse typography;
- reuse spacing;
- reuse Button;
- reuse SectionContainer;
- reuse Reveal.

Avoid introducing new design patterns unless the existing system cannot reasonably support them.

---

## Prefer Small Iterations

The repository is developed through small incremental improvements.

Large rewrites should generally be avoided.

Smaller changes are easier to review, test and maintain.

---

## Avoid Premature Abstractions

Do not extract components simply because similar code exists.

Shared components should only be created after reuse becomes clear.

Avoid creating abstractions that are used only once.

---

## Folder Organization

Keep the current folder hierarchy consistent.

Avoid creating new top-level directories unless they provide a clear structural benefit.

The existing project structure should remain predictable.

---

# 15. Current Roadmap

This section documents the current expected development order.

It reflects the current state of the project and should be updated as milestones are completed.

---

## Phase 1 — Foundation

Status:
Completed.

Completed work includes:

- project setup;
- design system;
- reusable UI;
- shared components;
- routing;
- animation system.

The technical foundation of the project is considered complete.

---

## Phase 2 — Public Pages

Status:
In Progress.

Current state:

Completed:

- Home
- Services

Planned:

- Portfolio
- FAQ
- Contact

The primary focus is finishing the remaining public-facing pages.

---

## Phase 3 — Content Completion

Status:
Not Started.

Expected work includes:

- replacing placeholder content;
- improving copywriting;
- preparing portfolio content;
- preparing business information.

---

## Phase 4 — Deployment

Status:
Not Started.

Expected work includes:

- production deployment;
- final testing;
- domain configuration;
- production verification.

---

## Phase 5 — First Clients

Status:
Not Started.

Expected work includes:

- receiving the first client;
- publishing real projects;
- replacing placeholders with real work;
- collecting testimonials when available.

---

## Roadmap Philosophy

The roadmap should remain sequential.

Current work should be completed before moving to the next phase whenever possible.

Large unfinished branches of work should be avoided.

---

# 16. Current TODO

This section lists the highest-priority tasks remaining in the project.

Only active development tasks should be listed here.

Completed work should be removed.

---

## High Priority

Current high-priority tasks include:

- complete Portfolio page;
- complete FAQ page;
- complete Contact page;
- review responsive layouts across all pages;
- perform final visual consistency review;
- verify production build.

These tasks directly affect the public launch of the website.

---

## Medium Priority

Examples of medium-priority work include:

- improve reusable components where necessary;
- expand project assets;
- improve content quality;
- review accessibility;
- improve animations where appropriate.

These improvements are valuable but are not blockers for launch.

---

## Low Priority

Examples include:

- internal code cleanup;
- additional abstractions;
- minor refactoring;
- optional visual refinements.

These tasks should generally only be addressed after the website is publicly launched.

---

## Updating This Section

The TODO list should always represent the current state of development.

Whenever a task is completed:

- remove it from the list;
- update the corresponding project section if necessary;
- move the project to the next roadmap milestone when appropriate.

This section should remain short, practical and focused only on active development work.