# a3-site Pages landing tests (Playwright)

Browser policy gate for **this repo's** GitHub Pages leaf only (`https://peterponyu.github.io/a3-site/`). It does **not** crawl sibling paper sites.

## Contract

| Check | Rule |
|---|---|
| Home | HTTP 200 code-description leaf |
| Leak tokens | No `unpublished results` / `未发表` / `SOTA` / `0.725` / `0.702` / `<img>` |
| Bookmark routes | `/results/` `/methods/` `/evidence/` `/claims/` stay the same figure-free **200** landing |
| Chrome | Sticky header with Homepage + SCPortal |
| Layout | No horizontal overflow on Home @ 1280 and 390 |
| Packaging | No venue-intended / under review / BibTeX kit |
| Links | Public `PeterPonyu/a3-site`; no HetCLOP href; no invented article DOI |

Daily cron is intentionally off. Runs on push/PR, after Pages deploy, or `workflow_dispatch`.

## Run locally

```bash
cd pages-gateway-tests
npm ci
npx playwright install chromium
npm test
```
