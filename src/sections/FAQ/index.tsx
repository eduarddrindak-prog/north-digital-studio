import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import FAQItem from "./FAQItem";

import {
  faqIntro,
  faqItems,
} from "./content";


export default function FAQ() {

  return (

    <section className="py-section bg-background text-primary-text">


      <SectionContainer className="flex flex-col gap-16 lg:gap-20">


        {/* Introduction */}

        <motion.header

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

          className="max-w-2xl"

        >

          <h2 className="
            text-4xl
            font-semibold
            leading-tight
          ">
            {faqIntro.heading}
          </h2>


          <p className="
            mt-6
            text-lg
            text-secondary-text
            leading-relaxed
          ">
            {faqIntro.description}
          </p>


        </motion.header>



        {/* FAQ list */}

        <div className="
          max-w-3xl
        ">

          {faqItems.map((item)=>(

            <FAQItem

              key={item.question}

              question={item.question}

              answer={item.answer}

            />

          ))}

        </div>


      </SectionContainer>


    </section>

  );
}