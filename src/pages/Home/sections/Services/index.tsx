import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/components/ui/SectionContainer";
import { Link } from "react-router-dom";

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
      <SectionContainer className="flex flex-col gap-10 md:gap-16">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7eacff]">
            Services
          </p>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
            {servicesIntro.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-secondary-text md:mt-5 md:text-lg">
            {servicesIntro.description}
          </p>
        </motion.header>

        <ServicesVisualization />

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
          className="w-full text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7eacff]">
            What we offer
          </p>

          <div className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.08] text-left md:mt-8">
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>

          <Link
            to="/services"
            className="group mt-8 inline-flex items-center gap-2 border-b border-transparent pb-1.5 text-sm font-semibold text-primary-text transition-colors hover:border-[#7eacff] hover:text-[#7eacff]"
          >
            Explore all services
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>
      </SectionContainer>
    </section>
  );
}
