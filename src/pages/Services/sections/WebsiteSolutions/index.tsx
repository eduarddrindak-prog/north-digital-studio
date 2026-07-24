import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import { fadeLeft, fadeRight } from "@/lib/animations";

import { websiteTypes } from "../../content";

import WebsiteCard from "./WebsiteCard";

export default function WebsiteSolutions() {
  return (
    <section className="py-section bg-background">
        
      <SectionContainer
        className="
          max-w-[1500px]
          flex
          flex-col
        "
      >
        <motion.div
          {...fadeLeft}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#4F8EF7]">
            Website Solutions
          </p>

          <h2
            className="
              mt-5
              text-5xl
              lg:text-7xl
              font-semibold
              leading-[0.95]
              tracking-tight
            "
          >
            Find the right website
            <br />
            for your business.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-xl
              leading-relaxed
              text-secondary-text
            "
          >
            Every business has different goals. Choose the website solution
            that best matches your needs today and supports your growth
            tomorrow.
          </p>
        </motion.div>

        <motion.div
          {...fadeRight}
          className="
            mt-24
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          {websiteTypes.map((website) => (
            <WebsiteCard
              key={website.id}
              website={website}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </section>
  );
}