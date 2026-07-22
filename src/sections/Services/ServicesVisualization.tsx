import { motion } from "framer-motion";

const layers = [
  {
    title: "Business",
    subtitle: "Goals & services",
  },
  {
    title: "Customer",
    subtitle: "Experience & trust",
  },
  {
    title: "Website",
    subtitle: "Digital product",
  },
];

export default function ServicesVisualization() {
  return (
    <div
      className="
        relative
        h-[340px]
        overflow-hidden
        rounded-lg
        border
        border-border
        bg-surface
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="relative flex h-full items-center justify-center">

        <div className="relative w-[420px] h-[250px]">

          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.15,
              }}
              className="
                absolute
                left-1/2
                -translate-x-1/2
                w-[300px]
                rounded-xl
                border
                border-border
                bg-background/70
                backdrop-blur-sm
                px-8
                py-6
                text-center
              "
              style={{
                top: `${index * 60}px`,
                zIndex: 10 - index,
              }}
            >
              <h3 className="text-lg font-semibold text-primary-text">
                {layer.title}
              </h3>

              <p className="mt-2 text-sm text-secondary-text">
                {layer.subtitle}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[192px]
              h-12
              w-px
              bg-white/10
            "
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[238px]
              h-3
              w-3
              rounded-full
              bg-[#4F8EF7]
            "
          />

        </div>

      </div>
    </div>
  );
}