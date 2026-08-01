import Reveal from "@/components/common/Reveal";
import { ArrowUpRight } from "lucide-react";

type Props = {
  number: string;
  title: string;
  description: string;
  offset?: boolean;
};

export default function PrincipleCard({
  number,
  title,
  description,
  offset = false,
}: Props) {
  return (
    <Reveal className={offset ? "lg:mt-24" : ""}>
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-border
          bg-white/[0.02]
          p-8
          transition-all
          duration-300
          hover:border-[#4F8EF7]/30
          hover:bg-white/[0.035]
          hover:-translate-y-1
        "
      >
        {/* Number */}
        <span className="text-[13px] font-medium tracking-[0.18em] text-[#4F8EF7]">
          {number}
        </span>

        {/* Decorative line */}
        <div
          className="
            mt-5
            h-px
            w-12
            bg-border
            transition-all
            duration-300
            group-hover:w-24
            group-hover:bg-[#4F8EF7]
          "
        />

        {/* Title */}
        <h3 className="mt-8 text-[34px] font-semibold leading-none text-primary-text">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-6 max-w-[420px] leading-8 text-secondary-text">
          {description}
        </p>

        {/* Arrow */}
        <div
          className="
            absolute
            right-8
            bottom-8
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        >
          <ArrowUpRight
            size={20}
            className="text-secondary-text group-hover:text-[#4F8EF7]"
          />
        </div>
      </div>
    </Reveal>
  );
}