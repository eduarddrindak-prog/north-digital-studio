import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  withArrow?: boolean;
};

export default function Button({
  variant = "primary",
  withArrow = false,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: `
      bg-white
      text-black
      border
      border-white
      hover:-translate-y-0.5
      hover:shadow-[0_12px_30px_rgba(255,255,255,.12)]
      active:translate-y-0
    `,

    secondary: `
      border
      border-white/10
      bg-transparent
      text-primary-text
      hover:bg-white/5
      hover:border-white/20
      hover:-translate-y-0.5
    `,
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}