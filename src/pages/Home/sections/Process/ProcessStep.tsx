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
rounded-3xl
border
border-border
bg-card
p-7

transition-all
duration-300

hover:-translate-y-2
hover:border-[#4F8EF7]/50
hover:bg-[#4F8EF7]/5
"
    >

      {/* Number */}

      <div className="flex items-center justify-between">

      <div
        className="
          w-10
          h-10
          rounded-full
          border
          border-[#4F8EF7]/30
          bg-[#4F8EF7]/10
          flex
          items-center
          justify-center
          text-sm
          text-[#4F8EF7]
          font-medium
        "
      >
        {number}
      </div>

      <ArrowUpRight
    size={18}
    className="
      text-secondary-text
      transition-all
      duration-300

      group-hover:translate-x-1
      group-hover:-translate-y-1
      group-hover:text-[#4F8EF7]
    "
  />
</div>

      <h3 className="
mt-8
text-xl
font-semibold

transition-colors
duration-300

group-hover:text-[#4F8EF7]
">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-secondary-text">
        {description}
      </p>
    </motion.article>
  );
}
