import { motion, useReducedMotion } from "framer-motion";

const businessElements = [
  { id: "offer", label: "Offer", x: 68, y: 16, w: 20, h: 12 },
  { id: "trust", label: "Trust", x: 74, y: 40, w: 16, h: 16 },
  { id: "contact", label: "Contact", x: 66, y: 68, w: 22, h: 11 },
] as const;

const paths = [
  {
    id: "offer",
    approach: "M 14 50 L 38 50",
    continuation: "M 38 50 C 48 50, 56 24, 68 24",
    friction: { x: 38, y: 50 },
  },
  {
    id: "trust",
    approach: "M 14 50 L 38 50",
    continuation: "M 38 50 C 50 50, 62 50, 74 50",
    friction: { x: 38, y: 50 },
  },
  {
    id: "contact",
    approach: "M 14 50 L 38 50",
    continuation: "M 38 50 C 48 50, 56 74, 66 76",
    friction: { x: 38, y: 50 },
  },
] as const;

const customerJourney = {
  left: ["12%", "34%", "36%", "34%", "52%", "58%"],
  top: ["50%", "50%", "50%", "50%", "48%", "45%"],
  times: [0, 0.22, 0.38, 0.52, 0.72, 1],
  duration: 4.5,
};

export default function ProblemVisualization() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
      aria-hidden="true"
    >
      <div className="relative w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[400px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/2] rounded-lg border border-border overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {paths.map((path, index) => (
            <g key={path.id}>
              <motion.path
                d={path.approach}
                stroke="rgba(255, 255, 255, 0.28)"
                strokeWidth="0.4"
                initial={
                  prefersReducedMotion
                    ? { pathLength: 1, opacity: 0.28 }
                    : { pathLength: 0, opacity: 0.15 }
                }
                whileInView={{ pathLength: 1, opacity: 0.28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              />

              <path
                d={path.approach}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.55"
                strokeDasharray="0.8 0.8"
                className="hidden sm:block"
              />

              <motion.path
                d={path.continuation}
                stroke="rgba(255, 255, 255, 0.14)"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.2"
                initial={
                  prefersReducedMotion
                    ? { pathLength: 1, opacity: 0.14 }
                    : { pathLength: 0, opacity: 0.08 }
                }
                whileInView={{ pathLength: 1, opacity: 0.14 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: prefersReducedMotion ? 0 : 2.2 + index * 0.1,
                }}
              />
            </g>
          ))}
        </svg>

        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: prefersReducedMotion ? "42%" : "12%",
            top: prefersReducedMotion ? "50%" : "50%",
          }}
          initial={false}
          whileInView={
            prefersReducedMotion
              ? undefined
              : {
                  left: customerJourney.left,
                  top: customerJourney.top,
                }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: customerJourney.duration,
                  times: customerJourney.times,
                  ease: "easeInOut",
                  delay: 0.6,
                }
          }
        >
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white/50 ring-4 ring-white/5" />
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-[10px] sm:text-xs text-white/30 whitespace-nowrap">
            Attention
          </span>
        </motion.div>

        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: "38%", top: "50%" }}
          initial={
            prefersReducedMotion ? { opacity: 0.75, scale: 1 } : { opacity: 0.35, scale: 0.85 }
          }
          whileInView={
            prefersReducedMotion
              ? { opacity: 0.75, scale: 1 }
              : {
                  opacity: [0.35, 0.35, 0.9, 0.75, 0.55],
                  scale: [0.85, 0.85, 1.15, 1, 1],
                }
          }
          viewport={{ once: true }}
          transition={{
            duration: customerJourney.duration,
            times: [0, 0.35, 0.48, 0.58, 1],
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white/40 bg-background ring-4 ring-white/5" />
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-[10px] sm:text-xs text-white/30 whitespace-nowrap">
            Friction
          </span>
        </motion.div>

        {businessElements.map((element, index) => (
          <motion.div
            key={element.id}
            className="absolute border border-border rounded-sm bg-white/5 hidden sm:flex items-center justify-center"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.w}%`,
              height: `${element.h}%`,
            }}
            initial={prefersReducedMotion ? false : { opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: prefersReducedMotion ? 0 : 2.8 + index * 0.12,
            }}
          >
            <span className="text-[10px] text-white/30">{element.label}</span>
          </motion.div>
        ))}

        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 sm:hidden">
          <div className="w-16 h-24 border border-border rounded-sm bg-white/5 flex flex-col items-center justify-center gap-2 px-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full" />
            <div className="w-3/4 h-1.5 bg-white/15 rounded-full" />
            <div className="w-full h-1.5 bg-white/10 rounded-full" />
          </div>
          <span className="block text-center mt-2 text-[10px] text-white/25">
            Action
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:block">
          <div className="absolute left-[36%] top-1/2 -translate-y-1/2 w-16 h-16 bg-background/30 backdrop-blur-[2px] rounded-full" />
        </div>

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-32 h-px bg-white/20 rotate-45 hidden sm:block" />
          <div className="absolute bottom-1/3 right-1/4 w-28 h-px bg-white/10 -rotate-12 hidden sm:block" />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 text-[10px] text-white/25 tracking-wide">
          <span>Attention</span>
          <span className="w-8 h-px bg-white/15" />
          <span>Friction</span>
          <span className="w-8 h-px bg-white/15" />
          <span>Action</span>
        </div>
      </div>
    </motion.div>
  );
}
