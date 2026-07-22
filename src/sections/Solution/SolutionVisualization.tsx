import { motion } from "framer-motion";

const steps = [
  {
    title: "Business",
    description: "Goals & services",
  },
  {
    title: "Strategy",
    description: "Clear structure",
  },
  {
    title: "Website",
    description: "Professional experience",
  },
  {
    title: "Customers",
    description: "More enquiries",
  },
];

export default function SolutionVisualization() {
  return (
    <div className="relative h-[340px] overflow-hidden rounded-lg border border-border bg-surface">

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative flex h-full items-center justify-center">

        <div className="flex flex-col items-center">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center"
            >
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
                  delay: index * 0.12,
                }}
                className="
                  relative
                  w-[280px]
                  rounded-xl
                  border
                  border-border
                  bg-background/70
                  backdrop-blur-sm
                  px-7
                  py-5
                  text-center
                "
              >
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#4F8EF7]/30
                    bg-[#4F8EF7]/10
                    text-[11px]
                    text-[#4F8EF7]
                  "
                >
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-primary-text">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-secondary-text">
                  {step.description}
                </p>
              </motion.div>

              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + index * 0.12,
                  }}
                  className="
                    origin-top
                    h-10
                    w-px
                    bg-white/10
                  "
                />
              )}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}