When generating a new screen, copy the structural rules, spacing rules, sizing rules, and naming conventions from the reference screen exactly.

Match these attributes precisely:

Layout spacing (vertical + horizontal gap values)
Padding inside containers and cards
Font families, font weights, font sizes, and line heights
Letter spacing and text casing
Icon sizes, stroke thickness, and icon positioning
Button height, font size, padding, corner radius, and colour states
Checkbox / bullet / info icon sizing and alignment
Divider height, margins, and stroke colour
Container width and position (max-width, margins, alignment)
Card border thickness, radius, and hover/active style

Structure & naming requirements:

Maintain the same file structure, screens should have one .tsx file and one .module.css file, CSS should all be contained within the latter. It is important that inline CSS is minimised.
Use the same component names and nesting structure as the reference screen (e.g., Header, SectionIntro, CardRoot, CardContent, CardBenefitRow, PrimaryButton, NotificationBanner, etc.)
Maintain the same naming case style (PascalCase for components, camelCase for class names, and hyphenated layer name suffixes if used)
If any names are misspelt, correct them to the best of your ability
Place elements in the same hierarchy order and use the same grouping strategy
Every reusable UI pattern MUST be a variant of the existing component (do not recreate new instances)
Preserve auto-layout directions and alignment exactly (e.g., flex-column, align-start, justify-start)
Maintain the same constraint / resizing behavior for responsive layouts


Output requirement:

The new screen must be visually and structurally indistinguishable from the reference screen in spacing rhythm and construction — only the content should differ.
If multiple equally plausible interpretations exist, choose the one that is most consistent with the code semantics and component reuse logic rather than pure visuals.

Fail-safe rules:

Do NOT adjust or optimise spacing on your own — even by 1px — unless the reference screen includes a variant for that spacing.
If you encounter a design element that is similar to an existing component, reuse the existing component rather than rebuilding it.
Never introduce new component names unless absolutely necessary.

Before finalizing the screen, run an internal consistency check against the reference screen and adjust any spacing or alignment deviations to pixel-accuracy.