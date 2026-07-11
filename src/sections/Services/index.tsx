import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";

import ServicesVisualization from "./ServicesVisualization";
import ServiceItem from "./ServiceItem";

import {
  servicesIntro,
  services,
} from "./content";


export default function Services() {

  return (

    <section 
    id="services"
    className="py-section bg-background text-primary-text">


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
            {servicesIntro.heading}
          </h2>


          <p className="
            mt-6
            text-lg
            text-secondary-text
            leading-relaxed
          ">
            {servicesIntro.description}
          </p>


        </motion.header>



        {/* Visualization */}

        <ServicesVisualization />



        {/* Services list */}

        <div className="
          grid
          md:grid-cols-2
          gap-10
        ">


          {services.map((service,index)=>(

            <ServiceItem

              key={service.title}

              {...service}

              index={index}

            />

          ))}


        </div>


      </SectionContainer>


    </section>

  );
}