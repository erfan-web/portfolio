import { skills } from "../data";

function Skills() {
  return (
    <section
      id="skills"
      className="
      min-h-screen flex items-center px-4 py-20 
      lg:px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 size-80
        bg-indigo-500/5 rounded-full blur-3xl"
        />
        <div
          className="absolute -bottom-40 -right-40 size-80
        bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>
      <div
        className=" max-w-6xl mx-auto w-full 
        relative z-10"
        data-aos="fade-up"
      >
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center
          gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10
          border border-indigo-500/20 mb-5"
          >
            <span
              className="size-2 rounded-full bg-indigo-500
            animate-pulse"
            />
            <span
              className="text-xs sm:text-sm font-medium
            dark:text-indigo-300 text-indigo-600"
            >
              تخصص
            </span>
          </div>
          <h2
            className="
          text-3xl sm:text-4xl lg:text-5xl font-bold
          mb-4 dark:text-indigo-400 text-indigo-600 
          leading-tight"
          >
            تخصص و تکنولوژی
          </h2>
          <p
            className="text-base
           leading-relaxed dark:text-gray-300
          text-gray-700"
          >
            نگاهی به تخصص و ابزارهایی که با آن ها کار میکنم.
          </p>
        </div>
        <div
          className="w-full max-w-[968px] mx-auto lg:gap-8 gap-3
        flex items-center justify-center flex-wrap "
        >
          {skills.map((skill, i) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center shrink-0
              gap-2 hover:scale-110 
              transition-transform duration-500"
              >
                <div
                  className="size-24 p-4 md:w-28 
                rounded-full flex items-center 
                justify-center shrink-0"
                >
                  <div
                    className="size-18 p-2 rounded-md 
                  shadow-lg dark:bg-gray-900/50 
                  dark:text-gray-300 
                  bg-white/50 text-gray-700 backdrop-blur-sm shrink-0"
                  >
                    <IconComponent className="w-full h-full" />
                  </div>
                </div>
                <span className="text-sm md:text-base text-gray-900 dark:text-gray-50">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
