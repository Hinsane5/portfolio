# Portfolio Backlog

Proposed improvements from the September 2026 design discussion. This is a
planning list and review record. The existing build phases remain in
[BUILD_PLAN.md](./BUILD_PLAN.md).

## Direction

- Keep the dark/light, typography-led identity and the five-project focus.
- Use the real project screenshots and information as the dimensional project
  experience. Do not add an unrelated 3D object or an HFG monogram.
- Let normal page scrolling move the project spiral and its progress indicator;
  do not autoplay or take over wheel and touch input.
- Keep the project evidence readable, and retain a direct all-projects view and
  detail pages for visitors who do not want to browse the spiral.

## Priority backlog

| ID   | Priority | Status                | Work                                                                                                                                                               | Done when                                                                                                                                         |
| ---- | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| D-01 | High     | Ready for review      | Build a scroll-driven project spiral from the existing screenshots, with an accessible progress rail and natural transition into Contact.                           | Scroll down and up follows direction, progress reverses, projects open in a detail dialog, and the runway does not trap normal page scrolling.    |
| D-02 | High     | Proposed              | Refine hero copy and hierarchy for an Apple Developer Academy reviewer. Replace the broad “Developer · Engineer” label with a specific, accurate statement.          | A visitor can understand Howard's range and focus from the first screen; all claims are supported by the projects.                                  |
| D-03 | High     | Complete              | Use existing project artwork in the home-page experience; provide a designed fallback where an image is missing.                                                     | Every project is identifiable at a glance, including the no-image hoshiBmaTchi entry.                                                             |
| D-04 | High     | Complete              | Present each project's existing description, impact, learning, technologies, and group-role labels in a scan-friendly detail view.                                  | Details open from both the spiral and all-projects grid, arrows change projects, and close returns to the previous context.                         |
| D-05 | Medium   | Proposed              | Tighten the visual system: clearer section hierarchy, varied spacing, and consistent restrained accents across the site.                                            | Dark and light themes feel coherent; text and controls remain legible and accessible.                                                               |
| D-06 | Medium   | Proposed              | Check mobile and reduced-motion behavior and keep the CSS 3D scene lightweight; use project images rather than introducing a standalone WebGL model.                 | The interaction remains usable by touch and keyboard, respects reduced motion, and does not autoplay.                                              |
| D-07 | High     | Pending domain choice | Deploy to Vercel and attach a custom domain. Compare the GitHub Student Developer Pack's eligible `.dev` offer with a purchased `.com`, including renewal cost.        | The production site, HTTPS, canonical URL, sitemap, and `NEXT_PUBLIC_SITE_URL` all use the chosen domain.                                           |

## Project spiral boundaries

- Build depth with CSS perspective and the project's actual screenshots. The
  scene follows scroll position and recent direction; it has no autoplay.
- Preserve native wheel, touch, and page scrolling. At the end of the runway the
  visitor can continue into Contact, and reverse scrolling returns to the same
  place in the spiral.
- Keep project cards, progress, arrows, and the all-projects link as semantic
  HTML controls. Reduced motion removes their transitions while preserving the
  navigation and progress behavior.
- Use the same project data for the home spiral, all-projects grid, and detail
  views. A missing image remains a sized placeholder instead of invented art.

## Open decisions

1. Review and tune the spiral's card spacing, depth, and scroll pace on the Vercel preview.
2. Approve final hero copy and the accent color.
3. Choose and register the production domain. Domain availability and student
   promotion eligibility must be checked at checkout; free registration does not
   imply free renewal.
