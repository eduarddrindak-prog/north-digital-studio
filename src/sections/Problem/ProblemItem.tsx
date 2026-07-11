import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ProblemItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
};

export default function ProblemItem({
  icon: Icon,
  title,
  description,
  index,
  isLast,
}: ProblemItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const step = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative border-t border-border pt-6 md:pt-8"
    >
      {!isLast && (
        <span
          className="hidden md:block absolute top-[2.75rem] -right-[calc(var(--spacing-component)/2)] w-[var(--spacing-component)] h-px bg-border"
          aria-hidden="true"
        />
      )}

      <span className="text-xs text-muted-text tracking-widest mb-5 block">
        {step}
      </span>

      <div className="flex items-start gap-3 mb-3">
        <Icon
          className="w-5 h-5 text-secondary-text mt-0.5 shrink-0"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <p className="text-muted-text text-sm leading-relaxed pl-8">
        {description}
      </p>
    </motion.li>
  );
}
