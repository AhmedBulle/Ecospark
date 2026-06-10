## Goal
Change every currently-blue button across the site to the brand orange `#d35c3c`.

## What's blue today
Two utility classes in `src/styles.css` both resolve to the brand blue `var(--ink)` (`#262262`):

1. `.btn-blue` — used by:
   - Nav "Get Consultation" (desktop + mobile) — `src/components/site/Nav.tsx`
   - Hero "Get Consultation" — `src/components/site/Hero.tsx`
   - Contact "Chat on WhatsApp" — `src/components/site/Contact.tsx`
2. `.spark-gradient` — used by:
   - Hero "Explore Projects" — `src/components/site/Hero.tsx`
   (This one renders blue today because `.spark-gradient` is set to `var(--ink)`.)

## Change
In `src/styles.css`, repoint both utilities to the brand orange so every button that currently appears blue becomes orange, with no component edits needed:

- `.btn-blue` → `background: var(--spark); color: #ffffff;`
- `.spark-gradient` → `background: var(--spark);` (keeps the existing white text from the Hero button class)

No other colors, fonts, layout, or content change. Outlined/transparent buttons and links remain untouched.

## Out of scope
- Nav link hover color (`hover:text-spark`) is already orange — no change.
- The orange `text-spark` accents, badges, and borders stay as-is.
- No changes to `--ink` token itself, so any non-button usage of brand blue (e.g. body text color via `--foreground`) is preserved.
