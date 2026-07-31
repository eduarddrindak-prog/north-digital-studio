import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

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

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          {...fadeUp}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#4F8EF7]">
            FAQ
          </p>

          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Everything you need to know before starting your project with North
            Digital Studio.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mx-auto max-w-5xl space-y-5">
  {faqItems.map((item, index) => (
    <motion.div
      key={item.question}
      {...fadeUp}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
  openIndex === index
    ? "border-[#4F8EF7]/40 bg-[#4F8EF7]/5"
    : "border-white/10 bg-white/[0.02]"
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
          hover:bg-white/[0.03]
        "
      >
        <h3 className="text-xl font-medium text-white">
          {item.question}
        </h3>

        <span
          className={`text-3xl transition-transform duration-300 ${
            openIndex === index ? "rotate-45 text-[#4F8EF7]" : "text-white/40"
          }`}
        >
          <Plus
    size={22}
    className={`transition-all duration-300 ${
        openIndex === index
            ? "rotate-45 text-[#4F8EF7]"
            : "text-white/40"
    }`}
/>
        </span>
      </button>

      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-8 py-6">
              <p className="leading-8 text-white/60">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</div>

        {/* Bottom CTA */}

        <motion.div
          {...fadeUp}
          className="mx-auto mt-24 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-sm"
        >
          <p className="text-3xl font-semibold text-white">
            Didn't find your question?
          </p>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/60">
            Explore our complete FAQ where we answer everything about pricing,
            development, timelines, support and much more.
          </p>

          <Button
            variant="secondary"
            size="lg"
            rounded="full"
            className="mt-10 border-[#4F8EF7] hover:bg-[#4F8EF7]"
          >
            View All FAQs
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
