import { memo, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MobileOffcanvas from "../layouts/MobileOffcanvas";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const detailItems = [
  { label: "Program Details", to: "/program-details" },
  { label: "Event Details", to: "/event-details" },
  { label: "Blog Details", to: "/blog-details" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Support", to: "/support" },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleOffcanvas = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />

      <MobileOffcanvas isOpen={isOpen} toggleOffcanvas={toggleOffcanvas} />

      <header
        id="mar_header"
        className={`navbar position-absolute top-0 start-0 w-100 z-3 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="site_logo d-inline-block my-auto">
            <Link to="/" className="brand_link" aria-label="Okinawa Gojukan Karate-Do home">
              <span className="brand_badge">
                <img
                  src="assets/img/okg-logo.png"
                  alt="Okinawa Gojukan Karate-Do emblem"
                />
              </span>
              <span className="brand_text">
                <span className="brand_kn">ಒಕಿನಾವಾ ಗೋಜುಕನ್ ಕರಾಟೆ-ತರಬೇತಿ ಶಾಲೆ</span>
                <span className="brand_en">
                  Okinawa <b>Gojukan Karate-Do</b> Training School
                </span>
              </span>
            </Link>
          </div>

          <nav className="main-menu align-self-center">
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.to}
                  className={isActive(item.to) ? "active" : ""}
                >
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}

              <li
                className={`has-child-items ${
                  dropdownOpen ? "open" : ""
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-dropdown-btn"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                >
                  More <i className="fa-solid fa-chevron-down"></i>
                </button>
                <ul className="sub-menu">
                  {detailItems.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          <div className="header__hamburger d-xl-none my-auto">
            <button
              className="sidebar__toggle"
              onClick={toggleOffcanvas}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <i className="ph ph-list"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
