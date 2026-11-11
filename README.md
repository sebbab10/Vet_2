# Dyżur weta – strona dyżuru weterynaryjnego (PL)

Static site (no build step). Files: `index.html`, `nieobecny.html` (shown when the doctor is unavailable), `style.css`, `config.js`, `availability.js`, `script.js`.

## Edit
Everything you will want to change is in **`config.js`**: doctor name, phone number, weekly hours, fallback clinic, and a manual "unavailable" switch (`override.active: true` – holiday, illness).

Availability is computed in the visitor's browser using the `Europe/Warsaw` time zone. The status updates on page load.

## Git
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Cloudflare Pages
Connect the repo, then: Framework preset **None**, Build command **empty**, Build output directory **/** (root).
