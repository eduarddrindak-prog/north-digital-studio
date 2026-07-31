import { motion } from "framer-motion";


const points = [
  "Business",
  "Strategy",
  "Design",
  "Website",
  "Growth",
];


export default function ProcessVisualization() {

  return (
    <div
      className="
        relative
        h-[260px]
        rounded-lg
        border
        border-border
        bg-surface
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

<div className="md:hidden flex flex-col gap-6 py-8">

<div>01 Discovery</div>

↓

<div>02 Design</div>

↓

<div>03 Build</div>

↓

<div>04 Launch</div>

</div>

      <div className="flex items-center gap-6">

        {points.map((point, index) => (

          <div
            key={point}
            className="flex items-center gap-6"
          >

            <motion.div
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{
                delay:index * 0.15
              }}
              className="
                px-5
                py-3
                rounded-lg
                border
                border-border
                text-sm
                text-secondary-text
              "
            >
              {point}
            </motion.div>


            {index !== points.length - 1 && (
              <div className="
                w-8
                h-px
                bg-white/10
              "/>
            )}

          </div>

        ))}

      </div>


    </div>
  );
}
