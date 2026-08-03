import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  LoaderCircle,
} from "lucide-react";

const steps = [
  {
    title: "Discovery completed",
    status: "done",
  },
  {
    title: "Strategy approved",
    status: "done",
  },
  {
    title: "Design approved",
    status: "done",
  },
  {
    title: "Development in progress",
    status: "active",
  },
  {
    title: "Launch",
    status: "todo",
  },
];

export default function ProjectStatus() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl
        border
        border-border
        bg-card
        p-10
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-text">
            Project Status
          </p>

          <h3 className="mt-3 text-2xl font-semibold">
            Current Progress
          </h3>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-[#4F8EF7]/30 bg-[#4F8EF7]/10 px-4 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#4F8EF7] animate-pulse" />

          <span className="text-sm font-medium text-[#4F8EF7]">
            Development
          </span>
        </div>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-border" />

      {/* Checklist */}

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
            }}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              transition-all
              duration-300

              hover:bg-[#4F8EF7]/5
            "
          >
            <div className="flex items-center gap-4">
              {step.status === "done" && (
                <CheckCircle2
                  size={20}
                  className="text-[#4F8EF7]"
                />
              )}

              {step.status === "active" && (
                <LoaderCircle
                  size={20}
                  className="animate-spin text-[#4F8EF7]"
                />
              )}

              {step.status === "todo" && (
                <Circle
                  size={20}
                  className="text-secondary-text"
                />
              )}

              <span
                className={`
                  transition-colors

                  ${
                    step.status === "todo"
                      ? "text-secondary-text"
                      : "text-primary-text"
                  }

                  group-hover:text-primary-text
                `}
              >
                {step.title}
              </span>
            </div>

            {step.status === "active" && (
              <span className="text-sm text-[#4F8EF7]">
                In Progress
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-border" />

      {/* Progress */}

      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-secondary-text">
            Progress
          </span>

          <span className="font-medium">
            68%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-background">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "68%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
            }}
            className="
              h-full
              rounded-full
              bg-[#4F8EF7]
              shadow-[0_0_18px_rgba(79,142,247,.45)]
            "
          />
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <div>
          <p className="text-sm text-secondary-text">
            Estimated completion
          </p>

          <p className="mt-1 font-medium">
            2–3 weeks
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background px-4 py-2 text-sm text-secondary-text">
          Last updated today
        </div>
      </div>
    </motion.div>
  );
}