import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import faqContent from "./content";
import type { FAQCategory } from "./content";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("project");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = faqContent.questions[activeCategory];

  return (
    <section className="bg-background py-20">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm uppercase tracking-[0.3em] text-[#4F8EF7]">
              {faqContent.title}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8 border-b border-border pb-4">
              {faqContent.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(0);
                  }}
                  className={`
                    relative
                    pb-3
                    text-base
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      activeCategory === category.id
                        ? "text-primary-text"
                        : "text-secondary-text hover:text-primary-text"
                    }
                  `}
                >
                  {category.label}

                  {activeCategory === category.id && (
                    <motion.span
                      layoutId="faq-category"
                      className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#4F8EF7]"
                    />
                  )}
                </button>
              ))}
            </div>

           <AnimatePresence mode="wait">
  <motion.div
    key={activeCategory}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.25 }}
    className="mt-12 space-y-5"
  >
              {questions.map((item, index) => (
                <motion.div
                  key={item.question}
                  layout
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#4F8EF7]/40 bg-[#4F8EF7]/5"
                      : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-8
                      py-7
                      text-left
                      transition-colors
                      duration-300
                      hover:bg-white/[0.02]
                    "
                  >
                    <h3 className="text-xl font-medium text-primary-text">
                      {item.question}
                    </h3>

                    <Plus
                      size={22}
                      className={`
                        transition-all
                        duration-300

                        ${
                          openIndex === index
                            ? "rotate-45 text-[#4F8EF7]"
                            : "text-secondary-text"
                        }
                      `}
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
               </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}