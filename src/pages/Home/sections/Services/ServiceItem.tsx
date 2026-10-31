import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        delay: index * 0.1,
      }}
      className="
        group
      "
    >
      <Link
        to="/services"
        className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-x-3 rounded-xl px-4 py-5 transition-colors duration-200 hover:bg-white/[0.025] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:gap-x-5 sm:px-5 sm:py-6"
      >
        <span className="pt-0.5 font-mono text-xs tracking-[0.12em] text-[#7eacff] sm:text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0">
          <span className="block text-base font-semibold tracking-tight text-primary-text transition-colors group-hover:text-[#7eacff] sm:text-lg">
            {title}
          </span>
          <span className="mt-1.5 block max-w-2xl text-sm leading-relaxed text-secondary-text sm:mt-2">
            {description}
          </span>
        </span>

        <ArrowRight
          size={17}
          aria-hidden="true"
          className="mt-0.5 text-[#7eacff] transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
