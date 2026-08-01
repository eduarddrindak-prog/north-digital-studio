
# 1. Purpose

This document contains reusable development workflows, prompt templates and task guidelines for working on North Digital Studio.

Unlike the other project documentation:

- `PROJECT_VISION` explains why the project exists.
- `PROJECT_STATE` explains how the project is currently built.
- `PROJECT_BIBLE` explains the core principles that should guide every decision.

This document explains **how an AI assistant should actually perform development tasks**.

The goal of this file is not to provide copy-paste prompts.

Its goal is to standardize the entire development process.

Every similar task should be solved using the same workflow.

This reduces inconsistency between different AI models, different conversations and different development sessions.

Whenever possible, AI assistants should follow the workflows defined in this document instead of inventing new approaches for every request.

---

## Scope

This document applies to every development task related to North Digital Studio, including:

- creating new pages;
- creating new sections;
- improving existing pages;
- improving the design;
- refactoring components;
- reviewing the project;
- updating documentation;
- writing project code.

It should be treated as the operational manual for AI-assisted development.

---

## Objective

The primary objective is consistency.

Different AI assistants should produce work that follows the same architecture, the same design language and the same development process.

The goal is that work completed by different models appears as if it was created by one developer following one consistent workflow.

---

# 2. General Workflow

Every development task should follow the same overall workflow regardless of its size.

Skipping steps often leads to duplicated components, inconsistent design or unnecessary refactoring.

The recommended workflow is:

Understand
↓

Study
↓

Plan
↓

Reuse
↓

Implement
↓

Review
↓

Document

Each step is described below.

---

## Step 1 — Understand

Before writing code, fully understand the user's request.

Identify:

- what is being requested;
- what page is affected;
- what components are involved;
- whether the request changes functionality, design or architecture.

Never start implementing before understanding the actual objective.

---

## Step 2 — Study

Before making changes, study the existing project.

When necessary:

- read PROJECT_VISION;
- read PROJECT_STATE;
- read PROJECT_BIBLE;
- inspect existing components;
- inspect similar sections;
- inspect the design system.

Avoid solving problems without first understanding how similar problems have already been solved.

---

## Step 3 — Plan

Create a simple implementation plan before modifying code.

Identify:

- files that will change;
- reusable components that can be used;
- possible side effects;
- expected result.

The plan does not need to be long, but every significant task should have one.

---

## Step 4 — Reuse

Always search for reusable solutions before creating new ones.

Check:

- UI components;
- Common components;
- existing sections;
- animation presets;
- design tokens.

Only create new code when existing solutions cannot reasonably solve the problem.

---

## Step 5 — Implement

Implement the smallest complete solution.

Prefer:

- extending existing components;
- small iterations;
- minimal changes;
- preserving architecture.

Avoid unrelated improvements during implementation.

---

## Step 6 — Review

Before considering the task complete, review the result.

Verify:

- visual consistency;
- responsive behavior;
- design system compliance;
- component reuse;
- architecture consistency.

If possible:

- run the build;
- run lint;
- check for TypeScript errors.

---

## Step 7 — Document

If the completed work meaningfully changes the project:

- update PROJECT_STATE if architecture changed;
- update PROJECT_BIBLE if development principles changed;
- update CHANGELOG for every meaningful completed development session.

Documentation should evolve together with the project.

---

# 3. Before Every Task

Before starting any development task, every AI assistant should perform the following checklist.

The purpose of this checklist is to prevent unnecessary work, duplicated solutions and inconsistent architecture.

This checklist should be mentally completed before writing any code.

---

## Understand The Goal

Answer the following questions:

- What is the user actually asking for?
- What problem needs to be solved?
- Which page is affected?
- Which components are involved?
- Is the request about design, architecture or functionality?

If the objective is unclear, clarify it before implementation.

---

## Understand The Existing Solution

Before changing anything, inspect the current implementation.

Check:

- existing page;
- existing section;
- reusable UI components;
- common components;
- design tokens;
- animations;
- similar implementations elsewhere in the project.

Never assume that creating a new solution is the best option.

---

## Search For Reuse

Before creating new code, ask:

Can an existing Button be reused?

Can SectionContainer be reused?

Can Reveal be reused?

Can an existing layout already solve this?

Can the existing animation system be reused?

Can the existing design tokens solve this?

If the answer is yes, reuse instead of recreating.

---

## Respect The Architecture

Every change should fit the current project structure.

Avoid:

- creating unnecessary folders;
- creating duplicate components;
- moving reusable code into page folders;
- placing page-specific code inside shared components.

Always preserve the existing architecture unless the user explicitly requests structural changes.

---

## Respect The Design System

Before introducing new visual values, verify whether they already exist.

Check:

- colors;
- spacing;
- typography;
- radius;
- transitions;
- layout primitives.

Reuse existing values whenever possible.

---

## Think About Future Development

Before implementing a solution, ask:

Will this still make sense after five more pages are added?

Will another developer immediately understand this?

Can this be maintained easily?

Does this introduce unnecessary complexity?

Prefer solutions that improve long-term maintainability without sacrificing current development speed.

---

## Think About The Product

Finally, remember that North Digital Studio is a real product rather than a programming exercise.

The objective is not writing the most technically impressive code.

The objective is building a consistent, professional website capable of attracting real clients.

Every implementation should support that objective.

# 4. Page Creation Workflow

This workflow should be followed whenever creating a completely new page.

The goal is to ensure that every new page follows the same architecture, design language and development standards as the rest of the project.

Never begin implementing a new page immediately.

Always follow the workflow below.

---

## Step 1 — Understand The Purpose

Determine the purpose of the page.

Answer the following questions:

- Why does this page exist?
- What is its primary objective?
- What action should the visitor take after viewing it?
- Where does this page fit within the overall website?

Every page should have one primary responsibility.

Avoid trying to solve multiple unrelated problems on one page.

---

## Step 2 — Study Existing Pages

Before designing a new page, inspect the existing ones.

Review:

- Home
- Services

Pay attention to:

- section order;
- spacing;
- typography;
- CTA placement;
- animation usage;
- reusable components.

New pages should feel like natural extensions of the existing website.

---

## Step 3 — Plan The Page Structure

Define the complete section hierarchy before writing code.

Example:

Hero

↓

Main Content

↓

Supporting Section

↓

FAQ

↓

Final CTA

Each section should have a single responsibility.

Avoid adding sections simply to increase page length.

---

## Step 4 — Identify Reusable Components

Before creating any new component, inspect the existing project.

Check:

- Button
- SectionContainer
- Reveal
- ContactForm
- Input
- Label
- Textarea

Reuse existing components whenever possible.

---

## Step 5 — Implement Sections

Implement sections one at a time.

Complete each section before starting the next.

Avoid leaving partially completed sections throughout the page.

---

## Step 6 — Review The Complete Page

After implementation verify:

- responsive behavior;
- spacing consistency;
- typography consistency;
- animation consistency;
- CTA consistency;
- overall visual flow.

The page should feel like part of the existing website rather than a separate project.

---

## Step 7 — Documentation

If the page becomes part of the project:

- update PROJECT_STATE;
- update CHANGELOG.

---

# 5. New Section Workflow

Every section should solve one clearly defined problem.

Sections are the primary building blocks of pages.

Because of this, they should remain focused, independent and reusable where appropriate.

---

## Step 1 — Define The Purpose

Determine exactly why the section exists.

Examples:

- Introduce a service.
- Explain a process.
- Build trust.
- Answer questions.
- Encourage contact.

If the purpose cannot be described in one sentence, the section is probably trying to do too much.

---

## Step 2 — Search For Existing Solutions

Inspect similar sections already present in the project.

Look for:

- layouts;
- typography;
- cards;
- CTA placement;
- animations.

Reuse existing ideas before introducing new ones.

---

## Step 3 — Build Using Existing Components

Prefer using:

- SectionContainer;
- Button;
- Reveal;
- shared typography;
- design tokens.

Avoid introducing page-specific UI primitives.

---

## Step 4 — Maintain Independence

A section should:

- contain its own layout;
- own its own page-specific components;
- avoid dependencies on neighboring sections.

Removing one section should not require rewriting another.

---

## Step 5 — Review

Verify:

- visual consistency;
- spacing;
- responsiveness;
- animation;
- accessibility;
- hierarchy.

Every section should immediately communicate its purpose.

---

## Step 6 — Decide Whether Components Should Be Shared

If a component created inside the section could realistically be reused elsewhere in the project, consider moving it into the shared component hierarchy.

Otherwise, leave it inside the section.

Do not extract components simply because they appear twice.

---

# 6. Design Improvement Workflow

This workflow should be followed whenever improving an existing page or section.

The goal is continuous refinement without unnecessary redesigns.

---

## Step 1 — Understand The Existing Design

Before changing anything:

Study the current implementation.

Identify:

- strengths;
- weaknesses;
- inconsistencies;
- opportunities for improvement.

Never redesign something that has not first been understood.

---

## Step 2 — Improve, Don't Replace

Prefer improving existing elements over replacing them.

Examples:

Good:

- improve spacing;
- improve hierarchy;
- improve typography;
- improve button consistency.

Avoid:

- redesigning the entire page;
- changing layouts without reason;
- replacing established patterns.

---

## Step 3 — Follow Existing Design Language

Every improvement should continue using:

- design tokens;
- existing spacing;
- existing typography;
- existing button styles;
- existing animations.

Do not introduce a second visual language.

---

## Step 4 — Evaluate The Result

Ask:

Does the page now look more consistent?

Is readability better?

Is the hierarchy clearer?

Does the page feel more professional?

If the answer is no, reconsider the change.

---

## Step 5 — Compare Before And After

Always compare the new version against the previous one.

The improvement should be measurable.

Examples:

- easier to read;
- more consistent;
- cleaner spacing;
- stronger CTA hierarchy.

Subjective preference alone is not sufficient justification.

---

# 7. Code Refactoring Workflow

Refactoring should never be automatic.

The project prioritizes product quality over unnecessary code improvements.

Only refactor when the result provides meaningful value.

---

## Step 1 — Identify The Problem

Before refactoring, define the exact problem.

Examples:

- duplicated code;
- difficult maintenance;
- inconsistent architecture;
- unnecessary complexity.

Do not refactor simply because another implementation would be "cleaner."

---

## Step 2 — Evaluate The Benefits

Determine whether the refactor will:

- reduce duplication;
- improve maintainability;
- simplify future development;
- improve consistency.

If none of these benefits exist, refactoring should usually be postponed.

---

## Step 3 — Preserve Existing Behavior

Refactoring should not change the visual appearance or functionality unless explicitly intended.

The objective is structural improvement, not redesign.

---

## Step 4 — Keep Refactors Small

Prefer multiple small refactors instead of one large rewrite.

Small refactors are:

- easier to review;
- easier to test;
- easier to revert if necessary.

---

## Step 5 — Verify Everything

After refactoring:

- verify build success;
- verify TypeScript;
- verify responsive layouts;
- verify animations;
- verify component behavior.

A successful refactor should leave the website visually identical while improving the internal implementation.

---

## Step 6 — Update Documentation

If the refactor changes project architecture, reusable components or development conventions:

- update PROJECT_STATE;
- update CHANGELOG.

Minor internal refactors do not require documentation updates.

# 8. Documentation Workflow

Documentation is considered part of development rather than a separate task.

Whenever a meaningful change is completed, verify whether one or more project documents should also be updated.

Keeping the documentation synchronized with the project ensures that future AI assistants can immediately understand the current state of development.

Documentation should evolve together with the project.

---

## Step 1 — Determine Whether Documentation Is Required

Not every change requires documentation.

Small internal changes such as:

- formatting;
- variable renaming;
- import cleanup;
- small bug fixes;
- comment updates;

normally do not require updating project documentation.

Documentation should only be updated when the project itself has meaningfully changed.

---

## Step 2 — Identify Which Document Should Be Updated

Use the following guide.

### PROJECT_VISION

Update only if:

- project goals change;
- business direction changes;
- long-term strategy changes;
- development philosophy changes.

This document should change very rarely.

---

### PROJECT_STATE

Update when:

- architecture changes;
- new reusable components are added;
- new pages are completed;
- folder structure changes;
- technologies change;
- reusable workflows change.

PROJECT_STATE should always describe the current project accurately.

---

### PROJECT_BIBLE

Update when:

- development principles change;
- new permanent rules are introduced;
- existing workflows are replaced.

Do not update PROJECT_BIBLE for temporary project decisions.

---

### CHANGELOG

Update after every meaningful development session.

Summarize:

- what was added;
- what changed;
- what improved;
- what was fixed.

The changelog should remain chronological.

---

### PROMPTS

Update whenever:

- a better workflow is discovered;
- a reusable prompt template is created;
- a development process is improved.

PROMPTS should improve over time as better workflows are discovered.

---

## Step 3 — Keep Documentation Consistent

Documentation should never contradict itself.

Before updating one document, verify that the remaining documentation still accurately reflects the current project.

---

# 9. Review Workflow

Every completed task should be reviewed before it is considered finished.

The review process is intended to catch inconsistencies before they become permanent.

Review should happen after implementation but before updating documentation.

---

## Step 1 — Functional Review

Verify that the implemented solution behaves correctly.

Check:

- expected behavior;
- interactions;
- navigation;
- responsiveness;
- animations.

The feature should work exactly as intended.

---

## Step 2 — Design Review

Compare the new implementation against the rest of the website.

Verify:

- typography;
- spacing;
- colors;
- button usage;
- layouts;
- visual hierarchy.

The new implementation should immediately feel like part of the existing website.

---

## Step 3 — Component Review

Inspect the implementation.

Ask:

Was an existing component reused?

Was duplicate UI created?

Could the implementation be simplified?

Does it respect the current architecture?

The objective is consistency rather than uniqueness.

---

## Step 4 — Code Review

Verify:

- build succeeds;
- TypeScript passes;
- lint passes (when applicable);
- no unnecessary complexity was introduced.

The code should remain understandable and maintainable.

---

## Step 5 — Final Review

Before finishing the task ask:

Is the project objectively better than before?

Was the requested problem solved?

Would another developer understand this implementation?

Does the change move the project closer to launch?

If the answer is yes, the task is complete.

---

# 10. Changelog Workflow

Every meaningful development session should end with a CHANGELOG update.

The changelog documents project evolution rather than individual commits.

Its purpose is to allow future AI assistants to understand recent project history without reading Git commits.

---

## Step 1 — Summarize The Session

Identify the major accomplishments.

Ignore:

- tiny fixes;
- formatting;
- experiments;
- temporary changes.

Focus only on meaningful progress.

---

## Step 2 — Categorize Changes

Whenever appropriate, group changes into:

Added

Changed

Improved

Fixed

Removed

Categories without changes may be omitted.

---

## Step 3 — Write Objectively

Entries should describe the project.

Avoid describing the development process.

Good:

- Added Portfolio page.
- Unified CTA buttons.
- Improved responsive layouts.

Avoid:

- Spent several hours...
- Finally fixed...
- Tried multiple approaches...

---

## Step 4 — Keep Entries Compact

Summarize the entire development session.

Do not list every individual code modification.

The changelog should remain easy to scan.

---

## Step 5 — Update Current Status

At the end of each entry, briefly describe the project's new overall state.

Example:

Current status:

- Home completed.
- Services completed.
- Portfolio in progress.

Next milestone:

Complete the Portfolio page.

This provides immediate context for future development sessions.

---

# 11. Common Prompt Templates

The following templates provide standardized workflows for common development tasks.

These templates should be adapted to the current task rather than copied verbatim.

---

## Create New Page

Objective:

Create a new public page following the existing project architecture.

Workflow:

- Read PROJECT_STATE.
- Study existing pages.
- Plan section hierarchy.
- Reuse shared components.
- Follow design system.
- Build incrementally.
- Review.
- Update documentation.
- Update CHANGELOG.

---

## Create New Section

Objective:

Create a new page section that integrates naturally into the existing page.

Workflow:

- Understand section purpose.
- Inspect similar sections.
- Reuse existing UI.
- Follow spacing system.
- Follow typography system.
- Review consistency.
- Update documentation if necessary.

---

## Improve Existing Section

Objective:

Improve an existing section without redesigning it unnecessarily.

Workflow:

- Identify weaknesses.
- Preserve structure.
- Improve hierarchy.
- Improve spacing.
- Improve consistency.
- Review before and after.
- Update CHANGELOG.

---

## Review Existing Page

Objective:

Perform a complete quality review.

Checklist:

- responsive behavior;
- spacing consistency;
- typography consistency;
- CTA hierarchy;
- reusable component usage;
- design consistency;
- accessibility;
- build status.

---

## Refactor Existing Component

Objective:

Improve internal implementation while preserving behavior.

Workflow:

- Define the problem.
- Verify reuse opportunities.
- Refactor incrementally.
- Preserve behavior.
- Verify build.
- Update documentation if architecture changed.

---

## Improve Visual Design

Objective:

Increase visual quality while preserving the existing design language.

Workflow:

- Study the current implementation.
- Identify inconsistencies.
- Improve rather than redesign.
- Respect tokens.
- Respect spacing.
- Respect typography.
- Compare before and after.
- Verify consistency.