import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import { finalCTA } from "./content";

import ContactForm from "@/components/common/ContactForm";


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
          "

        >


          {/* subtle background element */}

          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/5
            to-transparent
            pointer-events-none
          " />


          <div className="
            relative
            max-w-3xl
            mx-auto
          ">


            <h2 className="
              text-3xl
              lg:text-5xl
              font-semibold
              leading-tight
            ">

              {finalCTA.heading}

            </h2>



            <p className="
              mt-6
              text-base
              lg:text-lg
              text-secondary-text
              leading-relaxed
            ">

              {finalCTA.description}

            </p>



            <div className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            ">

            <ContactForm />




            </div>


          </div>


        </motion.div>


      </SectionContainer>


    </section>

  );
}