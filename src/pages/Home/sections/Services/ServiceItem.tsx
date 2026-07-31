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
  group
  relative
  border
  border-border
  rounded-xl
  bg-surface
  p-7
  transition-all
  duration-300
  hover:border-white/15
  hover:-translate-y-1
"

    >

<div
  className="
    flex
    items-center
    justify-between
  "
>
  <span
    className="
      text-xs
      uppercase
      tracking-[0.2em]
      text-[#4F8EF7]
    "
  >
    0{index + 1}
  </span>

  <div
    className="
      h-px
      flex-1
      ml-4
      bg-border
    "
  />
</div>


      <h3 className="
  mt-6
  text-2xl
  font-semibold
  tracking-tight
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
