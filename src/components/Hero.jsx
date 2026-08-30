import { DownloadIcon, Mail } from "lucide-react";
import CV from "../assets/CV.pdf";
import hero from "../assets/images/me/avatar-resized/hero-cover 358.360.webp";
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen overflow-hidden
    flex items-center"
    >
      <div
        className="mx-auto container 
      px-4 sm:px-8 lg:px-14 relative z-10
      py-22 lg:py-12 lg:-mt-14"
      >
        <div
          className="flex flex-col lg:flex-row
         items-center justify-between 
         gap-12 lg:gap-16"
        >
          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-left"
          >
            <div className="relative group ">
              <div
                className="absolute inset-0 bg-linear-to-l
              from-indigo-600 to-indigo-800 
              rounded-full filter blur-2xl opacity-30
              group-hover:opacity-50 transition-opacity
              duration-500 "
              />
              <div
                className="relative size-72 sm:size-80 
                lg:size-96 "
              >
                <img
                  src={hero}
                  alt="hero"
                  className="relative z-10 h-full w-full 
                    rounded-full object-cover transform 
                    group-hover:scale-105 transition-transform
                    duration-500"
                />
                <div
                  className="absolute inset-0 border-2
                  border-indigo-500/30 rounded-full
                  scale-110 group-hover:scale-125
                  transition-transform duration-500"
                />

                <div
                  className="absolute inset-0 border-2
                  border-indigo-500/30 rounded-full
                  scale-125 group-hover:scale-150
                  transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full flex
          flex-col items-center lg:items-start
          text-center lg:text-start"
            data-aos="fade-right"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5
            rounded-full bg-indigo-500/10 border
            border-indigo-500/20 mb-5"
            >
              <span
                className="size-2 rounded-full
              bg-green-500 animate-pulse"
              />
              <span
                className="text-xs sm:text-sm font-medium
              dark:text-indigo-300 text-gray-700"
              >
                در دسترس برای کار
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl
            mb-3 font-bold dark:text-white text-gray-900"
            >
              سلام، من <span className="text-indigo-600 ">عرفانم</span>
            </h1>
            <h2
              className="text-xl sm:text-2xl mb-4
            dark:text-indigo-400 text-indigo-600"
            >
              <span className="text-gray-400 font-mono">&lt;</span> توسعه دهنده
              فرانت اند <span className="text-gray-400 font-mono">&gt;</span>
            </h2>
            <p
              className="mb-6 leading-relaxed max-w-md lg:max-w-lg
            dark:text-gray-300 text-gray-700 text-sm lg:text-base"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <div className="flex gap-8 mb-7">
              {[
                { number: "+1", label: "سال تجربه" },
                { number: "+3", label: "پروژه انجام شده" },
                { number: "+1000", label: "ساعت کدنویسی" },
              ].map((stat, index) => (
                <div className="text-center" key={index}>
                  <div
                    className="text-2xl font-bold
                  dark:text-white text-gray-900"
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs dark:text-gray-400
                  text-gray-600"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col sm:flex-row
            gap-4 w-full sm:w-auto"
            >
              <a
                href={CV}
                download
                className="w-full sm:w-auto inline-flex
                items-center justify-center gap-2 px-8
                py-3 rounded-full text-white font-medium
                bg-linear-to-l from-indigo-600 to-indigo-800
                transition-all duration-300 
                transform hover:scale-105
                hover:shadow-[0_0_40px_rgba(105,108,255,0.7)]
                text-base"
              >
                <DownloadIcon size={20} />
                رزومه من
              </a>
              <a
                href={"#تماس"}
                className="w-full sm:w-auto inline-flex
                items-center justify-center gap-2 px-8
                py-3 rounded-full dark:text-white text-black hover:text-white font-medium
                border-2 border-indigo-600 dark:border-indigo-500
                hover:bg-indigo-600 dark:hover:bg-indigo-500
                transition-all duration-300 
                transform hover:scale-105
                hover:shadow-[0_0_40px_rgba(105,108,255,0.7)]
                text-base"
              >
                <Mail size={20} />
                همکاری با من
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
