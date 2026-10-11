export const cvaEvidence = {
  "principal": [
    {
      "definition": "T1",
      "unit": "units",
      "numerator": 224,
      "denominator": 179613,
      "fraction": 0.001247125764838848,
      "ci_lower": 0.001085539843855851,
      "ci_upper": 0.001409743674268744,
      "interval_model": "variant-cluster bootstrap 2000"
    },
    {
      "definition": "T1",
      "unit": "variants",
      "numerator": 224,
      "denominator": 154037,
      "fraction": 0.0014541960697754435,
      "ci_lower": 0.0012759288265480403,
      "ci_upper": 0.0016573287078928084,
      "interval_model": "Wilson superpopulation model"
    },
    {
      "definition": "T1_T2",
      "unit": "units",
      "numerator": 5517,
      "denominator": 179613,
      "fraction": 0.03071603948489252,
      "ci_lower": 0.029892623666438033,
      "ci_upper": 0.031579186359547005,
      "interval_model": "variant-cluster bootstrap 2000"
    },
    {
      "definition": "T1_T2",
      "unit": "variants",
      "numerator": 5207,
      "denominator": 154037,
      "fraction": 0.03380356667553899,
      "ci_lower": 0.032912624173005646,
      "ci_upper": 0.034717761120661196,
      "interval_model": "Wilson superpopulation model"
    },
    {
      "definition": "T1_T3",
      "unit": "units",
      "numerator": 32684,
      "denominator": 179613,
      "fraction": 0.18196901115175404,
      "ci_lower": 0.18004393416409642,
      "ci_upper": 0.18386778189238054,
      "interval_model": "variant-cluster bootstrap 2000"
    },
    {
      "definition": "T1_T3",
      "unit": "variants",
      "numerator": 31161,
      "denominator": 154037,
      "fraction": 0.20229555236728838,
      "ci_lower": 0.20029690088730603,
      "ci_upper": 0.20430905210914055,
      "interval_model": "Wilson superpopulation model"
    },
    {
      "definition": "T4",
      "unit": "units",
      "numerator": 34003,
      "denominator": 179613,
      "fraction": 0.18931257759738995,
      "ci_lower": 0.18737985515055935,
      "ci_upper": 0.19122305363070313,
      "interval_model": "variant-cluster bootstrap 2000"
    },
    {
      "definition": "T4",
      "unit": "variants",
      "numerator": 31073,
      "denominator": 154037,
      "fraction": 0.2017242610541623,
      "ci_lower": 0.1997277411623025,
      "ci_upper": 0.20373565770153082,
      "interval_model": "Wilson superpopulation model"
    }
  ],
  "history": {
    "snapshot_dates": [
      "2025-08-31",
      "2026-03-02",
      "2026-08-29"
    ],
    "baseline_cross_band_units": 29626,
    "observed_first_resolutions": 719,
    "lost_or_noncomparable": 682,
    "resolution_fraction_lower_bound": 0.024269222979815028,
    "resolution_fraction_upper_bound": 0.047289542969013706,
    "observation_limit": "Only snapshot-observed resolution is identified. Transient resolution and recurrence between snapshots cannot be excluded. Follow-up loss bounds do not bound all unobserved transient events.",
    "time_origin": "baseline observation of a prevalent conflict, not true onset",
    "event_interval": "(last observed cross-band disagreement, first observed cross-band resolution]",
    "open_lower_boundary_offset_days": 1e-06,
    "causal_interpretation": false,
    "turnbull_status": "estimated; experimental library implementation; envelopes bound survival conditional on fitted support masses, not confidence intervals",
    "turnbull_diagnostics": {
      "warnings": [],
      "bounded_monotone_finite": true,
      "unique_interval_types": 6,
      "weighted_observations": 29626,
      "tolerance": 1e-08,
      "definition": "Right-continuous P(T>t); bounds conditional on fitted Turnbull support masses, not confidence intervals or bounds across every possible nonunique MLE.",
      "implementation": "Pinned lifelines.fitters.npmle.npmle; experimental internal interface.",
      "support_masses": [
        {
          "left": 1e-06,
          "right": 183.0,
          "right_unbounded": false,
          "probability": 0.01549450913502601
        },
        {
          "left": 183.000001,
          "right": 363.0,
          "right_unbounded": false,
          "probability": 0.009139723891088419
        },
        {
          "left": 363.000001,
          "right": null,
          "right_unbounded": true,
          "probability": 0.9753657669738856
        }
      ]
    },
    "censoring_assumption": "Independent censoring is an assumption; loss-to-follow-up bounds are reported separately."
  },
  "scientific_source_bindings": {
    "analysis/2026-09/tables/principal_estimates.csv": "541a886a6a020d870632147e7e3bf7b8ba9294d4a60556ad05091bf9e3e40fae",
    "analysis/history/history_summary.json": "fc7b72669a79d19e49c1d2549f2682e41e42745c28781632286d819502bc8847"
  }
};
