import { permanentRedirect } from "next/navigation";

// Keep old bookmarks working without a separate discipline landing page.
export default function LegacyLearningPage() {
  permanentRedirect("/learn");
}
