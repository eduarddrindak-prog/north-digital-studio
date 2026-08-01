# North Digital Studio — Project Bible

> This document contains the core development principles of North Digital Studio.
>
> Unlike PROJECT_VISION, which explains why the project exists, and PROJECT_STATE, which explains how the project is currently built, this document explains how every future contribution should be made.
>
> Every AI assistant, developer or contributor should read this document before making changes to the project.

---

# 1. Think About The Product First

North Digital Studio is a product before it is a codebase.

Every decision should improve the website itself rather than the implementation behind it.

The primary goal is not cleaner code.

The primary goal is a better website.

Whenever there is a conflict between technical perfection and delivering a better product, prefer the solution that improves the product while keeping the code reasonably maintainable.

---

# 2. Respect The Existing Architecture

Do not redesign the architecture without a clear reason.

The project already has a working structure:

Design Tokens
↓

Reusable UI

↓

Common Components

↓

Sections

↓

Pages

New code should fit into this architecture rather than replacing it.

---

# 3. Reuse Before Creating

Before creating anything new, always ask:

- Does something similar already exist?
- Can an existing component be extended?
- Can an existing section be improved instead?
- Can an existing utility solve this problem?

Creating duplicate solutions should always be the last option.

---

# 4. Consistency Is More Valuable Than Creativity

Do not introduce new visual ideas simply because they look interesting.

North Digital Studio should feel like one coherent product.

Every new page should immediately look like it belongs to the same website.

Consistency should always have higher priority than originality.

---

# 5. Solve Real Problems

Every change should solve an actual problem.

Avoid implementing features because:

- they are technically interesting;
- another website has them;
- they demonstrate programming skills.

Ask one question first:

"What problem does this solve?"

If there is no clear answer, reconsider the change.

---

# 6. Build Incrementally

The project grows through small iterations.

Prefer:

- one completed improvement;
- one finished section;
- one solved problem.

Avoid:

- massive rewrites;
- redesigning finished pages;
- changing unrelated systems.

Small improvements are easier to review and almost always produce better long-term results.

---

# 7. Respect The Design System

The design system already exists.

Before introducing:

- colors;
- spacing;
- typography;
- radius;
- transitions;
- layouts;

always check whether an existing token already provides the required value.

The design system should continuously evolve, but it should not become fragmented.

---

# 8. Respect The Current Stage

The project is currently pre-launch.

This changes priorities.

Current priorities are:

1. Finish the website.
2. Keep the design consistent.
3. Reuse existing architecture.
4. Launch.
5. Get the first client.

Do not optimize for problems the project does not yet have.

---

# 9. Do Not Build For Developers

The visitor is a potential client.

Not another frontend developer.

Avoid making decisions whose only benefit is that developers might appreciate them.

Instead, improve:

- clarity;
- trust;
- usability;
- communication;
- conversion.

---

# 10. Do Not Chase Perfection

Nothing in the project needs to become perfect before launch.

Production-ready is enough.

Future improvements are expected.

Shipping is part of the development process rather than the end of it.

---

# 11. Preserve Simplicity

Whenever two solutions exist, prefer the simpler one if both solve the problem equally well.

Avoid unnecessary:

- abstractions;
- dependencies;
- configuration;
- architecture;
- visual complexity.

Simple projects are easier to maintain, easier to extend and easier to understand.

---

# 12. Preserve Context

Before suggesting large changes:

- understand PROJECT_VISION;
- understand PROJECT_STATE;
- understand the current page;
- understand why the existing solution was chosen.

Never assume that an unfamiliar decision is automatically a bad decision.

Many decisions inside this project were made intentionally after long discussions.

Understand first.

Improve second.

Rewrite last.

---

# Final Principle

North Digital Studio should continue evolving without losing its identity.

Every improvement should make the project:

- more consistent;
- easier to maintain;
- more professional;
- more trustworthy;
- closer to launch.

If a change increases complexity without creating proportional value, it probably should not be implemented.