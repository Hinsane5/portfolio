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
   - `NEXT_PUBLIC_SITE_URL` = `https://howardfgoh.com`.
   - This feeds the canonical/OG URLs, `sitemap.xml`, and `robots.txt`.
4. Add `howardfgoh.com` under **Settings → Domains** in the Vercel project. Add
   `www.howardfgoh.com` too, then choose which hostname should be primary. Use
   the apex domain if you want the canonical URL to stay `howardfgoh.com`. Copy
   the exact DNS records Vercel shows for this project.
5. In Hostinger hPanel, open **Domains → Domain portfolio → howardfgoh.com →
   DNS / Nameservers → DNS records** and add the records Vercel provided. Keep
   DNS hosted at Hostinger unless you intend to move all DNS to Vercel; preserve
   any existing records used by email or other services.
6. Deploy. Every push to `main` redeploys; pull requests get preview URLs.

Vercel verifies the DNS and provisions HTTPS after the records resolve. Use the
values shown in your Vercel project's domain settings; the generic A/CNAME
targets can differ for a particular project. See [Vercel's custom domain
guide](https://vercel.com/docs/domains/set-up-custom-domain) and [Hostinger's DNS
Zone Editor guide](https://support.hostinger.com/en/articles/1583249-how-to-manage-dns-records-at-hostinger).

The domain decision and connection status are tracked in [BACKLOG.md](./BACKLOG.md).

## 3. Verify after deploy

- [ ] Home, `/projects`, and a `/projects/<id>` page all load.
- [ ] `/sitemap.xml` and `/robots.txt` resolve and use your real domain.
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
