import { motion } from "framer-motion";


const layers = [
  "Business goals",
  "Customer experience",
  "Website system",
];


export default function ServicesVisualization(){

  return (

    <div
      className="
        h-[300px]
        rounded-lg
        border
        border-border
        bg-surface
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      <div className="
        flex
        flex-col
        gap-4
        w-64
      ">

        {layers.map((layer,index)=>(

          <motion.div

            key={layer}

            initial={{
              opacity:0,
              x:-20,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              delay:index * 0.15,
            }}

            className="
              border
              border-border
              rounded-lg
              px-5
              py-4
              text-sm
              text-secondary-text
            "

          >
            {layer}
          </motion.div>

        ))}


      </div>


    </div>

  );
}