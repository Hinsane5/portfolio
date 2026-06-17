# Deploy

The site is a static Next.js (App Router) app — no server runtime, no database.
It deploys to Vercel with zero config.

## 1. Push to GitHub

```bash
# from the project root, on the main branch
gh repo create portfolio --public --source=. --remote=origin --push
# or, if the repo already exists:
git remote add origin https://github.com/Hinsane5/<repo>.git
git push -u origin main
```

## 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected). Leave build settings as-is:
   - Build command: `next build`
   - Output: handled automatically
3. Add an environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://howardgoh.com`
     or the `https://<project>.vercel.app` Vercel gives you).
   - This feeds the canonical/OG URLs, `sitemap.xml`, and `robots.txt`.
4. Deploy. Every push to `main` redeploys; pull requests get preview URLs.

## 3. Verify after deploy

- [ ] Home, `/projects`, and a `/projects/<id>` page all load.
- [ ] `/(/)sitemap.xml` and `/robots.txt` resolve and use your real domain.
- [ ] Share the URL in a chat / on X — the OG card renders (`/opengraph-image`).
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse) on the production URL;
      target 90+ on Performance, Accessibility, Best Practices, SEO.
- [ ] Toggle the theme, tab through with the keyboard (focus rings show),
      and check the projects page on a phone.

## Local commands

```bash
npm install      # install dependencies
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # eslint
```

## Notes

- **Custom domain:** add it in Vercel → Project → Domains, then update
  `NEXT_PUBLIC_SITE_URL` to match and redeploy.
- **Remaining content:** add a hoshiBmaTchi screenshot to `public/projects/` and
  set its `images` array in `src/content/projects.ts` (the only placeholder left).
