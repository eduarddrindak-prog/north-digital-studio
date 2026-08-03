import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

type Props = {
  title: string;
  description: string;
  index: number;
};

export default function ServiceItem({
  title,
  description,
  index,
}: Props) {
  return (
    <motion.article
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
        delay: index * 0.1,
      }}
      className="
        group
        relative
        rounded-xl
        border
        border-border
        bg-surface
        p-7
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#4F8EF7]/40
        hover:bg-[#4F8EF7]/5
        hover:shadow-[0_0_0_1px_rgba(79,142,247,0.08)]
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-[#4F8EF7]
            transition-colors
            duration-300
            group-hover:text-[#4F8EF7]
          "
        >
          0{index + 1}
        </span>

        <div
          className="
            h-px
            flex-1
            ml-4
            bg-border
            transition-all
            duration-300
            group-hover:bg-[#4F8EF7]/50
          "
        />
      </div>

      <h3
        className="
          mt-6
          text-2xl
          font-semibold
          tracking-tight
          text-primary-text
          transition-colors
          duration-300
          group-hover:text-[#4F8EF7]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          leading-relaxed
          text-secondary-text
          transition-colors
          duration-300
          group-hover:text-primary-text
        "
      >
        {description}
      </p>
    </motion.article>
  );
}