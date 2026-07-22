import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | NaS Research",
  description: "How NaS Research collects, uses, protects, and shares information through nasresearch.bio.",
  alternates: { canonical: "/legal/privacy" },
};

const sections = [
  {
    id: "scope",
    title: "Scope",
    paragraphs: [
      "This Privacy Policy applies to nasresearch.bio and the public website features operated by NaS Research, including our research library, contact links, and Nicole interface. It does not apply to third-party websites, platforms, or services that may be linked from the site.",
      "NaS Research is currently a founder-led research organization based in Chicago, Illinois. In this policy, “NaS,” “we,” “us,” and “our” refer to NaS Research.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect information you choose to provide when you contact us by email. This may include your name, email address, affiliation, the contents of your message, and any attachments you send.",
      "When you use Nicole, your prompt and related technical request data are sent to the service that generates a response. Do not submit medical records, patient identifiers, confidential research data, trade secrets, or other sensitive personal information through Nicole.",
      "Our hosting and security providers may automatically process basic technical information needed to deliver and protect the site. This can include an IP address, browser and device information, requested pages, timestamps, referring pages, and error or security logs.",
      "The website does not currently offer user accounts, accept payments, or collect information through a general web form.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    paragraphs: [
      "NaS does not currently use targeted advertising cookies or intentionally deploy nonessential analytics cookies on this website. Essential technologies used by hosting, delivery, and security providers may operate to make the site available and protect it from misuse.",
      "If our use of cookies or analytics changes materially, we will update this policy and provide any choices required by applicable law.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "We use information to operate, maintain, secure, and improve the website; provide responses through Nicole; answer correspondence; understand interest in our work; investigate errors or misuse; and comply with legal obligations.",
      "We do not use information submitted through this website to provide medical care, diagnose a condition, or make a clinical decision about an individual.",
    ],
  },
  {
    id: "how-we-share-information",
    title: "How we share information",
    paragraphs: [
      "We may share information with service providers that support website hosting, security, email, and the Nicole interface. These providers process information for the services they perform for us and are subject to their own contractual and legal obligations.",
      "We may also disclose information when required by law, to protect the rights or safety of NaS or others, to investigate misuse, in connection with an organizational transaction, or with your direction or consent.",
      "NaS does not sell or rent personal information. We do not share personal information for cross-context behavioral advertising.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    paragraphs: [
      "We retain information only for as long as reasonably necessary for the purpose for which it was collected, including correspondence, security, recordkeeping, and legal obligations. Service providers may retain technical logs according to their own retention schedules.",
      "When information is no longer needed, we take reasonable steps to delete or deidentify it. Limited copies may remain temporarily in backups or where retention is required by law.",
    ],
  },
  {
    id: "security",
    title: "Security and sensitive information",
    paragraphs: [
      "We use reasonable administrative and technical measures designed to protect information. No website, network, or storage system can guarantee absolute security.",
      "This public website is not a patient portal or a system intended to receive protected health information. Please do not send patient records, government identification numbers, financial credentials, unpublished proprietary data, or other highly sensitive information through the site or ordinary email.",
    ],
  },
  {
    id: "children",
    title: "Children’s privacy",
    paragraphs: [
      "This website is intended for a general professional and adult audience. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us so we can review and delete it where appropriate.",
    ],
  },
  {
    id: "choices",
    title: "Your choices and rights",
    paragraphs: [
      "You may ask us to access, correct, or delete personal information you have provided to us. You may also ask a privacy question or withdraw consent where consent is the basis for processing. We will respond as required by applicable law and may need to verify your identity before completing a request.",
      "You can control browser technologies through your browser settings. Disabling essential technologies may affect how the site functions.",
    ],
  },
  {
    id: "international-use",
    title: "International use",
    paragraphs: [
      "NaS operates from the United States. If you access the website from another country, your information may be processed in the United States or other locations where our service providers operate. Those locations may have different data protection laws from your home jurisdiction.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may revise this policy as the website, our research services, or legal requirements change. The effective date at the top of this page identifies the current version. Material changes will be presented on this page or through another appropriate notice.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For privacy questions or requests, contact NaS Research in Chicago, Illinois at:",
    ],
    email: "dalronj.robertson@gmail.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal · NaS Research"
      title="Privacy Policy"
      summary="A clear account of the information involved when you visit our website, contact NaS, or use the Nicole research interface."
      effectiveDate="July 21, 2026"
      sections={sections}
    />
  );
}
