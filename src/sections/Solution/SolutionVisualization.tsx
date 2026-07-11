import { motion } from "framer-motion";

export default function SolutionVisualization() {
  return (
    <>
      {/* Desktop */}

      <div
        className="
          hidden
          md:block
          relative
          h-[360px]
          rounded-lg
          border
          border-border
          bg-surface
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

        {/* Complex */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            absolute
            left-16
            top-1/2
            -translate-y-1/2
            w-32
            h-32
            rounded-xl
            border
            border-border
            flex
            items-center
            justify-center
            text-sm
            text-secondary-text
          "
        >
          Complex
        </motion.div>

        {/* Refine */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-16
            h-16
            rounded-full
            border
            border-white/20
            flex
            items-center
            justify-center
            text-xs
            text-secondary-text
          "
        >
          Refine
        </motion.div>

        {/* Clear */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="
            absolute
            right-16
            top-1/2
            -translate-y-1/2
            w-32
            h-32
            rounded-xl
            border
            border-border
            flex
            items-center
            justify-center
            text-sm
            text-secondary-text
          "
        >
          Clear
        </motion.div>

        <div
          className="
            absolute
            top-1/2
            left-[25%]
            right-[25%]
            h-px
            bg-white/10
          "
        />
      </div>

      {/* Mobile */}

      <div
        className="
          md:hidden
          rounded-xl
          border
          border-border
          bg-surface
          p-8
        "
      >
        <div className="flex flex-col items-center gap-5">

          <div className="w-full max-w-[180px] rounded-xl border border-border py-4 text-center">
            Complex
          </div>

          <div className="text-secondary-text">↓</div>

          <div className="w-full max-w-[180px] rounded-full border border-white/20 py-3 text-center text-sm">
            Refine
          </div>

          <div className="text-secondary-text">↓</div>

          <div className="w-full max-w-[180px] rounded-xl border border-border py-4 text-center">
            Clear
          </div>

        </div>
      </div>
    </>
  );
}