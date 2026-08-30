import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import logoDesktop from "../assets/images/logo-desktop.svg";
import { navItems } from "../data.js";
function Header({ darkMode, toggleDarkMode }) {
  return (
    <header class="relative lg:fixed top-0 left-0 w-full h-[92px] backdrop-blur-md transition-opacity duration-300 z-40 opacity-100 flex justify-center">
      <div className="mx-auto w-[95%] max-w-6xl relative mt-5 ">
        <div
          className="relative h-[72px] py-2 px-4 lg:px-6 rounded-2xl border border-white/20
      bg-linear-to-l from-indigo-600 to-indigo-800 flex justify-between items-center"
        >
          <a href="#hero" className="block" aria-label="صفحه اصلی">
            <img src={logoDesktop} alt="لوگو" />
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
