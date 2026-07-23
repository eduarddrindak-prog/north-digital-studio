import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";


import Button from "@/components/ui/Button";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 24);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-border
        backdrop-blur-xl
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#0B0F14]/95 shadow-lg shadow-black/20"
            : "bg-[#0B0F14]/75"
        }
      `}
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          h-[80px]
          px-6
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <div
  onClick={() => navigate("/")}
  className="
    flex
    items-center
    gap-3
    group
    cursor-pointer
  "
>
          <div
            className="
              w-2.5
              h-2.5
              rounded-[3px]
              bg-white
              transition-colors
              duration-300
              group-hover:bg-[#4F8EF7]
            "
          />

          <div className="leading-none">
            <p
              className="
                text-primary-text
                font-semibold
                tracking-tight
              "
            >
              NORTH
            </p>

            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-white/70
                mt-1
              "
            >
              Digital Studio
            </p>
          </div>
        </div>

        {/* Desktop */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {navigation.map((item) => (
            <NavLink
  key={item.href}
  to={item.href}
  className={({ isActive }) =>
    `
    relative
    text-sm
    transition-all
    duration-300

    ${
      isActive
        ? "text-primary-text"
        : "text-secondary-text hover:text-primary-text"
    }

    after:absolute
    after:left-0
    after:-bottom-1
    after:h-px
    after:bg-[#4F8EF7]
    after:transition-all

    ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }
  `
  }
>
  {item.label}
</NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}

        <div className="hidden md:block">
        <Button
  withArrow
  onClick={() =>
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Start Project
</Button>
        </div>

        {/* Mobile */}

        <button
  onClick={() => setOpen(!open)}
  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
  className="md:hidden text-primary-text"
>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="
            md:hidden
            border-t
            border-border
            bg-[#0B0F14]
            px-6
            py-6
          "
        >
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <NavLink
  key={item.href}
  to={item.href}
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    isActive
      ? "text-primary-text"
      : "text-secondary-text hover:text-primary-text"
  }
>
                {item.label}
              </NavLink>
            ))}

            <Button
  withArrow
  onClick={() => {
    setOpen(false);

    navigate("/contact");
  }}
>
  Start Project
</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}