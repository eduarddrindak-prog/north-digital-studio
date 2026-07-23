import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";


type Props = {
  question:string;
  answer:string;
};


export default function FAQItem({
  question,
  answer,
}:Props){

  const [open,setOpen] = useState(false);


  return (

    <article
      className="
        border-t
        border-border
        py-6
      "
    >

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          text-left
          gap-6
        "
      >

        <span className="
          text-lg
          font-medium
          text-primary-text
        ">
          {question}
        </span>


        <ChevronDown

          className={`
            w-5
            h-5
            text-secondary-text
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}

        />


      </button>


      <motion.div

        initial={false}

        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}

        className="
          overflow-hidden
        "

      >

        <p className="
          mt-4
          max-w-2xl
          text-secondary-text
          leading-relaxed
        ">
          {answer}
        </p>


      </motion.div>


    </article>

  );
}