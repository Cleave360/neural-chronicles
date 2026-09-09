# Cloudflare Pages Deployment

## Production Target

- Project folder: `app`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

## Recommended Pages Setup

1. Create a new Cloudflare Pages project connected to this repository.
2. Set the root directory to `app`.
3. Set the build command to `npm run build`.
4. Set the build output directory to `dist`.
5. Leave environment variables empty unless a future issue introduces external APIs.

## Routing

This app currently behaves as a static magazine with no client-side router.

For Wrangler Workers Assets deploys, SPA fallback is configured in `wrangler.toml`:

```toml
[assets]
directory = "./app/dist"
not_found_handling = "single-page-application"
```

Do not add a `public/_redirects` catch-all rule when using Wrangler, as it can trigger redirect loop validation errors.

## Headers And Caching

The deploy also includes `public/_headers` with these goals:

- add baseline security headers
- set immutable caching for built assets under `/assets/*`
- set shorter cache windows for top-level image files

## Custom Domain Checklist

Use this checklist when moving from the default `pages.dev` hostname to your publication domain.

This repository now includes explicit custom domain bindings in `wrangler.toml` for:

- `neural-chronicles.uk`
- `www.neural-chronicles.uk`

1. Open the Cloudflare Pages project and add the desired custom domain.
2. If the domain is already on Cloudflare DNS, let Pages create the required DNS record automatically.
3. If DNS is managed elsewhere, create the record exactly as Cloudflare Pages instructs during domain setup.
4. Wait for the domain status to become active before announcing the launch.
5. Confirm the site loads over `https://` without certificate warnings.
6. Verify that both the apex domain and `www` behavior are intentional.

Recommended domain decisions:

- choose one canonical hostname, usually either the apex domain or `www`
- redirect the non-canonical hostname to the canonical one in Cloudflare
- keep SSL mode set to `Full` or `Full (strict)` when the DNS zone is on Cloudflare

## Release-Day Verification

After the first production deploy completes, check these items manually:

1. Load the site on the Pages preview URL and on the custom domain.
2. Open the browser devtools network panel and confirm CSS, JS, and image assets return `200`.
3. Refresh a deep URL if you add routes later and confirm the SPA fallback still serves `index.html`.
4. Check the response headers for the homepage and confirm the security headers from `_headers` are present.
5. Test on mobile and desktop widths.
6. Confirm social links, external links, and any CTA buttons point to real destinations.

## Cache Invalidation Notes

This app is set up to avoid aggressive manual purges in normal releases.

- built files under `/assets/*` are content-hashed by Vite, so new deploys generate new filenames when the content changes
- those hashed assets are safe to cache aggressively because old HTML will reference the old filenames and new HTML will reference the new ones
- top-level images are cached for a shorter period, which reduces the need for emergency purges if an image is replaced

Use cache purge only when one of these happens:

1. a top-level file keeps the same URL but its content changed and visitors still see the old version
2. you changed Cloudflare caching rules and need to force fresh responses
3. a bad deploy was rolled back and edge nodes are still serving stale HTML

Preferred purge order:

1. purge individual URLs first when the affected files are known
2. purge everything only when the issue is widespread or hard to isolate

## Cloudflare Settings Notes

- avoid enabling HTML edge caching unless you have a clear invalidation plan
- keep automatic compression enabled
- enable Cloudflare Web Analytics only if you want lightweight traffic reporting without adding app code
- if you later add third-party scripts or embeds, re-check the Content Security Policy in `_headers`

## Pre-Launch Verification

Run these commands from `app` before pushing a release:

```bash
npm install
npm run lint
npm run build
npm audit --omit=dev
```

Expected current state:

- lint completes with warnings only, no errors
- build succeeds
- production audit reports zero vulnerabilities

For a full release-day runbook, see `LAUNCH_CHECKLIST.md` in the repository root.

## Future Issues

- Use `app_2` as the starting template for the next publication.
- If a future issue adds analytics, forms, or APIs, document required environment variables here before deploying.