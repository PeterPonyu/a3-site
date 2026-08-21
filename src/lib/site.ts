/**
 * a3-site — substitution-score strip (not a shared science-gateway shell).
 */
export const SITE = {
  slug: 'a3-site',
  shortName: 'a3-site',
  mark: 'A3',
  title: 'Protein language-model substitution-score study',
  kicker: 'LLR strip · fold-stability proxy',
  lead: 'Public site leaf for this GitHub repository. Not a published article. This page does not include figures or result numbers.',
  physicalObject:
    'Protein language-model substitution scores treated as a fold-stability proxy, not a binding-partner ΔΔG.',
  primaryClaim: '',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
  github: 'https://github.com/PeterPonyu/a3-site',
  externalLeaves: [
    { href: 'https://peterponyu.github.io/', label: 'Lab home' },
    { href: 'https://peterponyu.github.io/scportal/', label: 'Protein index' },
  ],
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
    disabledReason: 'No article DOI for this substitution-score leaf',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  {
    href: '/results',
    label: 'Scores',
    number: '01',
    blurb:
      'PLM substitution scores as a fold-stability proxy — not a binding-partner table, and not hosted here.',
  },
  {
    href: '/methods',
    label: 'Protocol',
    number: '02',
    blurb: 'Raw log-likelihood-ratio audit on substitution scores, unclamped.',
  },
  {
    href: '/evidence',
    label: 'Axes',
    number: '03',
    blurb:
      'Where the fold-stability proxy holds and where a partner interface would break it — numbers withheld.',
  },
  {
    href: '/claims',
    label: 'Limits',
    number: '04',
    blurb: 'Falsifiers for treating substitution scores as partner ΔΔG.',
  },
] as const;

export type PageBinding = {
  pageId: string;
  runnerId: string;
  dataId: string;
  lawId: string;
  sharedRunner: 'chrome.llr-strip';
};

export const PAGE_BINDINGS = {
  home: {
    pageId: 'a3.page.home',
    runnerId: 'a3.runner.home-llr-kicker',
    dataId: 'a3.data.stats-plateau',
    lawId: 'a3.law.llr-fold-proxy-not-partner',
    sharedRunner: 'chrome.llr-strip',
  },
  results: {
    pageId: 'a3.page.results',
    runnerId: 'a3.runner.results-fig7-binding',
    dataId: 'a3.data.figures-f7-f5-f8-f11',
    lawId: 'a3.law.binding-partner-break',
    sharedRunner: 'chrome.llr-strip',
  },
  methods: {
    pageId: 'a3.page.methods',
    runnerId: 'a3.runner.methods-raw-llr-audit',
    dataId: 'a3.data.six-axis-protocol',
    lawId: 'a3.law.unclamped-raw-score',
    sharedRunner: 'chrome.llr-strip',
  },
  evidence: {
    pageId: 'a3.page.evidence',
    runnerId: 'a3.runner.evidence-interface-collapse',
    dataId: 'a3.data.skempi-abag-spearman',
    lawId: 'a3.law.interface-correlation-collapse',
    sharedRunner: 'chrome.llr-strip',
  },
  claims: {
    pageId: 'a3.page.claims',
    runnerId: 'a3.runner.claims-plateau-and-proxy',
    dataId: 'a3.data.claims-650m-skempi',
    lawId: 'a3.law.falsifiable-plm-boundary',
    sharedRunner: 'chrome.llr-strip',
  },
} as const satisfies Record<string, PageBinding>;

export const STATS = [] as const;
export const RESULTS_FIGURES = [] as const;
export const EVIDENCE_TILES = [] as const;
export const METHODS_SUMMARY =
  'See the GitHub repository. This site does not publish figures or result numbers.' as const;
export const CLAIMS = [] as const;
