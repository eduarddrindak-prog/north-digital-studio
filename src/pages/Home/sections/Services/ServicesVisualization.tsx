import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

const features = [
  "Clear message",
  "Professional image",
  "More enquiries",
];

export default function SolutionVisualization() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
          }}
          className="
            group
            w-full
            max-w-[1280px]
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-background/70
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#4F8EF7]/30
            hover:bg-background/85
            hover:shadow-[0_0_40px_rgba(79,142,247,0.06)]
          "
        >
          {/* Browser */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>

            <div className="text-xs tracking-wide text-secondary-text">
              northstudio.fr
            </div>
          </div>

          <div
  className="
    grid
    grid-cols-2
    gap-12
    p-16
    min-[780px]:min-h-[420px]
    max-[779px]:grid-cols-1
    max-[779px]:gap-8
    max-[779px]:p-8
  "
>
            <div
  className="
    flex
    flex-col
    justify-center
    max-[779px]:items-center
    max-[779px]:text-center
  "
>
              <h3 className="text-3xl font-semibold leading-tight text-primary-text">
                Websites designed around your business.
              </h3>

              <Button
  href="/services"
  withArrow
  size="sm"
  className="mt-8"
>
  Explore Services
</Button>

              <div className="mt-16 hidden min-[780px]:grid grid-cols-3 gap-4">
                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-5
                    transition-all
                    duration-300
                    group-hover:border-[#4F8EF7]/30
                    group-hover:bg-[#4F8EF7]/5
                  "
                >
                  <div className="mb-2 h-2 w-8 rounded bg-[#4F8EF7]/70" />
                  <div className="h-3 w-full rounded bg-white/8" />
                </div>

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                    transition-all
                    duration-300
                    group-hover:border-[#4F8EF7]/30
                    group-hover:bg-[#4F8EF7]/5
                  "
                >
                  <div className="mb-2 h-2 w-8 rounded bg-[#4F8EF7]/70" />
                  <div className="h-2 w-full rounded bg-white/8" />
                </div>

                <div
                  className="
                    rounded-lg
                    border
                    border-border
                    p-4
                    transition-all
                    duration-300
                    group-hover:border-[#4F8EF7]/30
                    group-hover:bg-[#4F8EF7]/5
                  "
                >
                  <div className="mb-2 h-2 w-8 rounded bg-[#4F8EF7]/70" />
                  <div className="h-2 w-full rounded bg-white/8" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-border
                    bg-background/40
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4F8EF7]/40
                    hover:bg-[#4F8EF7]/5
                  "
                >
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[#4F8EF7]/10
                      text-xs
                      font-semibold
                      text-[#4F8EF7]
                      transition-colors
                      duration-300
                      group-hover:bg-[#4F8EF7]/15
                    "
                  >
                    ✓
                  </div>

                  <span className="text-sm font-medium text-primary-text">
                    {feature}
                  </span>
                </motion.div>
              ))}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.55,
                }}
                className="
  mt-2
  hidden
  min-[780px]:block
  rounded-lg
  border
  border-[#4F8EF7]/20
  bg-[#4F8EF7]/5
  px-4
  py-3
  transition-all
  duration-300
  group-hover:border-[#4F8EF7]/30
  group-hover:bg-[#4F8EF7]/10
"
              >
                <p className="text-sm text-secondary-text">
                  A professional website that clearly explains your business
                  and encourages visitors to get in touch.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}