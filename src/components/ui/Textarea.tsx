import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      className={`
        w-full
        min-h-[160px]
        resize-none
        rounded-xl
        border
        border-border
        bg-white/[0.02]
        px-5
        py-4
        text-primary-text
        placeholder:text-secondary-text
        transition-all
        duration-300
        outline-none

        focus:border-[#4F8EF7]/60
        focus:bg-white/[0.04]
        focus:ring-4
        focus:ring-[#4F8EF7]/10

        ${className}
      `}
      {...props}
    />
  );
}