# VANTA — Technical Pass

Date: 2026-10-07

## Changes

- Added `prefers-reduced-motion` handling to Hero's JavaScript-driven live metric updates.
- Added `prefers-reduced-motion` handling to How It Works' JavaScript-driven live metrics.
- Made How It Works visual step cards keyboard-operable and exposed their active state with `role="button"` and `aria-pressed`.
- Made Workspace header tabs real stateful tabs with `role="tablist"`, `role="tab"` and `aria-selected`.
- Made Workspace configuration toggles actually toggle and expose state with `aria-pressed`.
- Added cleanup for Workspace test-run timeouts so they cannot continue after unmount or workflow changes.
- Corrected Scale Across Company interactive cards from `aria-current` to `aria-pressed`.
- Added a strict referrer policy to the document metadata.

## Verified

- The modified TSX files pass TypeScript JSX transpilation/parsing.
- Existing focus-visible styles were preserved.
- Existing CSS reduced-motion rules were preserved.
- No desktop visual layout rules were intentionally changed.

## Remaining project-level checks

A full production `npm run build` / Lighthouse run still needs to be executed from the actual working North Digital Studio checkout, because the file snapshots available to this pass do not include the complete executable repository environment.

Before launch, run:

```bash
npm run lint
npm run build
```

Then check the VANTA route at the production URL in Lighthouse on Mobile and Desktop.
