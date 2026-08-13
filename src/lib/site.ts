/**
 * a3-site — science gateway config (generated; edit in site-configs.mjs + re-scaffold).
 */
export const SITE = {
  slug: 'a3-site',
  shortName: "PLM boundary",
  title: "Where protein language model zero-shot mutation-effect scores hold and where they break",
  kicker: "ZF Lab · PLM reliability",
  lead: "Zero-shot log-likelihood ratios score substitution consequences — DMS fitness, ClinVar labels, thermodynamic ΔΔG, antibody liabilities. The likelihood is a fold-stability proxy: it does not read the binding partner.",
  physicalObject: "Single-residue substitutions and their biological consequences across six decision axes.",
  primaryClaim: "ESM-2 LLR tracks binding ΔΔG only as a weak fold-destabilization proxy — correlation collapses for antibody–antigen interfaces and non-interface positions.",
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
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
    enabled: false,
    disabledReason: 'No anonymous public HTTPS 200 yet',
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: "https://peterponyu.github.io/a3-site/",
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

export const STATS = [
  {
    "value": "0.725",
    "label": "protein-mean AUROC · n=69 plateau"
  },
  {
    "value": "0.702",
    "label": "full ProteinGym · 217 assays"
  },
  {
    "value": "0.20",
    "label": "binding ΔΔG Spearman overall"
  }
] as const;

export const RESULTS_FIGURES = [
  {
    "src": "/media/F7_binding_boundary.png",
    "alt": "Binding boundary figure showing interface collapse",
    "caption": "Fig 7 — binding partner is the strongest physical break (hero)."
  },
  {
    "src": "/media/F5_stability_ddg.png",
    "alt": "Stability ΔΔG calibration",
    "caption": "Fig 5 — weak fold-stability proxy across homology hold-out."
  },
  {
    "src": "/media/F8_developability_map.png",
    "alt": "Antibody developability liabilities",
    "caption": "Fig 8 — no BH-significant polyreactivity or aggregation hits."
  },
  {
    "src": "/media/F11_boundary_atlas.png",
    "alt": "Synthesis boundary atlas",
    "caption": "Fig 11 — synthesis map, not new measurements."
  }
] as const;

export const EVIDENCE_TILES = [
  {
    "value": "0.08",
    "label": "antibody–antigen binding Spearman"
  },
  {
    "value": "≈0",
    "label": "non-interface binding positions"
  },
  {
    "value": "0/14",
    "label": "BH-significant polyreactivity sets"
  }
] as const;

export const METHODS_SUMMARY = "Uniform raw-score audit of ESM-2 LLR across six axes with bootstrap intervals. Scores never clamped or per-assay rescaled. 69-protein plateau reported separately from 217-assay ProteinGym corroboration." as const;

export const CLAIMS = [
  {
    "claim": "650M parameters plateau for DMS discrimination; 3B adds no gain.",
    "scope": "69-protein subset; 0.725 at 650M and 3B within bootstrap CI.",
    "refutation": "Show significant AUROC gain at 3B on the same panel with the same protocol."
  },
  {
    "claim": "LLR does not read the binding partner — fold proxy only.",
    "scope": "SKEMPI binding ΔΔG; Fig 7 locked table.",
    "refutation": "Demonstrate interface-aware correlation without fold confound on the same table."
  }
] as const;
