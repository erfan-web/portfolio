// hooks/useResponsiveToastPosition.js

import { useEffect, useState } from "react";

export function useResponsiveToastPosition() {
  const [position, setPosition] = useState("top-right");

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setPosition(
        mobile.matches
          ? "top-center"
          : "top-right"
      );
    };

    update();

    mobile.addEventListener("change", update);

    return () => {
      mobile.removeEventListener("change", update);
    };
  }, []);

  return position;
}