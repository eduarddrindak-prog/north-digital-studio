import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";

import { finalCTA } from "./content";

export default function FinalCTA() {
  return (
    <section className="bg-background py-section">
      <SectionContainer>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-surface
            px-6
            py-16
            text-center
            transition-all
            duration-500

            hover:-translate-y-1
            hover:border-[#4F8EF7]/30
            hover:shadow-[0_0_60px_rgba(79,142,247,.08)]

            md:px-12
            lg:px-16
            lg:py-20
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-48
              w-[520px]
              -translate-x-1/2
              rounded-full
              bg-[#4F8EF7]/10
              blur-[120px]

              opacity-0
              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />

          {/* Gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(79,142,247,.10),transparent_65%)]

              opacity-0
              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />

          {/* Accent dots */}

          <div
            className="
              absolute
              left-14
              top-14
              h-2
              w-2
              rounded-full
              bg-[#4F8EF7]/50

              transition-all
              duration-500

              group-hover:scale-150
              group-hover:bg-[#4F8EF7]
            "
          />

          <div
            className="
              absolute
              bottom-14
              right-14
              h-2
              w-2
              rounded-full
              bg-[#4F8EF7]/35

              transition-all
              duration-500

              group-hover:scale-150
            "
          />

          <div className="relative mx-auto max-w-3xl">
            <p
              className="
                mb-5
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#4F8EF7]

                transition-all
                duration-300

                group-hover:tracking-[0.45em]
              "
            >
              START YOUR PROJECT
            </p>

            <h2
              className="
                whitespace-pre-line
                text-4xl
                font-semibold
                leading-tight

                transition-all
                duration-300

                group-hover:-translate-y-1

                lg:text-6xl
              "
            >
              {finalCTA.heading}
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-secondary-text

                transition-colors
                duration-300

                group-hover:text-primary-text
              "
            >
              {finalCTA.description}
            </p>

            <div
              className="
                mt-10
                flex
                justify-center

                transition-transform
                duration-300

                group-hover:scale-[1.04]
              "
            >
              <Button
                href="/contact"
                size="lg"
                rounded="full"
                withArrow
              >
                {finalCTA.button}
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}