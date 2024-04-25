import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <ContactModal show={show} handleClose={handleCloseModal} />
      <footer id="footer">
        <div className="footerMain">
          <div className="padding-lr-footer">
            <div className="footerPartOne">
              <div className="footerPartOneL">
                <h2>Contact Us</h2>
                <p>
                  Experience growth effortlessly! Take that <br /> first step
                  towards success with just one click.
                </p>
                <span>Don't miss out!</span>

                <div className="quickContact">
                  <a href="mailto:info@revenuebuzz.in">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.65 28.27H10.55C6.62 28.27 4 26.305 4 21.72V12.55C4 7.965 6.62 6 10.55 6H23.65C27.58 6 30.2 7.965 30.2 12.55V21.72C30.2 26.305 27.58 28.27 23.65 28.27Z" stroke="white" stroke-width="1.31" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0647 7.96497L19.5497 16.48C18.2004 17.5542 15.9865 17.5542 14.6372 16.48L6.12219 7.96497" stroke="white" stroke-width="1.31" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    info@revenuebuzz.in
                  </a>
                  <a href="tel:+919699376052">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.96 10.55V23.65C27.96 28.89 26.65 30.2 21.41 30.2H13.55C8.31 30.2 7 28.89 7 23.65V10.55C7 5.31 8.31 4 13.55 4H21.41C26.65 4 27.96 5.31 27.96 10.55Z" stroke="white" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1 8.58496H14.86" stroke="white" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.48 26.401C18.6014 26.401 19.5105 25.4919 19.5105 24.3705C19.5105 23.2491 18.6014 22.34 17.48 22.34C16.3586 22.34 15.4495 23.2491 15.4495 24.3705C15.4495 25.4919 16.3586 26.401 17.48 26.401Z" stroke="white" stroke-width="1.31" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    +91 9699376052
                  </a>
                  <p>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2958 18.9732C19.5531 18.9732 21.383 17.1433 21.383 14.886C21.383 12.6287 19.5531 10.7988 17.2958 10.7988C15.0385 10.7988 13.2086 12.6287 13.2086 14.886C13.2086 17.1433 15.0385 18.9732 17.2958 18.9732Z" stroke="white" stroke-width="1.31"/>
<path d="M6.31801 12.5019C8.89871 1.1573 25.706 1.1704 28.2736 12.515C29.7801 19.1698 25.6405 24.8028 22.0118 28.2874C19.3787 30.8288 15.2129 30.8288 12.5667 28.2874C8.95111 24.8028 4.81151 19.1567 6.31801 12.5019Z" stroke="white" stroke-width="1.31"/>
</svg>

                    Mumbai, Maharshatra
                  </p>
                </div>
              </div>
              <div className="footerPartOneR">
                <form>
                  <div className="formInner">
                    <label htmlFor="name">
                      Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="formInner">
                    <label htmlFor="email">
                      Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="formInner">
                    <label htmlFor="mobile">
                      Phone No<span>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone No"
                      name="mobile"
                      id="mobile"
                      required
                    />
                  </div>
                  <div className="formInner">
                    <label htmlFor="company_or_hotel">Company or Hotel</label>
                    <input
                      type="text"
                      name="company_or_hotel"
                      placeholder="Company or Hotel"
                      id="company_or_hotel"
                    />
                  </div>
                  <div className="formInner">
                    <label htmlFor="message">
                      Message<span>*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="formInner">
                    <label></label>
                    <div>
                      <button type="submit">
                        Send{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3l3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47M4.85 9.58l12.77-4.26l-7.09 7.09Zm9.58 9.57l-2.84-5.68l7.09-7.09Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="footerPartTwo">
              {/* <div className="col-lg-8 ps-0 footerPartTwoL"> */}
              <div className="footerPartTwoLGrid">
                <div className="footerPartTwoLGridInner">
                  <p>Follow Us</p>
                  <Link to="/">
                    <img
                      src="/images/social/Instagram.svg"
                      alt="Instagram icon"
                    />{" "}
                    Instagram
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/social/facebook.svg"
                      alt="facebook icon"
                    />{" "}
                    Facebook
                  </Link>
                  <Link to="/">
                    <img
                      src="/images/social/linkedin.svg"
                      alt="linkedin icon"
                    />{" "}
                    LinkedIn
                  </Link>
                </div>
                <div className="footerPartTwoLGridInner">
                  <p>Explore</p>
                  <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                    About Us
                  </Link>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Blogs
                  </Link>
                  <Link to="/" onClick={() => setShow(true)}>
                    Contact Us
                  </Link>
                </div>
                <div className="footerPartTwoLGridInner">
                  <p>Services</p>
                  <Link
                    to="/revenuemanagement"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Revenue Management
                  </Link>
                  <Link
                    to="/digital-marketing-agency"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/website-development"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Web Development
                  </Link>
                </div>
                {/* <div className="footerPartTwoLGridInner">
                  <p>Company</p>
                  <Link to="/">Investor Relations</Link>
                  <Link to="/">Disclaimer</Link>
                  <Link to="/">Terms & Conditions</Link>
                  <Link to="/">Privacy Policy</Link>
                </div> */}
              </div>
              {/* </div> */}
              {/* <div className="col-lg-4 pe-0 footerPartTwoR"> */}
              <div className="d-flex align-items-center footerPartTwoR">
                <img
                  src="/images/footer_logo.svg"
                  alt="Footer Logo"
                  className="img-fluid"
                />
                <h4>Lets Grow Together!</h4>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="copyRightTag">
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - RevenueBuzz
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
