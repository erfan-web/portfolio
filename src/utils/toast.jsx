import { IoIosCheckmarkCircle, IoIosInformationCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

import { X } from "lucide-react";
import { toast as sonnerToast } from "sonner";

const styles = {
  success: {
    icon: IoIosCheckmarkCircle,
    iconClass: "text-green-500",
    barClass: "bg-green-500",
    iconBgClass: "bg-green-500/10",
  },

  error: {
    icon: IoCloseCircle,
    iconClass: "text-[#dd373d]",
    barClass: "bg-[#dd373d]",
    iconBgClass: "bg-[#dd373d]/10",
  },

  info: {
    icon: IoIosInformationCircle,
    iconClass: "text-primary",
    barClass: "bg-primary",
  },
};

export function showToast(message, type = "info", duration = 3000) {
  const { icon: Icon, iconClass, barClass, iconBgClass } = styles[type];

  sonnerToast.custom(
    (t) => (
      <div
        dir="rtl"
        className="
          relative flex items-center gap-x-4 font-display
          overflow-hidden rounded-xl group
          bg-popover px-5 py-4
          text-base shadow-xl dark:bg-zinc-900 border-2 dark:border-zinc-800 bg-white border-gray-100
          lg:min-w-[480px] w-full
        "
      >
        {/* Icon */}
        <div
          className={`size-13 ${iconBgClass} flex items-center justify-center shrink-0 rounded-full`}
        >
          <Icon className={`size-7 shrink-0 ${iconClass}`} />
        </div>
        {/* Message */}
        <div className="space-y-1 flex-1">
          <div className="font-bold text-sm leading-7">
            {type === "error" ? "خطا" : "موفق"}
          </div>
          <span className="text-xs font-medium leading-6 dark:text-gray-300 text-gray-700">
            {message}
          </span>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => sonnerToast.dismiss(t)}
          className={`
            shrink-0 rounded-md p-1 absolute top-1.5 left-1.5
            transition-colors
            hover:bg-neutral-100
            dark:hover:bg-zinc-800
      
          `}
          aria-label="بستن"
        >
          <X size={18} />
        </button>

        {/* Progress bar */}
        <div
          className={`
            absolute bottom-0 right-0
            h-0.5 w-full origin-right
            ${barClass}
          `}
          style={{
            animation: `toast-progress ${duration}ms linear forwards`,
          }}
        />
      </div>
    ),
    {
      duration,
    },
  );
}
