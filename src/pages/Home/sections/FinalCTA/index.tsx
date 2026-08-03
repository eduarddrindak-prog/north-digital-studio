import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import { finalCTA } from "./content";
import Button from "@/components/ui/Button";

export default function FinalCTA() {

  return (

    <section 
    id="contact"
    className="
      py-section
      bg-background
      text-primary-text
    ">


      <SectionContainer>


        <motion.div

        

          initial={{
            opacity:0,
            y:20,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
            margin:"-80px",
          }}

          transition={{
            duration:0.5,
          }}

          className="
            relative
            overflow-hidden
            rounded-2xl 
            lg:rounded-3xl
            border
            border-border
            bg-surface
            rounded-2xl
            px-6
            py-14
            lg:px-12
            lg:py-20
            text-center
            md:px-16
            transition-all
duration-500

hover:-translate-y-1
hover:border-[#4F8EF7]/30
hover:shadow-[0_0_60px_rgba(79,142,247,.08)]

group
          "

        >
          
          <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    h-48
    w-[500px]
    -translate-x-1/2

    rounded-full

    bg-[#4F8EF7]/10
    blur-[120px]

    opacity-0
    transition-opacity
    duration-500

    group-hover:opacity-100
  "
/>

          {/* subtle background element */}

          <div
  className="
    absolute
    left-14
    top-14
    h-2
    w-2
    rounded-full
    bg-[#4F8EF7]/50

    transition-all
    duration-500

    group-hover:scale-150
    group-hover:bg-[#4F8EF7]
  "
/>

<div
  className="
    absolute
    right-14
    bottom-14
    h-2
    w-2
    rounded-full
    bg-[#4F8EF7]/35

    transition-all
    duration-500

    group-hover:scale-150
  "
/>

          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            bg-[radial-gradient(circle_at_top,rgba(79,142,247,.10),transparent_65%)]

opacity-0
transition-opacity
duration-500

group-hover:opacity-100
            pointer-events-none
          " />


          <div className="
            relative
            max-w-3xl
            mx-auto
          ">

            <p
  className="
    mb-5
    text-sm
    uppercase
    tracking-[0.35em]
    text-[#4F8EF7]

    transition-all
    duration-300

    group-hover:tracking-[0.45em]
  "
>
  START YOUR PROJECT
</p>

            <h2
  className="
    text-3xl
    lg:text-5xl
    font-semibold
    leading-tight

    transition-all
    duration-300

    group-hover:-translate-y-1
  "
>

              {finalCTA.heading}

            </h2>



            <p className="
              mt-6
              text-base
              lg:text-lg
              text-secondary-text
              leading-relaxed
              transition-colors
duration-300
group-hover:text-primary-text
            ">

              {finalCTA.description}

            </p>



<div
  className="
    mt-10
    flex
    justify-center

    transition-transform
    duration-300

    group-hover:scale-[1.04]
  "
>
  <Button
    withArrow
    onClick={() =>
      document.querySelector("#contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    {finalCTA.button}
  </Button>
</div>


          </div>


        </motion.div>


      </SectionContainer>


    </section>

  );
}
