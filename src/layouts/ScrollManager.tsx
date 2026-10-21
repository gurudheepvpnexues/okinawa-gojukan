import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const getHeaderOffset = () => {
  if (typeof window === "undefined") return 110;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-h")
    .trim();
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 110;
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          getHeaderOffset() -
          16;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
