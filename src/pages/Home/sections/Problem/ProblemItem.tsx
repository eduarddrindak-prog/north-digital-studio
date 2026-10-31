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
}: ProblemItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const step = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="
group
relative
border-t
border-border
pt-5
md:pt-8
transition-all
duration-300
"
    >


      <span className="mb-3 block text-xs tracking-widest text-muted-text md:mb-5">
        {step}
      </span>

      <div className="mb-2 flex items-start gap-3 md:mb-3">
       <Icon
  className="
    mt-0.5
    h-5
    w-5
    shrink-0
    text-secondary-text
    transition-colors
    duration-300
    group-hover:notranslate text-[#4F8EF7]
  "
  strokeWidth={1.5}
  aria-hidden="true"
/>
        <h3
  className="
    text-base
    md:text-lg
    font-medium
    transition-colors
    duration-300
    group-hover:notranslate text-[#4F8EF7]
  "
>{title}</h3>
      </div>

      <p
  className="
    pl-8
    text-sm
    leading-relaxed
    text-muted-text
    transition-colors
    duration-300
    group-hover:text-secondary-text
  "
>
        {description}
      </p>
    </motion.li>
  );
}
