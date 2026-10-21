import { memo, useEffect, useRef, useState } from "react";

const BackToTop = () => {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScroll(Math.min(Math.max(scrolled, 0), 100));
      setActive(scrollTop > 100);
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`progress-wrap ${active ? "active-progress" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        aria-hidden="true"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: 308,
            strokeDashoffset: 308 - (308 * scroll) / 100,
          }}
        />
      </svg>
    </button>
  );
};

export default memo(BackToTop);
