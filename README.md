# Triku app site

Static content for `https://app.triku.in`.

The site has two responsibilities:

1. Provide browser fallbacks for Triku deep links such as `/contests/:id`, `/events/:id`, and `/wallet`.
2. Host version-controlled static pages that the mobile app may display in a WebView under `/pages/`.

GitHub Actions publishes only the `site/` directory to GitHub Pages.

## Verified app links

Before verified Android App Links and iOS Universal Links are enabled, add these generated files to `site/.well-known/`:

- `assetlinks.json`, containing the production Android package and every accepted signing-certificate SHA-256 fingerprint.
- `apple-app-site-association`, containing the Apple Team ID and production bundle ID.

Do not publish placeholder identifiers. See `association-files/README.md` for the required inputs and templates.

## Static WebView pages

Place standalone pages below `site/pages/`. Keep them free of secrets, session tokens, and privileged operations. The app should allowlist exact `https://app.triku.in/pages/` URLs before opening them in a WebView.

## Local preview

```bash
python3 -m http.server 8080 --directory site
```

Then open `http://localhost:8080`.
