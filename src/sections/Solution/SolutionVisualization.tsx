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
    <div
      className="
        relative
        rounded-lg
        border
        border-border
        bg-surface
        overflow-hidden
        px-8
        py-12
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex items-center w-full lg:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                relative
                border
                border-border
                rounded-xl
                bg-white/[0.02]
                px-6
                py-5
                min-w-[180px]
              "
            >
              <div
                className="
                  absolute
                  -top-3
                  left-6
                  w-6
                  h-6
                  rounded-full
                  bg-[#4F8EF7]/10
                  border
                  border-[#4F8EF7]/25
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  text-[#4F8EF7]
                "
              >
                {index + 1}
              </div>

              <h3 className="text-base font-medium text-primary-text">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-secondary-text">
                {step.description}
              </p>
            </motion.div>

            {index !== steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.15,
                }}
                className="
                  hidden
                  lg:block
                  origin-left
                  w-20
                  h-px
                  bg-white/10
                "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}