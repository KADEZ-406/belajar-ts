---
version: alpha
name: Duolingo Playful Learning
description: A bright, friendly, highly recognizable learning system with energetic green accents and minimal visual clutter.
colors:
  primary: "#58cc02"
  secondary: "#1cb0f6"
  tertiary: "#4b4b4b"
  neutral: "#ffffff"
  surface: "#ffffff"
  on-surface: "#4b4b4b"
  border: "#e5e7eb"
  muted: "#b0b0b0"
  error: "#ff4b4b"
  link: "#1cb0f6"
typography:
  headline-display:
    fontFamily: feather
    fontSize: 48px
    fontWeight: 700
    lineHeight: 58px
    letterSpacing: -0.96px
  headline-lg:
    fontFamily: feather
    fontSize: 37px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: 0px
  headline-md:
    fontFamily: sans-serif
    fontSize: 29px
    fontWeight: 600
    lineHeight: 35px
    letterSpacing: 0px
  headline-sm:
    fontFamily: sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 26px
    letterSpacing: 0px
  body-lg:
    fontFamily: din-round
    fontSize: 17px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: din-round
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22px
    letterSpacing: 0px
  body-sm:
    fontFamily: sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: din-round
    fontSize: 15px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: sans-serif
    fontSize: 15px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 10px
  sm: 14px
  md: 16px
  lg: 40px
  xl: 64px
  xxl: 82px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.lg}"
    padding: "18px 16px"
    height: "50px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "18px 16px"
    height: "50px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "14px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "10px 14px"
---

# Duolingo Playful Learning

## Overview
This system feels playful, energetic, and instantly approachable, with a strong focus on motivation over formality. The page is spacious and uncluttered, letting the mascot illustration and call-to-action buttons carry most of the emotional weight. It is designed for broad consumer audiences, especially learners who respond well to optimistic, gamified cues.

## Colors
- **Primary (#58CC02):** The signature Duolingo green, used for the main action button, brand accents, and the most important moments of emphasis.
- **Secondary (#1CB0F6):** A bright sky blue reserved for links and secondary interactive highlights, adding variety without competing with the green.
- **Tertiary (#4B4B4B):** A soft charcoal used for headline and body text, chosen over pure black to keep the tone friendly and less severe.
- **Neutral (#FFFFFF):** The dominant background color, creating a clean, airy canvas that makes the illustrations and buttons pop.
- **Surface (#FFFFFF):** Card and control surfaces stay white to preserve the lightweight, minimal feel.
- **On-surface (#4B4B4B):** The primary readable text color for UI elements and cards, maintaining strong contrast on white.
- **Border (#E5E7EB):** A light gray border color for cards and secondary controls, used sparingly to preserve the flat, open composition.
- **Muted (#B0B0B0):** A subdued gray for auxiliary chrome such as the language switcher and navigation affordances.
- **Link (#1CB0F6):** A clear action blue for text-style interactions and low-emphasis calls to action.
- **Error (#FF4B4B):** A bright, friendly red for validation or destructive states if needed, though it is not prominent in the screenshot.

## Typography
Headlines use the distinctive feather typeface for a bold, rounded, highly recognizable brand voice. The largest headings are heavy and compact, with slightly tightened letter spacing in the display style to feel punchy and memorable. Body copy relies on din-round for a soft, modern, highly legible reading experience, while labels and buttons use bold weights to reinforce action and clarity.

Text treatment leans friendly and casual rather than editorial or corporate. Uppercase is used selectively for small UI labels such as the site-language control and the primary button, often with modest letter spacing to make them feel crisp and navigational. The hierarchy is simple: expressive display type for hero messaging, sturdy sans-serif for supporting text, and bold labels for controls.

## Layout
The page uses a wide, centered hero layout with generous negative space, allowing the illustration and CTA stack to breathe. Content is arranged in a balanced two-column composition: visual on the left, messaging on the right, with a footer-like language selector anchored at the bottom. Spacing follows a loose but consistent rhythm, with larger jumps between major regions and smaller 10px–16px gaps inside controls and navigation.

This system favors a fixed-max-width feel over a dense fluid grid. Sections should remain roomy, with substantial top and bottom padding, and interactive groups should be vertically stacked with clear separation. Cards and small containers use modest internal padding, while hero content should remain open and uncluttered.

## Elevation & Depth
The interface is mostly flat, relying on color contrast, whitespace, and subtle borders instead of heavy shadows. Depth is created by strong green fills, white surfaces, and soft gray outlines rather than layered elevation. Where shadow appears, it is extremely restrained and used more as a faint separation cue than a dramatic lift.

This restraint keeps the experience light and playful. Interactive hierarchy comes from saturation, shape, and contrast, not from stacked depth effects or glossy treatments.

## Shapes
The shape language is rounded and soft, matching the mascot-driven personality of the brand. Buttons use a medium radius, especially the primary CTA at 12px, while secondary controls and cards sit between 4px and 8px for a tidy but approachable look. Pills and chips may expand to full rounding for a friendlier, game-like feel.

Overall, the system avoids sharp corners except where subtle structure is needed. Forms and controls should feel tactile, safe, and welcoming.

## Components
Buttons are the most expressive component in the system. The primary button should use `button-primary`: solid green fill, white bold text, 50px height, 18px/16px padding, and a 12px radius for a strong, inviting CTA. Secondary buttons should use `button-secondary`: transparent background, thin gray border, dark text, and a smaller 4px radius to signal lower emphasis. Link-style actions should use `button-link`, with no border, no padding, and blue text only.

Cards should use `card`: white background, 1px light-gray border, 8px radius, and 16px padding. Keep them simple and functional; cards are separators and containers, not decorative panels. Avoid strong shadows or gradients.

Inputs should follow the same calm visual language as cards: white surface, subtle border, rounded corners, and generous padding. Focus states should be clear but not harsh, ideally using the brand green or blue as the emphasis color. Keep input labels bold and compact.

Chips and selector items should be compact, rounded, and readable, with enough horizontal padding to feel tappable. The language/navigation items at the bottom of the screen behave like lightweight chips: icon plus short label, neutral text, and a tidy spacing rhythm. Any icon buttons or selectors should remain minimal and never compete with the primary CTA.

## Do's and Don'ts
- Do keep the layout spacious and centered, with clear separation between illustration, messaging, and actions.
- Do use Duolingo green as the primary action color and reserve blue for links or secondary emphasis.
- Do favor friendly rounded type and bold labels over sharp, formal typography.
- Do use subtle borders and whitespace instead of heavy shadows to define structure.
- Don't overcrowd the page with too many competing colors or dense content blocks.
- Don't replace the soft charcoal text with pure black; keep the tone approachable.
- Don't make secondary actions visually stronger than the primary green CTA.
- Don't introduce sharp, angular component shapes that fight the playful brand feel.