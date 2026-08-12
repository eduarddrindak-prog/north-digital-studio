import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value?: string;
  placeholder: string;
  options: string[];
  onChange?: (value: string) => void;
}

export default function Select({
  value = "",
  placeholder,
  options,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-border
          bg-[#15191F]
          px-5
          py-3.5
          text-left
          transition-all
          duration-300
          outline-none

          hover:bg-white/[0.04]

          ${open
            ? "border-[#4F8EF7]/60 bg-white/[0.04] ring-4 ring-[#4F8EF7]/10"
            : ""
          }
        `}
      >
        <span
          className={
            selectedValue
              ? "text-primary-text"
              : "text-secondary-text"
          }
        >
          {selectedValue || placeholder}
        </span>

        <ChevronDown
          className={`
            h-4
            w-4
            text-secondary-text
            transition-transform
            duration-300

            ${open ? "rotate-180 text-[#4F8EF7]" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-[#15191F]
            p-1.5
            shadow-[0_20px_50px_rgba(0,0,0,.45)]
          "
        >
          {options.map((option) => {
            const selected = option === selectedValue;

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  w-full
                  rounded-lg
                  px-4
                  py-3
                  text-left
                  text-sm
                  transition-all
                  duration-200

                  ${
                    selected
                      ? "bg-[#4F8EF7]/20 text-[#4F8EF7]"
                      : "text-secondary-text hover:bg-white/[0.04] hover:text-primary-text"
                  }
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
