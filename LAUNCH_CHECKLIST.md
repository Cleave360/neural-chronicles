# Neural Chronicles Launch Checklist

Use this checklist on publication day for `neural-chronicles.uk`.

## 1) Pre-Deploy Local Validation

Run from `app`:

```bash
npm install
npm run lint
npm run build
npm audit --omit=dev
```

Expected result:

- lint has no errors
- build succeeds
- audit reports zero production vulnerabilities

## 2) Git And Deploy

Run from repository root:

```bash
git status
git push origin main
```

Then in Cloudflare Pages:

1. Confirm latest commit is deployed.
2. Confirm build settings are unchanged:
- root directory: `app`
- build command: `npm run build`
- output directory: `dist`

## 3) Domain And SSL

In Cloudflare Pages custom domains:

1. Confirm `neural-chronicles.uk` is active.
2. If using `www`, verify redirect behavior is intentional.
3. Confirm HTTPS certificate status is active.

## 4) Live Smoke Tests

Check in a browser:

1. `https://neural-chronicles.uk/` loads.
2. Hero, section navigation, and footer load correctly.
3. Contact email link opens mail client:
- `mailto:team@neural-chronicles.uk`
4. Mobile and desktop layouts are both acceptable.

Optional command checks:

```bash
curl -I https://neural-chronicles.uk/
curl -I https://neural-chronicles.uk/assets/
```

## 5) Metadata And Preview Validation

Confirm page source includes:

- `<title>Neural Chronicles</title>`
- canonical URL to `https://neural-chronicles.uk/`
- Open Graph tags
- Twitter card tags

Share a test link in a private chat to validate social preview image/title.

## 6) Post-Deploy Cache Guidance

Do not purge cache by default.

- Vite hashed assets under `/assets/*` are versioned automatically.
- Purge specific URLs only if stale content persists.
- Purge all cache only for broad, unresolved staleness.

## 7) Rollback Procedure

If a release breaks production:

1. Roll back to the previous successful deployment in Cloudflare Pages.
2. Verify homepage and assets return `200`.
3. Open an issue in the repo with root cause and fix plan.

## 8) Publication Sign-Off

Before announcement, confirm:

1. No placeholder links remain.
2. Publication branding matches domain: `Neural Chronicles`.
3. Contact email is visible and correct: `team@neural-chronicles.uk`.
4. Site is reachable from a mobile device on cellular network.
