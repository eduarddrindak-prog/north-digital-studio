import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";

import { fadeLeft, fadeRight } from "@/lib/animations";
import { heroContent} from "../../content";

import { useNavigate } from "react-router-dom";

export default function Hero() {

    const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center bg-background text-primary-text py-12 lg:py-0">
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

        <motion.div
          {...fadeLeft}
          className="w-full lg:w-[48%]"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#4F8EF7]">
            {heroContent.badge}
          </p>

          <h1
            className="
              mt-5
              text-5xl
              lg:text-[5.2rem]
              font-semibold
              leading-[0.95]
              tracking-tight
              whitespace-pre-line
            "
          >
            {heroContent.title}
          </h1>

          <p
            className="
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-secondary-text
            "
          >
            {heroContent.description}
          </p>

          <div className="mt-10">
            <Button
  variant="primary"
  withArrow
  onClick={() => navigate("/contact")}
>
  {heroContent.button}
</Button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          {...fadeRight}
          className="w-full lg:w-[55%] lg:pt-8"
        >
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
              
              group
hover:-translate-y-1
transition-all
duration-500
            "
          >
            {/* Browser */}

            <div
              className="
                flex
                items-center
                justify-between
                px-6
                py-4
                border-b
                border-white/10
                
              "
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>

              <span className="text-xs text-secondary-text">
                northstudio.fr
              </span>
            </div>

            {/* Content */}

            <div className="p-8">

              <div
  className="
    rounded-2xl
    border
    border-white/10
    bg-[#0F141B]
    overflow-hidden
  "
>
  {/* Header */}

  <div
    className="
      flex
      items-center
      justify-between
      px-8
      py-5
      border-b
      border-white/10

      
    "
  >
    <div className="font-semibold tracking-tight">
      NORTH
    </div>

    <div className="flex gap-6 text-sm text-secondary-text">
      <span className="cursor-pointer transition-colors hover:text-primary-text">
  Home
</span>

<span className="cursor-pointer transition-colors hover:text-primary-text">
  Services
</span>

<span className="cursor-pointer transition-colors hover:text-primary-text">
  Contact
</span>
    </div>
  </div>

  {/* Hero */}

  <div className="px-8 py-10">

    <p className="text-sm uppercase tracking-[0.25em] text-[#4F8EF7]">
      Digital Studio
    </p>

    <h2
      className="
        mt-5
        text-5xl
        font-semibold
        leading-tight
      "
    >
      Build a Website
      <br />
      That Grows
      <br />
      Your Business.
    </h2>

    <p
      className="
        mt-6
        max-w-md
        text-secondary-text
        leading-relaxed
      "
    >
      Modern websites designed to attract customers,
      build trust and help small businesses grow online.
    </p>

    <div className="mt-8">
      <Button
        variant="primary"
        withArrow
      >
        Get Started
      </Button>
    </div>

  </div>

  {/* Features */}

  <div
    className="
      grid
      grid-cols-3
      border-t
      border-white/10
    "
  >
    {[
      "Fast",
      "Responsive",
      "SEO Ready",
      "Professional",
      "Secure",
      "Modern",
    ].map((feature) => (
      <div
        key={feature}
        className="
          border-r
          border-b
          border-white/10
          p-5
          text-center
          text-sm
          text-secondary-text
          last:border-r-0

          hover:bg-white/[0.02]
transition-all
duration-300
        "
      >
        ✓ {feature}
      </div>
    ))}
  </div>
</div>

            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}