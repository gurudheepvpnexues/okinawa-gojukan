import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { dojo } from "../sections/data";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("error");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setMessage("Thank you for subscribing.");
    setEmail("");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 },
    }),
  };

  return (
    <>
      <motion.footer
        className="mar_footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row mb-4 g-4">
            {/* About */}
            <motion.div className="col-lg-3 col-md-4 col-12" custom={0} variants={fadeUp}>
              <div className="footer_about mb-md-0 mb-5">
                <Link to="/" className="brand_link brand--lg mb-3">
                  <span className="brand_badge">
                    <img src="assets/img/okg-logo.png" alt="Okinawa Gojukan Karate-Do emblem" />
                  </span>
<span className="brand_text">
 Okinawa Gojukan Karate-Do Training School
</span>
                </Link>
                <p>
                  Trained Indian Defence services (Army, Navy, Airforce) and
                  Para &amp; NSG Cammandos
                </p>
                <span>Connect with us</span>
                <ul className="social_link">
                  <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/918971895922" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* About Links */}
            <motion.div className="col-xl-3 col-lg-4 col-md-6 col-12" custom={1} variants={fadeUp}>
              <div className="footer_widget">
                <h3 className="footer-title">Explore</h3>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/programs">Our Programs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/support">Support</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div className="col-xl-3 col-lg-4 col-md-6 col-12" custom={2} variants={fadeUp}>
              <div className="footer_widget">
                <h3 className="footer-title">Quick Contact</h3>
                <div className="footer_contact">
                  <p>
                    <i className="ph ph-map-pin-area"></i>
                    <span>16/290, 24th Cross, Maruthi Nagar,<br />Yelahanka, Bangalore-64</span>
                  </p>
                  <p>
                    <i className="ph ph-phone-call"></i>
                    <span>
                      <a href={`tel:${dojo.phone}`}>{dojo.phone}</a> / <a href={`tel:${dojo.phone2}`}>{dojo.phone2}</a>
                    </span>
                  </p>
                  <p>
                    <i className="ph ph-envelope-simple"></i>
                    <span><a href={`mailto:${dojo.email}`}>{dojo.email}</a></span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div className="col-xl-3 col-lg-4 col-md-6 col-12" custom={3} variants={fadeUp}>
              <div className="footer_widget">
                <h3 className="footer-title">Subscribe To Newsletter</h3>
                <div id="newsletter_form">
                  <form className="newsletter_form" onSubmit={handleSubmit}>
                    <label className="visually-hidden" htmlFor="newsletter-email">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      required
                    />
                    <button type="submit">Subscribe Now</button>
                  </form>
                  {message && (
                    <div
                      id="form-messages"
                      className={
                        status === "success" ? "form-success mt-3" : "form-error mt-3"
                      }
                      role="status"
                    >
                      {message}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div className="row" custom={4} variants={fadeUp}>
            <div className="col-12">
              <div className="divider dwhite mb-4"></div>
              <div className="mar_copyright text-center">
                <p>
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link to="/">Okinawa Gojukan Karate-Do Training School</Link>. All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Shapes */}
        <img src="assets/img/shapes/stars.svg" alt="" aria-hidden="true" className="footer_stars position-absolute" />
        <img src="assets/img/shapes/fdots.svg" alt="" aria-hidden="true" className="footer_fdots position-absolute" />
        <img src="assets/img/shapes/fcircle.svg" alt="" aria-hidden="true" className="footer_fcircle position-absolute" />
        <img src="assets/img/shapes/arrowsup.svg" alt="" aria-hidden="true" className="footer_arrowsup position-absolute" />
      </motion.footer>
    </>
  );
};

export default memo(Footer);
