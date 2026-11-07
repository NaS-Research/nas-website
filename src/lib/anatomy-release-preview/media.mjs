// Explicitly approved neutral template images for private webpage review. Replace only after genuine media handoff.
export const previewSlides = [
  {
    "id": "internal-heart",
    "title": "Internal heart",
    "availability": "Preview placeholder \u00b7 Not model imagery",
    "src": "/anatomy-release-preview/internal-heart-template.svg",
    "alt": "Neutral preview placeholder template for the internal heart development slot. Not an image of a biological model.",
    "kind": "template-placeholder",
    "isPlaceholder": true,
    "nativeWidth": 1920,
    "nativeHeight": 1080,
    "sha256": "a73b3f19123713deae2093fa3122bc8d24004e05e11d899d78e923f1b27df4a7",
    "privatePreviewUseVerified": true,
    "provenance": "Local code-native template tile expressly requested for private layout review; no model imagery or generation claim."
  },
  {
    "id": "artery-environment",
    "title": "Artery environment",
    "availability": "Preview placeholder \u00b7 Not model imagery",
    "src": "/anatomy-release-preview/artery-environment-template.svg",
    "alt": "Neutral preview placeholder template for the artery environment development slot. Not an image of a biological model.",
    "kind": "template-placeholder",
    "isPlaceholder": true,
    "nativeWidth": 1920,
    "nativeHeight": 1080,
    "sha256": "58cd116261687362db9d20442ce20b322ff130f6f8dc055f334eece20dd7f91c",
    "privatePreviewUseVerified": true,
    "provenance": "Local code-native template tile expressly requested for private layout review; no model imagery or generation claim."
  },
  {
    "id": "normal-rbc",
    "title": "Normal red blood cell",
    "availability": "Preview placeholder \u00b7 Not model imagery",
    "src": "/anatomy-release-preview/normal-rbc-template.svg",
    "alt": "Neutral preview placeholder template for the normal red blood cell development slot. Not an image of a biological model.",
    "kind": "template-placeholder",
    "isPlaceholder": true,
    "nativeWidth": 1920,
    "nativeHeight": 1080,
    "sha256": "ce98c913b5b2e346f6f466c79fad44cfe4172f23ec63a32d96de946965863101",
    "privatePreviewUseVerified": true,
    "provenance": "Local code-native template tile expressly requested for private layout review; no model imagery or generation claim."
  },
  {
    "id": "sickled-rbc",
    "title": "Sickled red blood cell",
    "availability": "Preview placeholder \u00b7 Not model imagery",
    "src": "/anatomy-release-preview/sickled-rbc-template.svg",
    "alt": "Neutral preview placeholder template for the sickled red blood cell development slot. Not an image of a biological model.",
    "kind": "template-placeholder",
    "isPlaceholder": true,
    "nativeWidth": 1920,
    "nativeHeight": 1080,
    "sha256": "fad7518e29dcf424687f48d50b1b2b9ddfa68c7c5a283c0a206e7026338c3759",
    "privatePreviewUseVerified": true,
    "provenance": "Local code-native template tile expressly requested for private layout review; no model imagery or generation claim."
  }
];
export const previewDemo = null;
export const physicianPerspective = {
  "quote": "The visual models make complex concepts more accessible. I’m excited to see the collection grow as a teaching resource.",
  "attribution": "— Courtney Mangum, MD",
  "status": "approved-for-publication",
  "reviewerApproved": true,
  "privateDisplayApprovedByFounder": true,
  "publicDisplayApprovedByFounder": true
};

export function physicianPerspectiveVisible(published, perspective = physicianPerspective) {
  return Boolean(perspective && (!published || (perspective.reviewerApproved === true && perspective.publicDisplayApprovedByFounder === true)));
}
