import { motion } from "framer-motion";

export default function PortfolioVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
group
rounded-3xl
border
border-border
overflow-hidden
bg-white/[0.02]

transition-all
duration-500

hover:-translate-y-1
hover:border-[#4F8EF7]/30
hover:shadow-[0_0_40px_rgba(79,142,247,0.06)]
"
    >
      <div className="grid lg:grid-cols-3">

        {/* LEFT */}

        <div className="relative h-[420px] border-b lg:border-b-0 lg:border-r border-border group-hover:border-[#4F8EF7]/20">

          <div className="absolute inset-6 rounded-2xl bg-[#111827] border border-white/10 overflow-hidden">

            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/15" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>

            <div className="p-6">
              <div className="h-6 w-40 rounded bg-white/10" />
              <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5" />

              <div className="mt-6 space-y-3">
                <div className="h-3 rounded bg-white/10" />
                <div className="h-3 w-4/5 rounded bg-white/10" />
                <div className="h-3 w-3/5 rounded bg-white/10" />
              </div>
            </div>

          </div>

        </div>

        {/* CENTER */}

        <div className="relative h-[420px] border-b lg:border-b-0 lg:border-r border-border bg-[#0F131A] flex items-center justify-center transition-all
duration-500

group-hover:bg-[#111827]">

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.25em] text-[#4F8EF7]">
              Selected Work
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white group-hover:text-[#4F8EF7] transition-all
duration-500">
              Modern websites
            </h3>

            <p className="mt-6 max-w-xs text-secondary-text leading-7">
              Every project is designed to build trust, explain services clearly
              and encourage customers to get in touch.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative h-[420px] group-hover:border-[#4F8EF7]/20">

          <div className="absolute inset-6 rounded-2xl bg-[#111827] border border-white/10 overflow-hidden">

            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/15" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>

            <div className="p-6">

              <div className="grid grid-cols-2 gap-4">

                <div className="h-28 rounded-xl bg-white/10" />
                <div className="h-28 rounded-xl bg-white/5" />
                <div className="col-span-2 h-28 rounded-xl bg-white/10" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
