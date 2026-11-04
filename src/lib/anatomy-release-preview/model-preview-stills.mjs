export const modelPreviewStills=Object.freeze({
  "lymphocyte": {
    "src": "/anatomy-release-preview/model-stills/lymphocyte-no-corner-ui-0275205435e6da10.svg",
    "sha256": "0275205435e6da1067b3e42321860cde4d15b0b3fb71ad186f77f628e4e51294",
    "width": 944,
    "height": 531,
    "capturedModelSHA256": "42c2980ce1b9563e5887ba3da6127e72de496e87002f023f59cc1b28d2d88ce2",
    "reviewedDecisionSHA256": "a71e6c568bc7c71e1a19d92dfc11f7971eb946e4a4585b1f6da1f3198ed56b55",
    "source": "Presentation-only SVG retains the exact reviewed PNG and covers only the captured UI instruction in empty black space. No model crop, geometry, lighting or anatomy change; not a new native render.",
    "sourcePNG": "/anatomy-release-preview/model-stills/lymphocyte-c79fcb0e7efff635.png",
    "sourcePNGSHA256": "c79fcb0e7efff635203726213b9c5dee4307de23dbb823f94320262319169f34"
  },
  "normal-rbc": {
    "src": "/anatomy-release-preview/model-stills/normal-rbc-no-corner-ui-9e984961e86ae363.svg",
    "sha256": "9e984961e86ae36307c6697d55a70859caa69d0fce190bd614f3f3f81abe0eba",
    "width": 944,
    "height": 531,
    "capturedModelSHA256": "147a5665c19bdfb6698ab6c37b69d51c77eaa1d7559d518e35200b6f48ab399e",
    "reviewedDecisionSHA256": "0acbf9d07416041029301411c43cfc9ce9ea5602166f5294b9de1b2cf565f564",
    "source": "Presentation-only SVG retains the exact reviewed PNG and covers only the captured UI instruction in empty black space. No model crop, geometry, lighting or anatomy change; not a new native render.",
    "sourcePNG": "/anatomy-release-preview/model-stills/normal-rbc-197bc70651f26c0c.png",
    "sourcePNGSHA256": "197bc70651f26c0c415f20096d3a1aafa2e904e73134600334b48e066f25745a"
  },
  "internal-heart-cutaway": {
    "src": "/anatomy-release-preview/model-stills/internal-heart-cutaway-no-corner-ui-427b78fabc6f1a40.svg",
    "sha256": "427b78fabc6f1a403d9de859d1d8a31b2152aeca40afb56272926627fe0301f9",
    "width": 944,
    "height": 531,
    "capturedModelSHA256": "34129d1be6e98323a4eb55145b839897f8876bb5503d2b3084109e280ebe28bf",
    "reviewedDecisionSHA256": "52d83eac082f7ef0ac1c036d460614fb3da5e40ce20bcff9cc50bc162586573b",
    "source": "Presentation-only SVG retains the exact reviewed PNG and covers only the captured UI instruction in empty black space. No model crop, geometry, lighting or anatomy change; not a new native render.",
    "sourcePNG": "/anatomy-release-preview/model-stills/internal-heart-cutaway-12157fdca0ffb6fa.png",
    "sourcePNGSHA256": "12157fdca0ffb6faffd79bb4a06e75a917340f74850febf027b26a1526f08dac"
  }
});
export const modelPreviewStill=id=>modelPreviewStills[id]||null;
