import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";

const faqItems = [
  {
    question: "How long does a website project usually take?",
    answer:
      "Most projects take between 2 and 6 weeks depending on the scope, complexity and feedback speed.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different. Pricing depends on the number of pages, functionality, animations and integrations required.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can completely redesign outdated websites while improving user experience, performance and conversions.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for phones, tablets and desktops.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, updates and technical support after your website goes live.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Yes. We can integrate payment systems, CRMs, booking platforms, analytics and many other external services.",
  },
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-5xl">

            <p className="text-center text-sm uppercase tracking-[0.35em] text-[#4F8EF7]">
              FAQ
            </p>

            <h2 className="mt-5 text-center text-5xl font-semibold leading-tight text-primary-text">
              Questions before
              <br />
              starting your project.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-secondary-text">
              Everything you need to know before starting a project with North
              Digital Studio.
            </p>

            <div className="mt-16 space-y-5">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.question}
                  layout
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#4F8EF7]/40 bg-[#4F8EF7]/5"
                      : "border-border bg-card hover:border-[#4F8EF7]/20 hover:bg-white/[0.02]"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-300"
                  >
                    <h3 className="text-xl font-medium text-primary-text">
                      {item.question}
                    </h3>

                    <Plus
                      size={22}
                      className={`transition-all duration-300 ${
                        openIndex === index
                          ? "rotate-45 text-[#4F8EF7]"
                          : "text-secondary-text"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-8 py-6">
                          <p className="leading-8 text-secondary-text">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <Button
                href="/faq"
                variant="secondary"
                size="lg"
                withArrow
              >
                View All FAQs
              </Button>
            </div>

          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}