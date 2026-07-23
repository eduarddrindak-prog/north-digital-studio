import { motion } from "framer-motion";

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
      className="relative"
    >
      {/* Line */}

      {index !== 3 && (
        <div
          className="
            hidden
            lg:block
            absolute
            top-5
            left-[62px]
            w-[calc(100%-40px)]
            h-px
            bg-border
          "
        />
      )}

      {/* Number */}

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

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-secondary-text">
        {description}
      </p>
    </motion.article>
  );
}