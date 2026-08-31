import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import logoDesktopHover from "../assets/images/logo-desktop-hover.svg";
import logoDesktop from "../assets/images/logo-desktop.svg";
import logoMobileHover from "../assets/images/logo-mobile-hover.svg";
import logoMobile from "../assets/images/logo-mobile.svg";
import { navItems } from "../data.js";
import { useScrolled } from "../hooks/useScrolled.js";
function Header({ darkMode, toggleDarkMode }) {
  const isScrolled = useScrolled(92);

  return (
    <header class="relative lg:fixed top-0 left-0 w-full h-[92px] z-40 flex justify-center">
      {/* Blur layer - فقط دسکتاپ */}
      <div
        className={`
          hidden lg:block
          absolute top-0 left-0 w-full h-[110px]
          backdrop-blur-md
          transition-opacity duration-300
          pointer-events-none
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
      />
      <div className="mx-auto w-[95%] max-w-6xl relative mt-5 ">
        <div
          className="relative h-[72px] py-2 px-4 lg:px-6 rounded-2xl border backdrop-blur-xl border-white/20
      bg-linear-to-l from-indigo-600 to-indigo-800 flex justify-between items-center"
        >
          <a href="#hero" className="group block" aria-label="صفحه اصلی">
            {/* Desktop */}{" "}
            <span className="hidden lg:block">
              {" "}
              <img
                src={logoDesktop}
                alt="لوگو"
                className="block group-hover:hidden"
              />

              <img
                src={logoDesktopHover}
                alt=""
                aria-hidden="true"
                className="hidden group-hover:block"
              />
            </span>
            {/* Mobile */}{" "}
            <span className="block lg:hidden">
              {" "}
              <img
                src={logoMobile}
                alt="لوگو"
                className="block group-hover:hidden"
              />

              <img
                src={logoMobileHover}
                alt=""
                aria-hidden="true"
                className="hidden group-hover:block"
              />

            </span>
          </a>

          <div className="flex items-center gap-10">
            <nav aria-label="منوی اصلی" className="hidden lg:block">
              <ul className="flex flex-row-reverse items-center gap-4 text-base font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className="transition-colors duration-300 text-white/70 hover:text-white"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-900 
              dark:bg-gray-100 transition-colors 
              backdrop-blur-sm"
            >
              {darkMode ? (
                <Sun className="size-5 text-black" />
              ) : (
                <Moon className="size-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
