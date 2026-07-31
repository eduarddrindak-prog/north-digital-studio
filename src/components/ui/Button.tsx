import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRounded = "xl" | "full";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  withArrow?: boolean;
  href?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  rounded = "xl",
  withArrow = false,
  href,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const radii: Record<ButtonRounded, string> = {
    xl: "rounded-xl",
    full: "rounded-full",
  };

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

  const buttonClassName = `${baseStyles} ${sizes[size]} ${radii[rounded]} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>

      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClassName}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      {...props}
    >
      {content}
    </button>
  );
}
