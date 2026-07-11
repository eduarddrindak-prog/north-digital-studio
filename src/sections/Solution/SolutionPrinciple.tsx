import { motion } from "framer-motion";

interface SolutionPrincipleProps {
  title: string;
  description: string;
  index: number;
}

export default function SolutionPrinciple({
  title,
  description,
  index,
}: SolutionPrincipleProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="border-t border-border pt-6"
    >
      <div className="flex items-start gap-4">
        <span className="text-sm text-muted-text">
          0{index + 1}
        </span>

        <div>
          <h3 className="text-lg font-medium text-primary-text">
            {title}
          </h3>

          <p className="mt-3 text-secondary-text leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}