import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-background py-36">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    {...fadeUp}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#4F8EF7]">
                        START YOUR PROJECT
                    </p>

                    <h2 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                        Ready to Build
                        <br />
                        Something Exceptional?
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
                        Whether you need a high-converting landing page,
                        a modern business website, or a complete digital
                        presence, North Digital Studio is ready to bring
                        your vision to life.
                    </p>

                    <a
                        href="/contact"
                        className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#4F8EF7] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#3D7EF2]"
                    >
                        Start Your Project

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}