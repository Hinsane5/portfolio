# Portfolio Backlog

Proposed improvements from the September 2026 design discussion. This is a
planning list, not a record of shipped features. The existing build phases remain
in [BUILD_PLAN.md](./BUILD_PLAN.md).

## Direction

- Keep the dark/light, typography-led identity and the five-project focus.
- Add one subtle 3D treatment behind the home hero copy, as background atmosphere
  instead of a standalone sculpture. Compare an oversized **HFG monogram** with
  interlocking rings; keep either form low contrast with graphite shading and a
  restrained blue edge light.
- Keep the background form secondary to the name and calls to action. The
  existing cursor, smooth scroll, and reveal animations already provide motion
  elsewhere.
- Improve the clarity of the first screen and make project evidence easier to
  scan. The work itself should remain the strongest part of the portfolio.

## Priority backlog

| ID   | Priority | Status                | Work                                                                                                                                                                       | Done when                                                                                                                               |
| ---- | -------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| D-01 | High     | Ready for review      | Compare desktop and mobile mockups of a low-contrast HFG monogram background and interlocking-rings background at `/design/hero-concepts`.                                 | Both treatments sit behind the hero copy at both sizes; the preferred form is selected after review.                                    |
| D-02 | High     | Proposed              | Refine hero copy and hierarchy for an Apple Developer Academy reviewer. Replace the broad “Developer · Engineer” label with a specific, accurate statement about the work. | A visitor can understand Howard's range and focus from the first screen; all claims are supported by the projects.                      |
| D-03 | High     | Proposed              | Add a visual preview to each home-page project row, using existing screenshots where available.                                                                            | Each project can be distinguished visually at a glance; the missing hoshiBmaTchi image still has a designed fallback.                   |
| D-04 | High     | Proposed              | Restructure project details around problem, contribution, and outcome, with screenshots near the claims they illustrate.                                                   | Each detail page is easy to scan, preserves the current project facts and group-role labels, and makes Howard's contribution clear.     |
| D-05 | Medium   | Proposed              | Build the approved background form as a small, isolated 3D scene with restrained pointer parallax on desktop.                                                              | The form rests when idle and remains subordinate to the copy, calls to action, and navigation.                                          |
| D-06 | Medium   | Proposed              | Tighten the visual system: larger section hierarchy, more varied spacing, and one restrained accent shared by the object, active navigation, and selected project details. | Dark and light themes feel coherent; text and controls remain legible and accessible.                                                   |
| D-07 | Medium   | Proposed              | Provide a static poster for loading, reduced motion, unsupported WebGL, and lower-power devices. Load the 3D scene only where it is shown.                                 | The hero remains complete and readable in every fallback state; mobile and desktop performance stay within the site's Lighthouse goals. |
| D-08 | High     | Pending domain choice | Deploy to Vercel and attach a custom domain. Compare the GitHub Student Developer Pack's eligible `.dev` offer with a purchased `.com`, including renewal cost.            | The production site, HTTPS, canonical URL, sitemap, and `NEXT_PUBLIC_SITE_URL` all use the chosen domain.                               |

## 3D background boundaries

- Desktop: keep the form behind the copy with subtle pointer parallax. Avoid
  continuous rotation, camera travel, and scroll-controlled scenes.
- Mobile: use a static or very low-motion background treatment. Keep the name and
  primary calls to action clear and easy to tap.
- Reduced motion: show a still image or still render. Follow the existing
  `prefers-reduced-motion` behavior across the site.
- Performance: lazy-load the scene, cap rendering resolution, and render only
  when the object changes. Keep project images and text as the content priority.
- Accessibility: the object is decorative unless it conveys information; hide a
  decorative canvas from assistive technology and keep all links in HTML.

## Open decisions

1. Choose the background form: HFG monogram or interlocking rings.
2. Approve final hero copy and the accent color in a visual mockup.
3. Choose and register the production domain. Domain availability and student
   promotion eligibility must be checked at checkout; free registration does not
   imply free renewal.
