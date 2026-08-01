# CHANGELOG Instructions

This file contains the complete development history of North Digital Studio.

Its purpose is to preserve the evolution of the project so that any future AI assistant or developer can quickly understand what has changed over time.

Unlike PROJECT_STATE, which describes the current state of the project, the CHANGELOG records only the changes made during development.

---

# General Rules

Every meaningful development session should end with an update to this file.

A changelog entry should describe **what changed**, not **how the code was written**.

Write entries from the perspective of the project, not the developer.

Prefer concise but informative descriptions.

Do not include unnecessary implementation details.

---

# What Should Be Included

Record:

- New pages.
- New sections.
- New reusable components.
- Major UI improvements.
- Design system changes.
- Architecture changes.
- Refactoring that affects the project structure.
- New features.
- Removed features.
- Fixed bugs.
- Dependency changes.
- Documentation updates.
- Important development decisions that changed the project.

---

# What Should NOT Be Included

Do not record:

- Every commit.
- Minor formatting changes.
- Variable renames.
- Import sorting.
- Small styling tweaks that have no visible impact.
- Temporary experiments.
- AI conversations.
- Planning discussions.

The changelog should describe meaningful project progress, not development noise.

---

# Entry Structure

Each entry should follow this format:

```md
# YYYY-MM-DD

## Added

- ...

## Changed

- ...

## Improved

- ...

## Fixed

- ...

## Removed

- ...

## Notes

Optional observations if they help explain the changes.
```

Sections that have no changes may be omitted.

---

# Writing Style

Use short, objective sentences.

Good:

- Added Portfolio page.
- Introduced reusable Button variants.
- Unified CTA components.
- Updated animation system.
- Improved responsive layout.
- Added ContactForm validation.

Avoid:

- Spent three hours fixing...
- Finally managed to...
- Refactored because...
- I decided to...

The changelog documents the project, not the development process.

---

# Level of Detail

Summarize one development session rather than every individual modification.

Example:

Instead of:

- Changed Button.
- Changed Button hover.
- Changed Button padding.
- Changed Button transition.

Write:

- Improved the reusable Button component and standardized its behavior across the website.

---

# Updating Existing Entries

Never rewrite previous history unless it contains factual mistakes.

Always append new entries to preserve the project's development timeline.

The newest entry should always appear at the top of the file.

---

# Goal

A new AI assistant should be able to read only PROJECT_VISION, PROJECT_STATE and CHANGELOG and immediately understand:

- what the project currently is;
- what has recently changed;
- what direction development is moving.

## Current Status

The project now has:

- Home page completed.
- Services page completed.
- Unified design system.
- Shared UI component library.
- Shared animation system.

Next logical milestone:

Complete the Portfolio page.
