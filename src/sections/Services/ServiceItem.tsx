import { motion } from "framer-motion";


type Props = {
  title:string;
  description:string;
  index:number;
};


export default function ServiceItem({
  title,
  description,
  index,
}:Props){

  return (

    <motion.article

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
        delay:index * 0.1,
      }}

      className="
        border-t
        border-border
        pt-6
      "

    >

      <span className="
        text-sm
        text-secondary-text
      ">
        0{index + 1}
      </span>


      <h3 className="
        mt-4
        text-xl
        font-semibold
        text-primary-text
      ">
        {title}
      </h3>


      <p className="
        mt-3
        text-secondary-text
        leading-relaxed
      ">
        {description}
      </p>


    </motion.article>

  );
}