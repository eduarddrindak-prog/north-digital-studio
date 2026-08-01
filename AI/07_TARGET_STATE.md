# 1. Purpose

This document describes the final intended state of the North Digital Studio website.

Unlike PROJECT_STATE, which documents the current implementation, this document defines what the project should look like once development is considered complete.

It represents the target that every future development task should move towards.

The purpose of this document is to prevent unnecessary feature expansion, endless redesigns and changing project goals over time.

Once the website reaches the state described here, North Digital Studio should transition from active development into maintenance.

Future work should primarily consist of:

- publishing real client projects;
- updating business information;
- improving copywriting;
- fixing bugs;
- small UI improvements;
- maintaining compatibility;
- occasionally refining existing sections.

The website is not expected to continuously grow with new functionality.

Instead, it should become a stable business website capable of supporting the company for many years.

Whenever a future AI assistant is unsure whether a new feature should be implemented, this document should be used as the primary reference.

If the proposed feature moves the website closer to the target described here, it is likely appropriate.

If it introduces additional complexity without helping achieve the target state, it should probably not be implemented.

---

# 2. Final Sitemap

Once North Digital Studio reaches its intended final version, the public website should contain only a small number of carefully designed pages.

Each page has a clear purpose.

Every page should contribute directly to attracting, informing or converting potential clients.

The final sitemap should remain intentionally small.

---

## Home

Purpose:

Introduce North Digital Studio.

Build trust.

Explain what the studio does.

Guide visitors toward contacting the studio or exploring the available services.

The Home page should remain the primary landing page for first-time visitors.

---

## Services

Purpose:

Explain every website solution offered by North Digital Studio.

Help visitors understand which service best matches their business.

Reduce uncertainty before contacting the studio.

This page should answer most practical questions related to the offered services.

---

## Portfolio

Purpose:

Present completed client work.

Demonstrate design quality.

Demonstrate technical quality.

Increase credibility using real projects instead of marketing claims.

Every project displayed on this page should represent actual completed work.

Placeholder projects should eventually disappear completely.

---

## FAQ

Purpose:

Answer common questions that would otherwise slow down communication.

Reduce uncertainty.

Save time for both clients and the studio.

Although small FAQ sections may continue existing inside other pages, this page should become the complete knowledge base for common questions.

---

## Contact

Purpose:

Provide a simple and direct way for visitors to contact North Digital Studio.

This page should contain:

- ContactForm
- contact information
- expected response time
- short explanation of the next steps after submitting the form

The page should minimize friction between interest and first contact.

---

## Additional Pages

Several supporting pages may exist if required.

Examples include:

- Privacy Policy
- Terms & Conditions
- 404 Page

These pages exist for completeness rather than marketing.

They should remain visually consistent with the rest of the website while staying simple.

---

## Sitemap Rules

The sitemap should remain intentionally small.

New pages should only be added when they provide clear value.

Avoid introducing pages that duplicate information already available elsewhere.

The website should remain easy to navigate.

A visitor should be able to understand the entire website after visiting only a few pages.

---

# 3. Final User Journey

The final website should guide visitors through a simple and predictable journey.

Every page should naturally encourage the next logical step.

The objective is to reduce uncertainty while gradually increasing trust.

The visitor should never feel lost or overwhelmed.

---

## First-Time Visitor

The typical visitor journey begins on the Home page.

The Home page should answer the following questions in order:

- What is North Digital Studio?
- What services are offered?
- Why should I trust them?
- How do they work?
- What have they built?
- How can I start?

Every Home section should support one of these questions.

---

## Service Exploration

Visitors who require more information should naturally continue to the Services page.

This page should explain:

- available website types;
- pricing approach;
- development process;
- who each solution is designed for;
- frequently asked questions.

By the end of this page, the visitor should clearly understand which service best matches their needs.

---

## Trust Building

Visitors who still need additional confidence should continue to the Portfolio.

Here they should see:

- real client websites;
- project summaries;
- visual quality;
- practical business results whenever available.

The Portfolio exists primarily to increase trust rather than demonstrate programming ability.

---

## Remaining Questions

If visitors still have unanswered questions, they should be able to visit the FAQ page.

The FAQ should remove the most common barriers before contacting the studio.

After reading the FAQ, visitors should understand:

- pricing expectations;
- development timeline;
- revisions;
- hosting;
- maintenance;
- communication.

---

## Contact

The final step of the journey is the Contact page.

At this point the visitor should already understand:

- who North Digital Studio is;
- what services are offered;
- how projects are completed;
- why the studio can be trusted.

The Contact page should simply make beginning the project as easy as possible.

---

## Overall Journey

The complete user journey should remain simple.

Home

↓

Services

↓

Portfolio

↓

FAQ (optional)

↓

Contact

↓

Project Discussion

↓

Client

Not every visitor will follow every page.

However, the overall website should naturally support this progression.

---

# 4. Final Pages

Each page has a specific role within the website.

Pages should complement one another rather than compete for the same purpose.

No page should attempt to explain everything.

Instead, each page should focus on one stage of the visitor journey.

---

## Home

Status after completion:

Production-ready.

Primary responsibility:

Generate interest.

Build trust.

Introduce the studio.

The Home page should remain the strongest marketing page of the website.

It should provide a complete overview of the business without explaining every detail.

After reading the Home page, visitors should understand what North Digital Studio does and feel confident enough to continue exploring.

---

## Services

Status after completion:

Production-ready.

Primary responsibility:

Explain the service in detail.

The Services page should contain everything a potential client needs before making contact.

It should remove uncertainty through clear explanations rather than sales language.

Visitors should leave this page understanding:

- what can be built;
- what each solution includes;
- how development works;
- which option fits their business.

---

## Portfolio

Status after completion:

Filled with real client projects.

The Portfolio should become the primary proof of experience.

Every project should include:

- screenshots;
- project overview;
- completed work;
- technologies when appropriate;
- short description;
- business context if available.

Placeholder projects should be completely removed once enough real work exists.

---

## FAQ

Status after completion:

Comprehensive knowledge base.

The FAQ should answer nearly every recurring client question.

Rather than making visitors contact the studio for basic information, this page should solve those questions immediately.

The FAQ should continue expanding only when new real questions appear during client work.

---

## Contact

Status after completion:

Simple, direct and frictionless.

The Contact page should become the final step before project discussions begin.

The page should avoid unnecessary content.

Its only responsibility is helping visitors start a conversation.

The page should remain clean, short and easy to complete.

The ContactForm should continue using the existing shared form architecture rather than introducing a different implementation.

# 5. Shared Components

One of the primary goals of the final version of North Digital Studio is to maximize component reuse while keeping the architecture simple and understandable.

The website should not consist of completely independent pages.

Instead, every page should be assembled from the same collection of reusable building blocks.

This guarantees visual consistency, simplifies future maintenance and reduces unnecessary code duplication.

New pages should always be built by combining existing shared components before creating new ones.

---

## Layout Components

The overall page structure should continue using the existing layout primitives.

These components define spacing, alignment and overall page rhythm.

Examples include:

- Header
- Footer
- SectionContainer

These components should remain the foundation of every page.

No individual page should implement its own global layout system.

---

## UI Components

The reusable UI library should contain every component that is shared across multiple pages.

Examples include:

- Button
- Badge
- Card
- Input
- Textarea
- Label

Future pages should use these components rather than creating page-specific alternatives.

If a component becomes reusable during development, it should be moved into the shared UI library.

---

## Motion Components

Animations should continue using the existing motion architecture.

Rather than creating custom animations for every section, pages should reuse the shared animation system.

Examples include:

- Reveal
- animation presets
- motion utilities

The objective is maintaining a consistent feeling across the entire website.

Animations should support the content instead of becoming the main focus.

---

## Shared Sections

Some larger sections may also be reused across multiple pages.

Examples include:

- ContactForm
- CTA blocks
- FAQ blocks

Whenever the same section appears multiple times throughout the project, it should preferably exist as one shared implementation rather than several similar copies.

---

## Reuse Rules

Before creating any new component, verify:

- Does an existing component already solve this problem?
- Can an existing component be extended instead?
- Can the existing implementation be configured rather than duplicated?

Creating a new shared component should always be justified by actual reuse.

Components should not be generalized simply because they might become reusable in the future.

The architecture should remain practical rather than overly abstract.

---

# 6. Final Design System

The current design language should remain the foundation of the final website.

The goal is not to continuously redesign the interface, but to make every page follow one consistent visual system.

Once the final version is reached, the design system should be considered complete.

Future changes should primarily extend the existing system rather than replace it.

---

## Typography

Typography should remain consistent throughout every page.

Heading sizes, paragraph spacing, font weights and text hierarchy should follow one unified system.

No page should introduce its own typography rules.

Visitors should immediately recognize the same visual language regardless of which page they are viewing.

---

## Spacing

Spacing should remain predictable across the website.

Section spacing, internal padding, card spacing and grid gaps should consistently use the existing spacing system.

Large spacing changes should only occur intentionally to emphasize hierarchy.

The vertical rhythm should remain uniform throughout every page.

---

## Colors

The website should continue using a restrained color palette.

Primary colors, background colors, text colors, borders and accent colors should remain consistent across all pages.

Additional colors should only be introduced when they provide a clear functional purpose.

The interface should continue relying on contrast, spacing and typography rather than large amounts of color.

---

## Components

Every reusable component should share the same visual language.

Examples include:

- Buttons
- Cards
- Inputs
- Badges
- FAQ items
- Navigation
- Footer

A visitor should never feel that one component belongs to a different website.

---

## Motion

Animations should remain subtle.

Their purpose is:

- guiding attention;
- improving perceived quality;
- making interactions feel responsive.

Animations should never distract from the content.

The existing animation system should remain the only source of motion throughout the project.

---

## Responsive Design

Every page should provide the same overall experience across desktop, tablet and mobile devices.

Responsive behavior should not simply prevent layout issues.

It should preserve the same hierarchy, readability and usability regardless of screen size.

No page should receive significantly more attention than another during responsive development.

---

## Completion Criteria

The design system should be considered complete when:

- every page follows the same visual language;
- all shared components appear visually consistent;
- typography is unified;
- spacing is unified;
- animations are unified;
- responsive behavior is stable.

Once these conditions are met, future visual work should consist primarily of small refinements rather than redesigns.

---

# 7. Final Content

The final version of the website should replace every temporary or placeholder element with real business content.

The objective is ensuring that every piece of information shown to visitors accurately represents North Digital Studio.

The website should eventually require only occasional content updates rather than structural changes.

---

## Portfolio

The Portfolio should consist entirely of real completed projects.

Each project should include:

- project name;
- screenshots;
- short overview;
- services provided;
- technologies when appropriate;
- brief business context.

Placeholder projects should no longer exist.

The portfolio should naturally grow as new client work is completed.

---

## Services

Every service should accurately describe the solutions currently offered.

Pricing, timelines and included features should reflect the actual business rather than hypothetical future offerings.

Service descriptions should continue evolving as experience grows, while preserving the existing page structure.

---

## FAQ

The FAQ should gradually become a collection of real client questions.

Questions should be added only after they repeatedly appear during actual communication with potential clients.

This ensures the FAQ remains practical rather than speculative.

---

## Contact Information

All contact details should always remain current.

This includes:

- email;
- preferred communication method;
- response expectations;
- business information when applicable.

Outdated contact information should never remain on the website.

---

## Business Information

Once officially established, the website should contain accurate business information wherever required.

Examples include:

- company name;
- legal information;
- policies;
- copyright;
- other mandatory business details.

This information should remain factual and up to date.

---

## Copywriting

The overall writing style should remain:

- simple;
- professional;
- direct;
- easy to understand.

Content should explain services clearly without relying on exaggerated marketing language.

The website should communicate confidence through clarity rather than through unnecessary promises.

---

## Content Completion Criteria

The content layer should be considered complete when:

- every placeholder has been replaced;
- every service reflects reality;
- every project represents real work;
- every contact detail is accurate;
- every FAQ answers real client questions.

At that point, future content updates should primarily consist of adding new portfolio projects and making small factual changes rather than rewriting entire pages.

# 8. After Launch

Once the website reaches its intended final state, active development should largely come to an end.

North Digital Studio is not intended to become a constantly evolving software product.

It is a business website whose primary purpose is to consistently attract potential clients and support the business.

After launch, development priorities should shift away from creating new functionality and toward maintaining a reliable, professional website.

The architecture, design system and overall structure should remain stable.

Future work should consist primarily of maintenance rather than expansion.

---

## Content Updates

The most common updates after launch should involve content rather than code.

Examples include:

- adding new portfolio projects;
- updating service descriptions;
- adjusting pricing when necessary;
- updating business information;
- expanding the FAQ using real client questions.

These updates should not require structural changes to the website.

---

## Maintenance

The website should continue receiving routine maintenance.

Typical maintenance includes:

- fixing bugs;
- updating dependencies;
- ensuring compatibility with modern browsers;
- maintaining responsive behavior;
- correcting outdated information.

Maintenance should preserve the existing architecture rather than replacing it.

---

## Small Improvements

Minor improvements may continue after launch.

Examples include:

- improving animations;
- improving spacing;
- refining copywriting;
- improving accessibility;
- improving performance.

These improvements should remain incremental.

Large redesigns should only occur when there is a clear business reason.

---

## New Client Projects

As North Digital Studio grows, the Portfolio should continue expanding.

New client projects should become the primary source of visible updates.

The website itself should remain relatively stable while the portfolio naturally demonstrates the studio's growing experience.

---

## Long-Term Stability

The objective after launch is stability.

Visitors should receive the same high-quality experience regardless of when they visit the website.

Frequent visual redesigns should be avoided.

The website should mature through gradual refinement rather than constant reinvention.

---

# 9. What Is NOT Planned

This section defines the boundaries of the project.

Its purpose is preventing unnecessary feature expansion and keeping North Digital Studio focused on its original objective.

Not every technically interesting feature belongs in this website.

Future development should respect these boundaries.

---

## No Large Web Applications

North Digital Studio is not intended to become a complex web application.

The website should not evolve into:

- SaaS platforms;
- CRM systems;
- project management tools;
- dashboards;
- client portals.

Its purpose is presenting the studio and generating new business opportunities.

---

## No User Accounts

The website should not include:

- registration;
- authentication;
- user profiles;
- account management.

Visitors should be able to access the entire public website without creating an account.

---

## No Administrative Systems

Administrative tools are outside the scope of this project.

Examples include:

- admin dashboards;
- internal management systems;
- employee panels;
- analytics interfaces.

These systems, if ever required, should exist as completely separate projects.

---

## No Blog

The website is not intended to become a content publishing platform.

Articles, tutorials and regular blog posts are not part of the long-term plan.

The website should remain focused on services, portfolio and client acquisition.

---

## No Constant Redesigns

Once the final visual system has been completed, redesigning entire pages should not become part of normal development.

Future improvements should respect the existing design language.

Consistency should always take priority over novelty.

---

## No Feature Creep

New functionality should only be added when it provides clear value to potential clients.

Avoid implementing features simply because they are technically possible or visually interesting.

Every addition should support the primary business objective of the website.

---

## Project Boundaries

North Digital Studio should remain a focused business website.

Whenever a future feature is proposed, ask:

Does this help attract, inform or convert potential clients?

If the answer is no, the feature probably belongs in another project rather than this website.

---

# 10. Definition of Done

This section defines when North Digital Studio should be considered complete.

Completion does not mean that the website will never change again.

Instead, it marks the point where active development transitions into long-term maintenance.

The following conditions should all be satisfied before the project is considered finished.

---

## Public Pages

Every planned public page has been completed.

This includes:

- Home;
- Services;
- Portfolio;
- FAQ;
- Contact;
- supporting pages where required.

Every page should be production-ready.

---

## Design System

The design system should be fully established.

This means:

- consistent typography;
- consistent spacing;
- consistent colors;
- consistent components;
- consistent animations;
- consistent responsive behavior.

No page should appear visually disconnected from the rest of the website.

---

## Architecture

The architecture should be stable.

Reusable components should already exist.

Folder structure should no longer require major changes.

Shared systems should be complete.

Future work should primarily involve using the existing architecture rather than redesigning it.

---

## Content

The website should contain real business content.

This includes:

- real services;
- real contact information;
- real portfolio projects;
- real FAQ content;
- real business information.

Placeholder content should no longer exist.

---

## Technical Quality

The production version should:

- build successfully;
- behave correctly across supported devices;
- remain responsive;
- use the existing shared architecture;
- provide a reliable user experience.

The objective is stability rather than technical perfection.

---

## Business Readiness

The website should be capable of supporting real business activity.

A potential client should be able to:

- discover the studio;
- understand the services;
- evaluate previous work;
- receive answers to common questions;
- contact the studio.

No additional pages should be required before accepting real clients.

---

## Final State

Once every condition described in this document has been achieved, North Digital Studio should be considered complete.

From that point onward, development should primarily consist of:

- publishing new portfolio projects;
- maintaining the website;
- improving existing content;
- fixing bugs;
- making occasional incremental improvements.

The project should no longer undergo major architectural changes or complete visual redesigns unless there is a significant business reason.

At this stage, the website should function as a stable long-term asset that supports the business while requiring only minimal ongoing development.