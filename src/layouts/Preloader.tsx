import { memo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dojo } from "../sections/data";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    let dismiss: ReturnType<typeof setTimeout> | undefined;
    let cap: ReturnType<typeof setTimeout> | undefined;
    const root = document.documentElement;

    root.classList.add("is-loading");

    const stopTicking = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const finish = () => {
      if (dismiss) clearTimeout(dismiss);
      if (cap) clearTimeout(cap);
      stopTicking();

      setProgress(100);
      dismiss = setTimeout(() => {
        setLoading(false);
        root.classList.remove("is-loading");
      }, 320);
    };

    const tick = () => {
      setProgress((p) => (p < 88 ? p + Math.round(Math.random() * 9) + 3 : p));
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    intervalRef.current = window.setInterval(tick, 180);

    // hard cap so a stalled asset never blocks the page
    cap = setTimeout(finish, 2600);

    return () => {
      window.removeEventListener("load", finish);
      if (dismiss) clearTimeout(dismiss);
      if (cap) clearTimeout(cap);
      stopTicking();
      root.classList.remove("is-loading");
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader_wrap"
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          aria-label="Loading the dojo website"
        >
          <div className="preloader__inner">
            <img
              src="assets/img/okg-logo.png"
              className="pre_logo"
              alt=""
              aria-hidden="true"
            />
<span className="preloader__en">
 Okinawa Gojukan Karate-Do Training School
</span>
          </div>

          <div className="pre_progress" role="presentation">
            <span style={{ width: `${progress}%` }}></span>
          </div>
          <span className="pre_percent">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Preloader);
