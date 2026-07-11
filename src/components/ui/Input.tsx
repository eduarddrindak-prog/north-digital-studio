import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      className={`
        w-full
        rounded-xl
        border
        border-border
        bg-white/[0.02]
        px-5
        py-3.5
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