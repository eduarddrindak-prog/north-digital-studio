import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  number: string;
  title: string;
  description: string;
  index: number;
};

export default function ProcessStep({
  number,
  title,
  description,
  index,
}: Props) {
  return (

    
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
      }}
      className="
        group
        relative
        grid
        grid-cols-[2rem_minmax(0,1fr)]
        gap-x-3
        gap-y-2
        rounded-3xl
        border
        border-border
        bg-card
        p-5
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#4F8EF7]/50
        hover:bg-[#4F8EF7]/5
        md:block
        md:p-7
      "
    >
      <div className="col-start-1 row-start-1 flex items-center justify-between">
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-[#4F8EF7]/30
            bg-[#4F8EF7]/10
            text-sm
            font-medium
            notranslate text-[#4F8EF7]
            md:h-10
            md:w-10
          "
        >
          {number}
        </div>

        <ArrowUpRight
          size={18}
          className="
            hidden
            text-secondary-text
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:notranslate text-[#4F8EF7]
            md:block
          "
        />
      </div>

      <h3 className="
        row-start-1
        self-center
        text-base
        font-semibold
        transition-colors
        duration-300
        group-hover:notranslate text-[#4F8EF7]
        md:mt-8
        md:text-xl
      ">
        {title}
      </h3>

      <p className="col-start-2 mt-0 text-sm leading-relaxed text-secondary-text md:mt-4 md:text-base md:leading-7">
        {description}
      </p>
    </motion.article>
  );
}
