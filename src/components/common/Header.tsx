import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";


import Button from "@/components/ui/Button";
import LanguageSwitcher from "./GTranslate";

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
          relative
          h-[80px]
          px-6
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <NavLink
          to="/"
          aria-label="pilaruStudio home"
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] text-lg font-semibold tracking-tight text-white shadow-lg shadow-black/20 transition-colors duration-300 group-hover:border-[#4F8EF7]/50">
            p
            <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#4F8EF7]" />
          </span>

          <span className="leading-none notranslate">
            <span className="block text-[18px] font-semibold tracking-[-0.04em] text-primary-text">
              <span>pilaru</span>
              <span className="font-normal text-white/75">Studio</span>
            </span>
            <span className="mt-1.5 block text-[9px] font-medium uppercase tracking-[0.22em] text-secondary-text">
              Digital studio
            </span>
          </span>
        </NavLink>

        {/* Desktop */}

        <nav
          className="
            hidden
            md:flex
            absolute
            left-1/2
            -translate-x-1/2
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
    notranslate
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
    after:duration-300

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

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <div className="hidden md:block">
            <Button href="/contact" withArrow>
              Start Project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="text-primary-text md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="
            md:hidden
            overflow-hidden
            border-t
            border-border
            bg-[#0B0F14]/95
            px-6
            backdrop-blur-xl
          "
        >
          <nav className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <NavLink
  key={item.href}
  to={item.href}
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    isActive
      ? "notranslate rounded-lg bg-white/[0.06] px-3 py-2.5 text-primary-text"
      : "notranslate rounded-lg px-3 py-2.5 text-secondary-text transition-colors duration-200 hover:bg-white/[0.04] hover:text-primary-text"
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
    </AnimatePresence>
  </header>
);
}
