import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  category: string;
  title: string;
  description: string;
  results: string[];
  index: number;
};

export default function PortfolioCard({
  category,
  title,
  description,
  results,
  index,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="
        group
        rounded-3xl
        border
        border-border
        bg-white/[0.02]
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
hover:border-[#4F8EF7]/35
hover:bg-[#4F8EF7]/5
hover:shadow-[0_0_32px_rgba(79,142,247,0.08)]
      "
    >
      {/* Mockup */}

      <div
        className="
          relative
          h-56
          border-b
          border-border
          bg-gradient-to-br
          from-white/[0.04]
          to-transparent
          overflow-hidden
        "
      >
        <div className="absolute left-6 top-6 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/15" />
          <div className="h-2 w-2 rounded-full bg-white/10" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#4F8EF7]">
              {category}
            </p>

            <h3
  className="
    mt-3
    text-xl
    font-medium
    text-white
    transition-colors
    duration-300
    group-hover:text-[#4F8EF7]
  "
>
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <p
  className="
    leading-7
    text-secondary-text

    min-[1020px]:min-h-0
    max-[1019px]:min-h-[200px]
    max-[779px]:min-h-[0px]

    transition-colors
    duration-300

    group-hover:text-primary-text
  "
>
          {description}
        </p>

        <div className="mt-8 space-y-3">
          {results.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-primary-text"
            >
              <div
  className="
    h-1.5
    w-1.5
    rounded-full
    bg-[#4F8EF7]
    transition-all
    duration-300
    group-hover:scale-125
    group-hover:shadow-[0_0_10px_rgba(79,142,247,.5)]
  "
/>

              {item}
            </div>
          ))}
        </div>

        <Link
  to="/portfolio"
  className="
    mt-8
    flex
    items-center
    gap-2
    text-sm
    text-secondary-text
    transition-colors
    duration-300
    group-hover:text-[#4F8EF7]
  "
>
          View project

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
