/**
 * a3-site — public Pages leaf. No figures or result numbers on the site.
 */
export const SITE = {
  slug: 'a3-site',
  shortName: 'a3-site',
  title: 'Protein language-model substitution-score study',
  kicker: 'ZF Lab',
  lead: 'Public site leaf for this GitHub repository. Not a published article. This page does not include figures or result numbers.',
  physicalObject: '',
  primaryClaim: '',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
  github: 'https://github.com/PeterPonyu/a3-site',
} as const;

export type BadgeConfig = {
  label: string;
  href?: string;
  enabled: boolean;
  disabledReason?: string;
};

export const BADGES = {
  code: {
    label: 'Code',
    href: SITE.github,
    enabled: true,
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: 'https://peterponyu.github.io/a3-site/',
    enabled: true,
  } satisfies BadgeConfig,
  archive: {
    label: 'Archive',
    href: 'https://doi.org/10.5281/zenodo.21869995',
    enabled: true,
  } satisfies BadgeConfig,
  articleDoi: {
    label: 'Article DOI',
    enabled: false,
    disabledReason: 'On acceptance',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  { href: '/results', label: 'Results', number: '01' },
  { href: '/methods', label: 'Methods', number: '02' },
  { href: '/evidence', label: 'Evidence', number: '03' },
  { href: '/claims', label: 'Claims', number: '04' },
] as const;

/** Unique infra binding per route. Shared chrome is chrome.page-shell only. */
export type PageBinding = {
  pageId: string;
  runnerId: string;
  dataId: string;
  lawId: string;
  sharedRunner: 'chrome.page-shell';
};

export const PAGE_BINDINGS = {
  home: {
    pageId: 'a3.page.home',
    runnerId: 'a3.runner.home-llr-kicker',
    dataId: 'a3.data.stats-plateau',
    lawId: 'a3.law.llr-fold-proxy-not-partner',
    sharedRunner: 'chrome.page-shell',
  },
  results: {
    pageId: 'a3.page.results',
    runnerId: 'a3.runner.results-fig7-binding',
    dataId: 'a3.data.figures-f7-f5-f8-f11',
    lawId: 'a3.law.binding-partner-break',
    sharedRunner: 'chrome.page-shell',
  },
  methods: {
    pageId: 'a3.page.methods',
    runnerId: 'a3.runner.methods-raw-llr-audit',
    dataId: 'a3.data.six-axis-protocol',
    lawId: 'a3.law.unclamped-raw-score',
    sharedRunner: 'chrome.page-shell',
  },
  evidence: {
    pageId: 'a3.page.evidence',
    runnerId: 'a3.runner.evidence-interface-collapse',
    dataId: 'a3.data.skempi-abag-spearman',
    lawId: 'a3.law.interface-correlation-collapse',
    sharedRunner: 'chrome.page-shell',
  },
  claims: {
    pageId: 'a3.page.claims',
    runnerId: 'a3.runner.claims-plateau-and-proxy',
    dataId: 'a3.data.claims-650m-skempi',
    lawId: 'a3.law.falsifiable-plm-boundary',
    sharedRunner: 'chrome.page-shell',
  },
} as const satisfies Record<string, PageBinding>;

export const STATS = [] as const;

export const RESULTS_FIGURES = [] as const;

export const EVIDENCE_TILES = [] as const;

export const METHODS_SUMMARY =
  'See the GitHub repository. This site does not publish figures or result numbers.' as const;

export const CLAIMS = [] as const;
