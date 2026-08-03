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
      className="bg-background py-section text-primary-text"
    >
      <SectionContainer className="flex flex-col gap-16 lg:gap-20">
        <motion.header
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-semibold leading-tight">
            {servicesIntro.heading}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-secondary-text">
            {servicesIntro.description}
          </p>
        </motion.header>

        <ServicesVisualization />

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
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