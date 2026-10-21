import { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dojo } from "../sections/data";

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

interface MobileOffcanvasProps {
  isOpen: boolean;
  toggleOffcanvas: () => void;
}

const MobileOffcanvas = ({ isOpen, toggleOffcanvas }: MobileOffcanvasProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { pathname } = useLocation();

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  useEffect(() => {
    setOpenDropdown(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("offcanvas-open", isOpen);
    return () => document.body.classList.remove("offcanvas-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggleOffcanvas();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, toggleOffcanvas]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <>
      <div className="fix-area">
        <div
          className={`offcanvas__info ${isOpen ? "info-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          aria-hidden={!isOpen}
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/" className="brand_link" onClick={toggleOffcanvas}>
                    <span className="brand_badge">
                      <img
                        src="assets/img/okg-logo.png"
                        alt="Okinawa Gojukan Karate-Do emblem"
                      />
                    </span>
                    <span className="brand_text">
                      <span className="brand_kn">
                        ಒಕಿನಾವಾ ಗೋಜುಕನ್ ಕರಾಟೆ-ತರಬೇತಿ ಶಾಲೆ
                      </span>
                      <span className="brand_en">
                        Okinawa <b>Gojukan Karate-Do</b> Training School
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleOffcanvas} aria-label="Close navigation menu">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div className="mobile-menu fix mb-3">
                <ul>
                  {navItems.map((item, index) => (
                    <li
                      key={item.to}
                      className={isActive(item.to) ? "active" : ""}
                      style={{ transitionDelay: `${0.05 + index * 0.05}s` }}
                    >
                      <Link to={item.to} onClick={toggleOffcanvas}>
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  <li className="has-child-items">
                    <button
                      type="button"
                      className="dropdown-toggle-btn"
                      onClick={toggleDropdown}
                      aria-expanded={openDropdown}
                    >
                      More <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    <ul
                      className="sub-menu"
                      style={{
                        display: openDropdown ? "block" : "none",
                      }}
                    >
                      {detailItems.map((item) => (
                        <li key={item.to}>
                          <Link to={item.to} onClick={toggleOffcanvas}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="offcanvas__contact">
                <a href={`tel:+91${dojo.phone}`} className="offcanvas__phone">
                  <i className="ph ph-phone-call"></i> +91 {dojo.phone}
                </a>
                <a href={`mailto:${dojo.email}`} className="offcanvas__mail">
                  <i className="ph ph-envelope-simple"></i> {dojo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="offcanvas__overlay overlay-open"
          onClick={toggleOffcanvas}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default memo(MobileOffcanvas);
