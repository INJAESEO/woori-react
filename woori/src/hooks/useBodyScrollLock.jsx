import { useLayoutEffect } from "react";

export const useBodyScrollLock = (isEffectOn) => {
  useLayoutEffect(() => {
    if (isEffectOn) {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  });
};
