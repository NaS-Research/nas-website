import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use | NaS Research",
  description: "Terms governing access to nasresearch.bio, NaS Research publications, and public research interfaces.",
  alternates: { canonical: "/legal/terms" },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance",
    paragraphs: [
      "These Terms of Use govern your access to nasresearch.bio and the public website features operated by NaS Research. By accessing or using the site, you agree to these terms and our Privacy Policy. If you do not agree, do not use the site.",
      "You must be legally able to enter into these terms. If you use the site on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    id: "purpose",
    title: "Purpose of the site",
    paragraphs: [
      "NaS publishes institutional information, research articles, technical documents, software and system descriptions, and experimental research interfaces. This material is provided for research, education, and general information.",
      "The site does not provide medical care, diagnosis, treatment, legal advice, or financial advice. Nothing on the site creates a clinician-patient, attorney-client, fiduciary, employment, agency, partnership, or research collaboration relationship. Seek a qualified professional for decisions that require professional judgment. Contact emergency services for an emergency.",
    ],
  },
  {
    id: "research-content",
    title: "Research content and publications",
    paragraphs: [
      "Scientific and technical work can change as evidence, methods, and systems develop. Our publications may discuss hypotheses, prototypes, projections, estimates, early findings, or limitations. We may correct, revise, replace, or withdraw material when appropriate.",
      "When a publication identifies a downloadable document as its version of record, that document controls if it differs from the web presentation. Citations and third-party material remain subject to their original sources and rights.",
      "You are responsible for evaluating methods, evidence, limitations, and fitness for your intended use. Do not rely on the site as the sole basis for a clinical, safety-critical, regulatory, investment, or other high-consequence decision.",
    ],
  },
  {
    id: "nicole",
    title: "Nicole and generated responses",
    paragraphs: [
      "Nicole is a research interface and may produce incomplete, outdated, or incorrect responses. Generated content can omit context or present information with more confidence than the evidence supports. You must independently verify important claims against appropriate primary sources and professional guidance.",
      "Do not use Nicole to diagnose or treat a person, make an emergency decision, or process patient records or other sensitive personal information. NaS may limit, suspend, change, or discontinue the interface at any time.",
    ],
  },
  {
    id: "permitted-use",
    title: "Permitted use",
    paragraphs: [
      "You may access the public site and use its content for lawful personal, educational, scholarly, and research purposes, subject to these terms, any notice attached to specific material, and applicable law.",
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited use",
    paragraphs: [
      "You may not misuse the site or help another person do so. Prohibited conduct includes:",
    ],
    items: [
      "Interfering with the operation, availability, or security of the site or attempting unauthorized access.",
      "Introducing malicious code, overwhelming the site with automated requests, or bypassing access controls.",
      "Using the site for unlawful, deceptive, infringing, abusive, or harmful activity.",
      "Impersonating NaS or another person, misrepresenting affiliation, or implying endorsement without written permission.",
      "Removing ownership notices or presenting NaS research or generated responses as verified clinical guidance.",
      "Submitting patient identifiers, confidential records, trade secrets, or data you do not have the right to provide.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The site, its original text, design, graphics, software, NaS name, and NaS marks are owned by or licensed to NaS, unless stated otherwise. These terms do not transfer any ownership rights or grant a license beyond the limited right to access and use the public site as described here.",
      "Specific publications, datasets, code, or other materials may carry separate license terms. Those terms control for that material. Rights provided by law, including fair use, are not restricted by these terms. You may not use the NaS name or marks in a way that suggests sponsorship, affiliation, or endorsement without prior written permission.",
    ],
  },
  {
    id: "communications",
    title: "Communications and feedback",
    paragraphs: [
      "Unless we agree otherwise in writing, messages and feedback sent to NaS are not confidential. Do not send material that you are not authorized to disclose.",
      "You retain any rights you hold in material you submit. You give NaS permission to receive, review, reproduce, and use that material as reasonably necessary to respond, operate the site, address security or legal issues, and evaluate feedback. General suggestions may be used without compensation or obligation to you.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party resources",
    paragraphs: [
      "The site may link to publications, datasets, websites, software, or services operated by others. Links are provided for context or convenience and do not necessarily mean NaS endorses the third party. We do not control and are not responsible for third-party content, availability, security, terms, or privacy practices.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      "To the fullest extent permitted by law, the site and its content are provided “as is” and “as available.” NaS disclaims warranties of accuracy, completeness, availability, merchantability, fitness for a particular purpose, noninfringement, and any warranties arising from course of dealing or usage of trade.",
      "NaS does not warrant that the site will be uninterrupted, secure, or error-free, or that research content and generated responses will meet your requirements. Nothing in these terms excludes a warranty or right that cannot lawfully be excluded.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, NaS and its founder, contributors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, goodwill, or business opportunity arising from or related to the site.",
      "Where liability cannot be excluded, NaS liability will be limited to the amount you paid NaS to use the website feature giving rise to the claim during the twelve months before the claim. Because the public site is currently provided without charge, that amount may be zero. Some jurisdictions do not allow certain limitations, so these limitations apply only to the extent permitted by law.",
    ],
  },
  {
    id: "changes",
    title: "Changes and availability",
    paragraphs: [
      "We may change, suspend, or discontinue any part of the site and may update these terms as our work or legal obligations change. The effective date at the top identifies the current version. Continued use after revised terms take effect means you accept the revised terms.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the State of Illinois, without regard to conflict of law principles. Any dispute that is not subject to a different requirement under applicable law will be brought in the state or federal courts located in Cook County, Illinois. If any provision is unenforceable, the remaining provisions will remain in effect.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about these terms may be sent to NaS Research in Chicago, Illinois at:",
    ],
    email: "dalronj.robertson@gmail.com",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · NaS Research"
      title="Terms of Use"
      summary="The rules for using our public website, reading NaS publications, and interacting with our experimental research tools."
      effectiveDate="July 21, 2026"
      sections={sections}
    />
  );
}
