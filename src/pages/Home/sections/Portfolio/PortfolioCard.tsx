import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        hover:border-white/20
        hover:-translate-y-1
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

            <h3 className="mt-3 text-xl font-medium text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <p className="leading-7 text-secondary-text">
          {description}
        </p>

        <div className="mt-8 space-y-3">
          {results.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-primary-text"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#4F8EF7]" />

              {item}
            </div>
          ))}
        </div>

        <button
          className="
            mt-8
            flex
            items-center
            gap-2
            text-sm
            text-secondary-text
            transition-colors
            group-hover:text-white
          "
        >
          View project

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  );
}