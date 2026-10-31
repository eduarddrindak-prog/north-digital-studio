import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

const sections = [
  {
    title: "1. Website Publisher",
    paragraphs: [
      "Website name: pilaruStudio · Website URL: https://north-digital-studio.pages.dev/",
      "Publisher: Eduard Dryndak · Country: France · Email: pilarustudio@gmail.com",
      "The website is currently operated as an independent project and is not published by a registered company.",
]
  },
  {
    title: "2. Publication Director",
    paragraphs: ["Publication Director: Eduard Dryndak."],
  },
  {
    title: "3. Hosting Provider",
    paragraphs: [
      "This website is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States. Telephone: +1 888 993 5273. Website: https://www.cloudflare.com/.",
    ],
  },
  {
    title: "4. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the content published on this website, including text, website design, graphics, visual elements and branding, is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify or commercially use website content without prior permission from the relevant rights holder, except where permitted by law. Third-party materials remain the property of their respective owners.",
    ],
  },
  {
    title: "5. External Services",
    paragraphs: [
      "This website uses Cloudflare Pages for hosting, Formspree for contact form processing, Google Gmail for receiving contact inquiries, and GTranslate for website translation. These services are subject to their respective terms and privacy policies.",
    ],
  },
  {
    title: "6. Personal Data",
    paragraphs: [
      "Information submitted through the contact form is processed as described in our Privacy Policy.",
    ],
    link: true,
  },
  {
    title: "7. Contact",
    paragraphs: [
      "For questions concerning this website or its content, contact pilarustudio@gmail.com.",
    ],
  },
];

export default function Legal() {
  return (
    <section className="bg-background py-20 md:py-28">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="notranslate text-xs uppercase tracking-[0.35em] text-[#4F8EF7]">
              PILARUSTUDIO · LEGAL
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-primary-text md:text-7xl">
              Legal Notice
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
                  {section.link && (
                    <p className="mt-4 leading-8">
                      <a className="text-primary-text underline underline-offset-4 hover:text-[#4F8EF7]" href="/privacy">
                        Privacy Policy: /privacy
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
