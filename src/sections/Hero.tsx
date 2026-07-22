import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background text-primary-text flex items-center py-12 lg:py-0">

      <SectionContainer
        className="
          max-w-[1500px]
          flex
          flex-col
          lg:flex-row
          items-center
          gap-24
        "
      >
        {/* LEFT */}

        <div className="w-full lg:w-[45%]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-5xl
              lg:text-7xl
              font-semibold
              leading-[0.95]
              tracking-tight
            "
          >
            Websites that help your business grow.
          </motion.h1>

          <p
            className="
              mt-8
              max-w-xl
              text-xl
              leading-relaxed
              text-secondary-text
            "
          >
            We create professional websites that help customers understand your
            business, build trust in your services and make it easy to get in
            touch.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
          <Button variant="primary" withArrow>
  Start Project
</Button>

<Button variant="secondary" withArrow>
  Selected Work
</Button>
          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full lg:w-[55%] flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-[560px]
              aspect-[1.05/1]
              rounded-3xl
              border border-white/8
shadow-[0_30px_80px_rgba(0,0,0,.35)]
              overflow-hidden
              bg-white/[0.015]
            "
          >
            <div
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-56
    h-56
    rounded-full
    bg-[#4F8EF7]/5
    blur-3xl
  "
/>

            <motion.div
  className="absolute top-[18%] left-[16%] w-4 h-4 rounded-full bg-white/60 shadow-[0_0_20px_rgba(255,255,255,.35)]"
  animate={{
    scale:[1,1.15,1],
    opacity:[0.8,1,0.8]
  }}
  transition={{
    duration:4,
    repeat:Infinity
  }}
/>

            <motion.div
              className="absolute bottom-[22%] right-[18%] w-3 h-3 rounded-full bg-white/40"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.div
              className="absolute top-[52%] left-[52%] w-5 h-5 rounded-full border border-white/20 bg-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <motion.div
  className="absolute top-[36%] right-[22%] w-2 h-2 rounded-full bg-white/25"
  animate={{
    y:[0,-6,0]
  }}
  transition={{
    duration:5,
    repeat:Infinity
  }}
/>

<motion.div
  className="absolute bottom-[28%] left-[30%] w-2 h-2 rounded-full bg-white/20"
  animate={{
    y:[0,8,0]
  }}
  transition={{
    duration:6,
    repeat:Infinity
  }}
/>

<motion.div
  className="absolute top-[70%] left-[58%] w-2 h-2 rounded-full bg-white/20"
  animate={{
    scale:[1,1.3,1]
  }}
  transition={{
    duration:5,
    repeat:Infinity
  }}
/>

              <div className="absolute inset-0 opacity-30">

              <div
  className="
    absolute
    inset-0
    bg-gradient-to-br
    from-white/[0.03]
    via-transparent
    to-transparent
  "
/>

              <div className="absolute top-[18%] left-[18%] w-44 h-px bg-white/10 rotate-[34deg]" />

<div className="absolute top-[28%] left-[35%] w-36 h-px bg-white/10 rotate-[75deg]" />

<div className="absolute top-[50%] left-[30%] w-56 h-px bg-white/10 -rotate-[12deg]" />

<div className="absolute bottom-[22%] right-[18%] w-40 h-px bg-white/10 rotate-[28deg]" />

<div className="absolute bottom-[35%] right-[32%] w-32 h-px bg-white/10 -rotate-[65deg]" />

<div className="absolute top-[38%] left-[55%] w-28 h-px bg-white/10 rotate-[22deg]" />

</div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

              <div className="relative text-center">

  <div className="mx-auto mb-5 h-px w-16 bg-white/10" />

  <p className="text-[11px] uppercase tracking-[0.3em] text-[#4F8EF7]">
    NORTH STUDIO
  </p>

  <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
  NORTH DIGITAL STUDIO
</p>

<h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
  Professional Website
</h3>

<div className="mx-auto mt-5 h-px w-20 bg-white/10" />

<p className="mx-auto mt-5 max-w-[240px] text-sm leading-7 text-secondary-text">
  Designed to communicate your value,
  build confidence
  and generate customer enquiries.
</p>

</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}