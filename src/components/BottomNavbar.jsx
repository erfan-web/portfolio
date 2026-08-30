import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data.js";
function BottomNavbar({ darkMode, toggleDarkMode }) {
  const [activeTab, setActiveTab] = useState("خانه");
  return (
    <nav className="fixed z-50 bottom-0 left-0 right-0 flex justify-center lg:hidden">
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[95%] max-w-4xl mb-4"
      >
        <div className="relative bg-linear-to-l from-indigo-600 to-indigo-800 backdrop-blur-xl rounded-2xl border border-white/20 px-3 py-2">
          <div className="absolute -top-5 left-3">
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
          <div className="flex items-center gap-1 justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.alt;
              return (
                <motion.a
                  key={item.id}
                  href={item.link}
                  onClick={() => setActiveTab(item.alt)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-0.5 
                  py-1.5 px-2 relative group flex-1"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-2 left-1/2
                    -translate-x-1/2 w-6 h-1 bg-white rounded-full"
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                  <Icon
                    className={`size-4 lg:size-5 transition-all duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium transition-all
                  duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 group-hover:text-white"
                  }
                  `}
                  >
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </nav>
  );
}

export default BottomNavbar;
