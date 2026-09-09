export const atlasRelease = {
  "slug": "alphagenome-atlas-rnu4-2",
  "title": "AlphaGenome Atlas in RNU4-2: a focused computational benchmark",
  "shortTitle": "AlphaGenome Atlas in RNU4-2",
  "type": "Research Note",
  "area": "Computational Genomics",
  "date": "September 9, 2026",
  "dateISO": "2026-09-09",
  "version": "1.2",
  "authors": [
    "NaS Research"
  ],
  "readTime": "8 min read",
  "pdfUrl": "/research/papers/alphagenome-atlas-rnu4-2.pdf",
  "reproducibilityUrl": "/research/atlas-rnu42/reproducibility.zip",
  "reviewState": "NAS-AGA-001 · AI-assisted computational review · Not peer reviewed",
  "abstract": "We compared AlphaGenome Atlas variant-impact scores with published experimental effects in RNU4-2. A focused benchmark of 435 transcript variants, with reproducible analysis and clearly stated limits.",
  "summary": "We compared AlphaGenome Atlas AVI scores with published saturation genome editing measurements for 435 single-nucleotide variants across the 145-base RNU4-2 transcript. AVI showed a weak positive rank correlation with experimental cell-fitness loss (Spearman r = 0.144). CADD 1.7 scored 0.088. The paired difference interval included zero. Within-position allele concordance was 49.2%, close to its 50% chance expectation. These results provide no clear evidence of better ranking than CADD in this assay. This focused result is consistent with a limitation already discussed by the Atlas authors [2, p.18].",
  "sections": [
    {
      "id": "question",
      "title": "Question",
      "paragraphs": [
        "Does AVI track measured variant effects in a non-protein-coding RNA, and does it distinguish alternate changes at the same position? Overall correlation can reflect differences between genomic regions. Within-position ordering asks a narrower question about allele discrimination."
      ]
    },
    {
      "id": "results",
      "title": "Results",
      "paragraphs": [
        "The primary comparison includes 435 transcript variants at 145 positions. All variants had an AVI score. The difference intervals include zero, so this analysis does not establish superior ranking by AVI over CADD. These are rank-based comparisons, not diagnostic accuracy estimates."
      ],
      "resultsTable": [
        [
          "Metric",
          "AVI",
          "CADD 1.7",
          "AVI minus CADD"
        ],
        [
          "Spearman correlation",
          "0.144 [0.007, 0.260]",
          "0.088 [-0.045, 0.225]",
          "0.056 [-0.033, 0.137]"
        ],
        [
          "Within-position concordance",
          "49.2% [44.1, 54.3]",
          "45.5% [40.1, 50.7]",
          "3.7 [-3.7, 10.9] pp"
        ]
      ],
      "figures": [
        {
          "src": "/research/atlas-rnu42/figure-1-score-agreement.png",
          "height": 840,
          "alt": "AVI and CADD scores against experimental cell-fitness loss for 435 RNU4-2 transcript variants",
          "caption": "Figure 1. Predicted scores versus experimental loss. The AVI correlation is 0.144; CADD is 0.088. Each point is a variant. AVI uses the raw API score."
        },
        {
          "src": "/research/atlas-rnu42/figure-2-performance.png",
          "height": 860,
          "alt": "AVI and CADD correlation and within-position concordance with 95 percent bootstrap intervals",
          "caption": "Figure 2. Paired position-cluster bootstrap intervals from 2,000 resamples. The 0.5 reference applies only to the within-position pair-ordering statistic. Concordance differences in the table are percentage points."
        }
      ]
    },
    {
      "id": "data-and-methods",
      "title": "Data and methods",
      "paragraphs": [
        "We used the final published Supplementary Table 1 from De Jonghe et al. (2026) [1]. Of 539 engineered edits, 453 were SNVs. The primary cohort comprised all 435 transcript SNVs; 18 downstream SNVs were reserved for a prespecified sensitivity analysis and 86 other edits were excluded. Every forward-strand hg38 reference allele matched the UCSC reference sequence [4]. All 453 AVI scores were retrieved through the authenticated official Atlas client on 9 September 2026 UTC; no scores were missing. The endpoint was negative function_score_mean, representing cell-fitness loss. The comparator was CADD 1.7 from the same source table. We used the API raw AVI score, not a clinical or PHRED cutoff. Spearman correlation is invariant to strictly increasing score transformations."
      ]
    },
    {
      "id": "uncertainty",
      "title": "Uncertainty and allele ordering",
      "paragraphs": [
        "For the within-position metric, we compared all three pairs of alternative alleles at each site. Correct ordering scored 1, reversed ordering 0, and prediction ties 0.5; pairs tied experimentally were excluded. Site averages received equal weight. We used 2,000 paired bootstrap resamples of positions, preserving each site’s alternate alleles, with seed 20260909. Intervals are percentile 95% intervals conditional on this one assay. We did not tune scores, fit a model, select a clinical threshold, or optimize the cohort against results."
      ]
    },
    {
      "id": "sensitivity",
      "title": "Sensitivity analysis",
      "paragraphs": [
        "Including all 453 SNVs yielded AVI r = 0.172 and CADD r = 0.120. The paired difference was 0.052 [-0.028, 0.131]. This did not materially change the interpretation. Secondary all-SNV allele-ordering estimates are retained in results.json but are not promoted as a separate confirmatory finding."
      ]
    },
    {
      "id": "interpretation",
      "title": "Interpretation and limits",
      "paragraphs": [
        "The correlation of 0.144 describes rank agreement; it is not 14.4% accuracy. Similarly, 49.2% is a within-site pair-ordering statistic, not clinical classification accuracy. The data suggest limited rank agreement for this RNA and experimental endpoint. The near-chance allele ordering highlights a limitation that an overall correlation alone could obscure. However, tiny differences in experimental measurements can reverse allele order; our ordering metric does not incorporate replicate-level measurement uncertainty. Nearby sites may also be dependent, beyond the clustering captured by the bootstrap. HAP1 cell fitness is not patient severity, clinical pathogenicity, or performance across all non-coding variants. Failure to establish an advantage is not proof that the methods are equivalent."
      ]
    },
    {
      "id": "previous-work",
      "title": "Relationship to previous work",
      "paragraphs": [
        "Google's Atlas preprint explicitly identifies RNU4-2 as an example of a training-data gap: standard poly(A)-selected RNA sequencing excludes non-polyadenylated noncoding RNAs [2, p.18]. This is a plausible context for our result, not a mechanism established by this analysis. The authors report the highest Spearman correlation in eight of ten held-out SGE screens [2, p.5]; strong aggregate performance does not imply equal performance in every gene or assay. They already evaluate RNU4-2 [2, Methods p.28]. Our work is a focused reanalysis of an existing screen, not a first benchmark or new independent experimental validation. We used the final 2026 source table and did not reproduce Google's exact filtered input snapshot. The analysis plan was internally frozen before AVI retrieval, not externally preregistered. We do not establish that Atlas is broadly inaccurate or contradict Google's aggregate performance claims."
      ]
    },
    {
      "id": "reproducibility",
      "title": "Reproducibility and review",
      "paragraphs": [
        "Deterministic code produced all numerical results. Independent formulations reproduced the point estimates; source-value comparisons, input hashes, and exact bootstrap replay passed. Public experimental data and the free non-commercial API were used. No patient-level records or paid data services were required. NaS Research prepared this report with AI assistance. A separate computational audit checked every source field, score, coordinate, estimate, and interval. This is AI-assisted verification, not external expert review or peer review. No clinical recommendation is made. Reproduction files accompany the web edition."
      ]
    }
  ],
  "sourcesIntro": "Experimental measurements, model methods, reference coordinates, and output terms are documented in the sources below. Links open in a new tab.",
  "sources": [
    {
      "title": "[1] De Jonghe et al. (2026). Saturation editing of RNU4-2 reveals distinct dominant and recessive disorders. Nature.",
      "url": "https://doi.org/10.1038/s41586-026-10334-9"
    },
    {
      "title": "[2] Cheng et al. (2026). AlphaGenome Atlas preprint, Discussion p.18; evaluation pp.5 and 28.",
      "url": "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/alphagenome-atlas.pdf"
    },
    {
      "title": "[3] Google DeepMind. AlphaGenome Atlas API reference.",
      "url": "https://www.alphagenomedocs.com/api/atlas.html"
    },
    {
      "title": "[4] UCSC Genome Browser API. hg38 reference, chr12:120291752-120291903 (0-based half-open).",
      "url": "https://api.genome.ucsc.edu/getData/sequence?genome=hg38;chrom=chr12;start=120291752;end=120291903"
    },
    {
      "title": "[5] AlphaGenome Output Terms of Use.",
      "url": "https://deepmind.google.com/science/alphagenome/output-terms"
    }
  ],
  "publicationNote": "Research note v1.2, published September 9, 2026. The PDF is the fixed version of record. Earlier v1.0 and v1.1 drafts were not public. This edition adds an expanded AI-assisted computational audit; all numerical results are unchanged. Computational verification is not external expert review or peer review. The public package includes the matched data, frozen analysis, audit receipt, and numerical replay instructions."
};
