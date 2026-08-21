/** Live a3-site Pages leaf only. Sibling result sites are out of this repo's CI. */

export const A3_PAGES_URL = 'https://peterponyu.github.io/a3-site/';
export const HOMEPAGE_URL = 'https://peterponyu.github.io/';
export const SCPORTAL_URL = 'https://peterponyu.github.io/scportal/';
export const A3_GITHUB_URL = 'https://github.com/PeterPonyu/a3-site';

/**
 * Bookmark routes kept as the same figure-free landing (HTTP 200).
 * Must not become restored results pages.
 */
export const LANDING_ROUTES = [
  'https://peterponyu.github.io/a3-site/results/',
  'https://peterponyu.github.io/a3-site/methods/',
  'https://peterponyu.github.io/a3-site/evidence/',
  'https://peterponyu.github.io/a3-site/claims/',
];

/**
 * Unpublished-result tokens that must not appear on the public leaf.
 * Align with `scripts/verify-export.mjs`.
 */
export const LEAK_TOKENS = [
  'unpublished results',
  '未发表',
  'SOTA',
  'protein-mean AUROC',
  '0.725',
  '0.702',
];

export const ALLOWED_PUBLISHED_ARTICLE_DOIS = new Set([]);

export const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};
