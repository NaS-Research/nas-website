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
    "src": "/anatomy-release-preview/model-stills/normal-rbc-native-1920-ab8bc6a3da9f550b.webp",
    "sha256": "ab8bc6a3da9f550b71dae507aabfc9c2c4db51510b7bc723a04287d2cca766d8",
    "width": 3840,
    "height": 2160,
    "capturedModelSHA256": "147a5665c19bdfb6698ab6c37b69d51c77eaa1d7559d518e35200b6f48ab399e",
    "sourceCaptureReceiptSHA256": "70b2d32cf2c3925bf2ddef88add4d40d310c21e2eae2059ccaaf33e392d8f17d",
    "source": "Responsive1920/3840 lossless WebP derivatives of the reviewed actual native4K canonical model capture. Native-size derivative verified RGBA-pixel-identical to master; no AI, crop, UI mask or upscale.",
    "srcSet": "/anatomy-release-preview/model-stills/normal-rbc-native-1920-ab8bc6a3da9f550b.webp 1920w, /anatomy-release-preview/model-stills/normal-rbc-native-3840-b4a01b1bca83a7d8.webp 3840w",
    "nativeMasterSHA256": "f8928ddf0d4494f4b9379c0d858741f037270491b61e5ec5b4b0d303faeb972d",
    "variants": [
      {
        "src": "/anatomy-release-preview/model-stills/normal-rbc-native-1920-ab8bc6a3da9f550b.webp",
        "width": 1920,
        "height": 1080,
        "sha256": "ab8bc6a3da9f550b71dae507aabfc9c2c4db51510b7bc723a04287d2cca766d8",
        "bytes": 135818,
        "nativeMasterPixelsEqual": null
      },
      {
        "src": "/anatomy-release-preview/model-stills/normal-rbc-native-3840-b4a01b1bca83a7d8.webp",
        "width": 3840,
        "height": 2160,
        "sha256": "b4a01b1bca83a7d8d19fb7707e6c4dee065a7a460c1ec17dd86329efcaa0f5d8",
        "bytes": 412400,
        "nativeMasterPixelsEqual": true
      }
    ]
  },
  "internal-heart-cutaway": {
    "src": "/anatomy-release-preview/model-stills/internal-heart-cutaway-native-1920-9cdb0f92662fc5dd.webp",
    "sha256": "9cdb0f92662fc5dd0c9ccc5b3a52cb8b755564972ef77a7eca8e85852e6c0a1e",
    "width": 3840,
    "height": 2160,
    "capturedModelSHA256": "34129d1be6e98323a4eb55145b839897f8876bb5503d2b3084109e280ebe28bf",
    "sourceCaptureReceiptSHA256": "99e546093d481e27b12e50a89301276b8c17384f7da165c9a4c568b1946e15b7",
    "source": "Responsive1920/3840 lossless WebP derivatives of the reviewed actual native4K canonical model capture. Native-size derivative verified RGBA-pixel-identical to master; no AI, crop, UI mask or upscale.",
    "srcSet": "/anatomy-release-preview/model-stills/internal-heart-cutaway-native-1920-9cdb0f92662fc5dd.webp 1920w, /anatomy-release-preview/model-stills/internal-heart-cutaway-native-3840-b6565e406d8f4476.webp 3840w",
    "nativeMasterSHA256": "1968b839a83d1dd72e89d28d3fd58d97f69d710209a34dbab4bfae0c11f17173",
    "variants": [
      {
        "src": "/anatomy-release-preview/model-stills/internal-heart-cutaway-native-1920-9cdb0f92662fc5dd.webp",
        "width": 1920,
        "height": 1080,
        "sha256": "9cdb0f92662fc5dd0c9ccc5b3a52cb8b755564972ef77a7eca8e85852e6c0a1e",
        "bytes": 454998,
        "nativeMasterPixelsEqual": null
      },
      {
        "src": "/anatomy-release-preview/model-stills/internal-heart-cutaway-native-3840-b6565e406d8f4476.webp",
        "width": 3840,
        "height": 2160,
        "sha256": "b6565e406d8f4476da4090aebf82c98663d8e21cc4ea9f8bd21827da777e6111",
        "bytes": 1452784,
        "nativeMasterPixelsEqual": true
      }
    ]
  }
});
export const modelPreviewStill=id=>modelPreviewStills[id]||null;
