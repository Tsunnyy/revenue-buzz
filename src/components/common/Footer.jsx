import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.27 27.265H9.17C5.24 27.265 2.62 25.3 2.62 20.715V11.545C2.62 6.96 5.24 4.995 9.17 4.995H22.27C26.2 4.995 28.82 6.96 28.82 11.545V20.715C28.82 25.3 26.2 27.265 22.27 27.265Z"
                        stroke="white"
                        stroke-width="1.31"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.0297 7.61496L18.1697 15.475C16.8204 16.5492 14.6065 16.5492 13.2572 15.475L4.74219 6.95996"
                        stroke="white"
                        stroke-width="1.31"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    info@revenuebuzz.in
                  </a>
                  <a href="tel:+919699376052">
                    <svg
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2 7.76997V20.87C22.2 26.11 20.89 27.42 15.65 27.42H7.78999C2.54999 27.42 1.23999 26.11 1.23999 20.87V7.76997C1.23999 2.52997 2.54999 1.21997 7.78999 1.21997H15.65C20.89 1.21997 22.2 2.52997 22.2 7.76997Z"
                        stroke="white"
                        stroke-width="1.31"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.34 5.80493H9.09998"
                        stroke="white"
                        stroke-width="1.31"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.72 23.6209C12.8414 23.6209 13.7505 22.7118 13.7505 21.5904C13.7505 20.469 12.8414 19.5599 11.72 19.5599C10.5986 19.5599 9.68951 20.469 9.68951 21.5904C9.68951 22.7118 10.5986 23.6209 11.72 23.6209Z"
                        stroke="white"
                        stroke-width="1.31"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    +91 9699376052
                  </a>
                  <p>
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.03 18.3833C18.2873 18.3833 20.1172 16.5534 20.1172 14.2961C20.1172 12.0388 18.2873 10.2089 16.03 10.2089C13.7727 10.2089 11.9428 12.0388 11.9428 14.2961C11.9428 16.5534 13.7727 18.3833 16.03 18.3833Z"
                        stroke="white"
                        stroke-width="1.31"
                      />
                      <path
                        d="M5.0522 11.9119C7.6329 0.567337 24.4402 0.580438 27.0078 11.925C28.5143 18.5798 24.3747 24.2128 20.746 27.6974C18.1129 30.2388 13.9471 30.2388 11.3009 27.6974C7.6853 24.2128 3.5457 18.5667 5.0522 11.9119Z"
                        stroke="white"
                        stroke-width="1.31"
                      />
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
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
          <p className="text-center">Copyright © 2024 - RevenueBuzz</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
