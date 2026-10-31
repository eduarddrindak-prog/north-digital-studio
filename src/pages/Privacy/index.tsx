import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to pilaruStudio. This Privacy Policy explains how personal information is collected, used, stored and protected when you visit this website or submit a project inquiry through the contact form.",
      "We respect your privacy and aim to process personal data in accordance with the General Data Protection Regulation (GDPR) and applicable French data protection laws.",
    ],
  },
  {
    title: "2. Data Controller",
    paragraphs: [
      "The person responsible for processing personal data collected through this website is Eduard Dryndak, based in France.",
      "Website: https://north-digital-studio.pages.dev/ · Email: pilarustudio@gmail.com. Contact us at this email address with questions about this policy or your personal data.",
    ],
  },
  {
    title: "3. Personal Data We Collect",
    paragraphs: [
      "When you submit the contact form, we collect the information you provide.",
      "Required fields: Your name, email address, project type, expected timeline and project details.",
      "Optional fields: Your company name, website address and estimated project budget.",
      "The contact form does not allow file uploads.",
    ],
  },
  {
    title: "4. Why We Use Your Information",
    paragraphs: [
      "We use submitted information to respond to your inquiry, discuss requirements, prepare a proposal and estimated pricing, and follow up on the same inquiry when needed. We do not use it for newsletters, advertising campaigns or unrelated marketing communications.",
    ],
  },
  {
    title: "5. Legal Basis for Processing",
    paragraphs: [
      "We process your information to respond to your project inquiry and, where applicable, to take steps at your request before entering into a potential service agreement. We do not use your information for unrelated marketing or advertising.",
    ],
  },
  {
    title: "6. How Your Information Is Processed",
    paragraphs: [
      "When you submit the contact form, your information is transmitted to Formspree, which processes the submission and sends an email notification to pilarustudio@gmail.com.",
      "The website owner reviews the inquiry and responds manually by email. The website owner is the only person who accesses inquiries for the purpose of managing project requests. Third-party service providers may process information as necessary to provide their services.",
    ],
  },
  {
    title: "7. Third-Party Services",
    paragraphs: [
      "Cloudflare Pages is used to host this website and may process technical information, including IP addresses and server request data, to deliver and protect the website.",
      "Formspree processes contact form submissions and forwards notifications by email. Gmail is used to receive and store these notifications. GTranslate provides translation functionality on the same website domain and may process technical information required to provide this service.",
      "These providers operate under their own privacy policies and terms. Any international transfer of personal data must comply with applicable GDPR requirements and safeguards.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "Formspree's free plan provides a submission history archive with a 30-day retention period.",
      "Email notifications received through Gmail are stored separately. The website owner intends to delete inquiry-related emails no later than 12 months after receipt, unless a longer retention period is required by law or is necessary to establish, exercise or defend legal claims.",
      "Information is otherwise retained only for as long as necessary for the purposes described in this Privacy Policy.",
    ],
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We rely on the security measures provided by our hosting, form processing and email service providers.",
      "The website owner restricts access to submitted inquiries to the purpose of responding to project requests. Third-party providers may process technical or submission-related information as necessary to operate their services.",
      "No method of electronic transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "10. Your Data Protection Rights",
    paragraphs: [
      "Subject to applicable law, you may request access to, correction or deletion of your personal data, restriction of processing, object to certain processing, or request data portability. To exercise these rights, email pilarustudio@gmail.com. You may also lodge a complaint with the French Data Protection Authority (CNIL) at https://www.cnil.fr/.",
    ],
  },
  {
    title: "11. Analytics and Cookies",
    paragraphs: [
      "We do not use analytics or advertising services to track visitors or create advertising profiles.",
      "We have checked the website configuration and did not identify non-essential tracking cookies at the time of the last review.",
      "Technical storage mechanisms may still be used by hosting and translation services where necessary to provide their functionality.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy when the website, services or data processing practices change. The latest version and its update date will be published on this page.",
    ],
  },
  {
    title: "13. Contact",
    paragraphs: [
      "For questions about this policy or how your information is handled, contact Eduard Dryndak at pilarustudio@gmail.com.",
    ],
  },
  {
    title: "14. Legal Notice",
    paragraphs: [
      "Information about the website publisher and hosting provider is available on our Legal Notice page.",
    ],
    link: true,
  },
];

export default function Privacy() {
  return (
    <section className="bg-background py-20 md:py-28">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="notranslate text-xs uppercase tracking-[0.35em] text-[#4F8EF7]">
              PILARUSTUDIO · PRIVACY
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary-text md:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-secondary-text">Last updated: October 30, 2026</p>
            <div className="mt-14 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-primary-text md:text-2xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8 text-secondary-text">
                      {paragraph}
                    </p>
                  ))}
                  {"link" in section && section.link && (
                    <p className="mt-4 leading-8">
                      <a
                        className="text-primary-text underline underline-offset-4 hover:text-[#4F8EF7]"
                        href="/legal"
                      >
                        Legal Notice
                      </a>
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
