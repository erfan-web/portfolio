import { Mail, Phone } from "lucide-react";
import logoFooter from "../assets/images/logo-desktop.svg";
import { navItems, socialsFooter } from "../data";
function Footer() {
  return (
    <footer
      className="  relative
    bg-linear-to-bl from-indigo-400 to-white
    dark:bg-linear-to-bl dark:from-indigo-950 dark:to-black

    before:absolute
    before:top-0
    before:left-0
    before:right-0
    before:h-0.5
    before:bg-linear-to-l
    before:from-indigo-900/80
    before:via-indigo-700/30
    before:to-indigo-500/20
    before:from-10% 

    dark:before:from-indigo-600
    dark:before:via-indigo-400
    dark:before:to-indigo-200"
    >
      <div className="container px-6 max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 py-12 gap-12"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {/* Logo and about */}
          <div className="space-y-4 lg:col-span-5">
            <img src={logoFooter} alt="logo" />
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              فرانت اند دولوپر با تمرکز روی React، Next.js، Tailwind و پیاده سازی
              دقیق رابط های کاربری از روی Figma.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-3">
            <h5
              className="text-lg text-black dark:text-white
            font-bold"
            >
              راه‌های ارتباطی
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href="tel:09192716228"
                className="text-gray-700 dark:text-gray-300
            hover:text-indigo-500 text-sm
            dark:hover:text-white inline-flex gap-2"
              >
                <Phone size={20} />
                <span dir="ltr">+98 919 271 6228</span>
              </a>
              <a
                href="mailto:erfanahmadi.web@gmail.com"
                className="text-gray-700 dark:text-gray-300
            hover:text-indigo-500 text-sm
            dark:hover:text-white inline-flex gap-2"
              >
                <Mail size={20} />
                erfanahmadi.web@gmail.com
              </a>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-2 hidden lg:block">
            <h5
              className="text-lg text-black dark:text-white
            font-bold"
            >
              دسترسی سریع
            </h5>
            <div className="flex flex-col-reverse gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-gray-700 dark:text-gray-300
            hover:text-indigo-500 text-sm
            dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h5
              className="text-lg text-black dark:text-white
            font-bold"
            >
              شبکه های اجتماعی
            </h5>
            <div className="flex gap-3">
              {socialsFooter.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.alt}
                    data-aos="zoom-in"
                    data-aos-delay={(i + 1) * 500}
                    className={`
                  size-9 rounded-full flex shrink-0
                  items-center justify-center
                  text-lg border border-gray-200
                  dark:border-gray-800 bg-white/50
                  dark:bg-gray-900/50 backdrop-blur-sm
                  dark:text-gray-300 text-gray-700
                  transition-all duration-300
                  hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="py-6 relative
            before:absolute
    before:top-0
    before:left-0
    before:right-0
    before:h-0.5
    before:bg-linear-to-br
    before:from-indigo-900/80
    before:via-indigo-700/30
    before:to-indigo-500/20
    before:from-10% 

    dark:before:from-indigo-600
    dark:before:via-indigo-400
    dark:before:to-indigo-200
 "
        >
          <p className="text-center dark:text-white text-black text-sm">
            1405 تمامی حقوق مادی و معنوی این سایت متعلق به عرفان احمدی می‌باشد.
            ©
          </p>
        </div>
      </div>
      <div className="w-full h-24 lg:hidden"></div>
    </footer>
  );
}

export default Footer;
