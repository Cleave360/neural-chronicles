# Neural Chronicles

Neural Chronicles is a monthly digital magazine focused on AI, agentic AI, and AI systems. This app contains the first publication as a static React and Vite site designed for deployment on Cloudflare Pages.

## Scripts

- `npm run dev`: start the local Vite development server.
- `npm run lint`: run ESLint checks.
- `npm run build`: create the production static build in `dist`.
- `npm run preview`: serve the production build locally.

## Deployment

The production deployment target for this issue is Cloudflare Pages.

- Root directory: `app`
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: `Vite`

See `DEPLOY.md` for the exact Pages configuration, headers, caching behavior, and the SPA redirect strategy for future issues if client-side routes are introduced.

## Notes

- `app_2` is kept as a template for a future publication.
- The production build includes Cloudflare `_headers` from `public`.
- SPA fallback behavior is handled by `wrangler.toml` (`not_found_handling = "single-page-application"`).
