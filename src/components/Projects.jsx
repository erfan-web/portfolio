import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import { projects } from "../data.js";

import { FaGithub } from "react-icons/fa";

function Projects() {
  const scrollRef = useRef(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const slider = scrollRef.current;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    // چون اسلایدر RTL است، scrollLeft هنگام حرکت
    // به سمت چپ منفی می‌شود.
    const currentScroll = Math.abs(scrollLeft);

    const maxScroll = scrollWidth - clientWidth;

    // کمی tolerance برای خطاهای اعشاری مرورگر
    const threshold = 2;

    setIsAtStart(currentScroll <= threshold);

    setIsAtEnd(currentScroll >= maxScroll - threshold);
  };

  useEffect(() => {
    const slider = scrollRef.current;

    if (!slider) return;

    // موقع لود شدن وضعیت دکمه‌ها مشخص شود
    checkScrollPosition();

    slider.addEventListener("scroll", checkScrollPosition);

    window.addEventListener("resize", checkScrollPosition);

    return () => {
      slider.removeEventListener("scroll", checkScrollPosition);

      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const slider = scrollRef.current;

    const { scrollLeft, clientWidth } = slider;

    const scrollAmount = clientWidth;

    /*
      RTL

      left:
      رفتن به پروژه‌های بعدی
      scrollLeft منفی‌تر می‌شود

      right:
      برگشتن به پروژه‌های قبلی
      scrollLeft به صفر نزدیک می‌شود
    */

    const targetScroll =
      direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

    slider.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="overflow-hidden relative py-20">
      <div
        className="container px-4 sm:px-8 lg:px-14
        mx-auto relative z-10"
      >
        <div
          className="flex flex-col sm:flex-row
          justify-between items-center mb-16 gap-4"
        >
          <div className="text-center sm:text-right">
            <h2
              className="
              text-3xl sm:text-4xl lg:text-5xl font-bold
              mb-4 dark:text-white text-gray-900 
              leading-tight"
            >
              <span
                className="text-indigo-600
                dark:text-indigo-400"
              >
                پروژه
              </span>{" "}
              های من
            </h2>
          </div>

          <div className="flex gap-4">
            {/* Right - برگشت به پروژه‌های قبلی */}
            <button
              onClick={() => handleScroll("right")}
              disabled={isAtStart}
              aria-label="پروژه قبلی"
              className="p-3 rounded-full
              border-2 transition-all duration-300
              dark:border-zinc-200 border-gray-800
              dark:text-white text-gray-800
              hover:border-indigo-500 
              dark:hover:border-indigo-500
              hover:bg-indigo-500/10 dark:hover:bg-indigo-500/10

              disabled:cursor-not-allowed
              disabled:pointer-events-none
              disabled:opacity-40
              disabled:border-gray-300
              disabled:text-gray-400
              disabled:bg-gray-100/50

              dark:disabled:border-zinc-700
              dark:disabled:text-zinc-600
              dark:disabled:bg-zinc-800/30"
            >
              <ChevronRight size={22} />
            </button>

            {/* Left - رفتن به پروژه‌های بعدی */}
            <button
              onClick={() => handleScroll("left")}
              disabled={isAtEnd}
              aria-label="پروژه بعدی"
              className="p-3 rounded-full
              border-2 transition-all duration-300
              dark:border-zinc-200 border-gray-800
              dark:text-white text-gray-800
              hover:border-indigo-500 
              dark:hover:border-indigo-500
              hover:bg-indigo-500/10 dark:hover:bg-indigo-500/10

              disabled:cursor-not-allowed
              disabled:pointer-events-none
              disabled:opacity-40
              disabled:border-gray-300
              disabled:text-gray-400
              disabled:bg-gray-100/50

              dark:disabled:border-zinc-700
              dark:disabled:text-zinc-600
              dark:disabled:bg-zinc-800/30"
            >
              <ChevronLeft size={22} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          dir="rtl"
          className="flex gap-6 scrollbar-none
          snap-mandatory overflow-hidden w-full px-4"
        >
          {projects.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="w-full md:w-[calc(50%_-_12px)]
              lg:w-[calc(33.33%_-_28px)] 2xl:w-[calc(25%_-_20px)] shrink-0
              snap-start group rounded-3xl
              overflow-hidden border-2 transition-all
              duration-300 dark:border-zinc-800/60
              border-gray-100 dark:bg-zinc-900/40 bg-white 
              hover:border-indigo-500/50 dark:hover:border-indigo-500/50
              hover:shadow-[0_20px_40px_rgba(108,140,255,0.15)]
              flex flex-col"
            >
              <div
                className="relative overflow-hidden aspect-video
                bg-gray-100 dark:bg-zinc-900"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform
                  duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-linear-to-t
                  from-black/20 to-transparent opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div
                className="p-6 flex flex-col justify-between
                grow min-h-50"
              >
                <div>
                  <h3
                    className="text-lg font-bold mb-2
                    dark:text-white text-gray-900
                    group-hover:text-indigo-500
                    dark:group-hover:text-indigo-400
                    transition-colors duration-300"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs leading-relaxed mb-4
                    dark:text-gray-400 text-gray-600 line-clamp-2"
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  <div
                    className="flex flex-wrap
                    gap-1.5 mb-4"
                  >
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2.5
                          py-0.5 rounded-full font-mono
                          dark:bg-indigo-500/10 bg-indigo-500/5
                          dark:text-indigo-300 text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-4
                    pt-2 border-t dark:border-zinc-800/80 border-gray-100"
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5
                      text-xs font-medium transition-colors duration-300
                      dark:text-gray-400 text-gray-600
                      dark:hover:text-white hover:text-black"
                    >
                      <FaGithub size={14} />
                      ریپازیتوری
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5
                      text-xs font-medium transition-colors duration-300
                      dark:text-gray-400 text-gray-600
                      dark:hover:text-white hover:text-black"
                    >
                      <ExternalLink size={14} />
                      لایو دمو
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
