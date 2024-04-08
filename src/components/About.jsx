import React, { useState } from "react";
import heroImage from "/images/about.png";
import heroMobImage from "/images/about_mob.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [revenueManagementChecked, setRevenueManagementChecked] =
    useState(false);
  const [socialMarketingChecked, setSocialMarketingChecked] = useState(false);
  const [webDevChecked, setWebDevChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    switch (id) {
      case "revenueManagement":
        setRevenueManagementChecked(checked);
        break;
      case "socialMarketing":
        setSocialMarketingChecked(checked);
        break;
      case "webDev":
        setWebDevChecked(checked);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <buttoon className="closeIcons" onClick={handleClose}>
          <img
            src="/images/icons/close.svg"
            alt="Close Icon"
            onClick={handleClose}
          />
        </buttoon>
        <Modal.Body>
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
                <div className="row m-0">
                  <div className="col-md-6 ps-0">
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
                  </div>
                  <div className="col-md-6 pe-0">
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
                  </div>
                  <div className="col-md-6 ps-0">
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
                  </div>
                  <div className="col-md-6 pe-0">
                    <div className="formInner">
                      <label htmlFor="company_or_hotel">Company or Hotel</label>
                      <input
                        type="text"
                        name="company_or_hotel"
                        placeholder="Company or Hotel"
                        id="company_or_hotel"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-0">
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
                  </div>
                </div>
                <div className="serviceOptions">
                  <div className="serviceOptionsInner">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={
                          revenueManagementChecked ? "#00ff00" : "#787878"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={
                          revenueManagementChecked ? "#00ff00" : "#787878"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="revenueManagement"
                      checked={revenueManagementChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="revenueManagement">
                      Revenue Management
                    </label>
                  </div>
                  <div className="serviceOptionsInner">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={socialMarketingChecked ? "#00ff00" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={socialMarketingChecked ? "#00ff00" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="socialMarketing"
                      checked={socialMarketingChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="socialMarketing">
                      Social Media Marketing
                    </label>
                  </div>
                  <div className="serviceOptionsInner">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={webDevChecked ? "#00ff00" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={webDevChecked ? "#00ff00" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="checkbox"
                      id="webDev"
                      checked={webDevChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="webDev">Website Development</label>
                  </div>
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
        </Modal.Body>
      </Modal>

      <section className="aboutSectionMain">
        <div className="first_hero_section text-center">
          <div className="page_head_text">
            <h1>About Us</h1>
            <p>
              We are India's leading{" "}
              <span>Revenue Management & Digital Marketing</span> <br /> Company
              for Hotels, Resorts and Villas
            </p>
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={heroImage}
              type="image/jpeg"
              className="img-fluid"
            />
            <img src={heroMobImage} alt="Banner Image" className="img-fluid" />
          </picture>
          <br />
          <button className="letsGrow" onClick={() => setShow(true)}>
            Lets Grow
          </button>
        </div>
        <div className="whatWeDOSection">
          <div className="whatWeDOSectionInner">
            <h3 className="title text-center">What We Do?</h3>

            <div className="serviceGrid">
              <div className="serviceGridInner">
                <img src="/images/icons/flash.svg" alt="Boost your Hotel" />
                <h5>Boost your Hotel's Revenue by 10 – 20%</h5>
                <p>
                  We'll evaluate your online property presentation (OTAs) and
                  pinpoint areas for enhancement to boost online visibility and
                  bookings.
                </p>
              </div>
              <div className="serviceGridInner">
                <img src="/images/icons/online.svg" alt="online" />
                <h5>Enhance Your Hotel's Online Presence</h5>
                <p>
                  We use industry-leading digital marketing strategies and
                  follow OTA recommendations to optimize your online profiles.
                </p>
              </div>
              <div className="serviceGridInner">
                <img src="/images/icons/strategy.svg" alt="strategy" />
                <h5>Optimize Your Revenue <br /> Strategy </h5>
                <p>
                  We use dynamic pricing and upselling tactics, conduct rate
                  benchmarking, ensure rate parity, and analyze competitors to
                  boost your business revenue.
                </p>
              </div>
              <div className="serviceGridInner">
                <img src="/images/icons/report.svg" alt="report" />
                <h5>Revenue & Digital Marketing Reports</h5>
                <p>
                  Get regular updates on your property's performance with pace
                  reports, revenue reports, and monthly/yearly summaries for
                  easy tracking.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="letsGrow" onClick={() => setShow(true)}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="aboutWhyChooseUs">
          <div className="row m-0 aboutWhyChooseUsMain">
            <div className="col-12 col-md-6 py-0 aboutWhyChooseUsMainL">
              <img src="/images/why.svg" alt="Why" className="img-fluid" />
              <p>
                The need for digital marketing services shows no signs of
                declining and with so many agencies to choose from, choosing the
                correct one has become difficult. The company you choose will
                make or break your business. After all, you're entrusting these
                individuals with all of your marketing efforts, from web design
                to hotel social media growth. Understandably, you'd want to work
                with the best.
                <br />
                <br />
                Our team of revenue management and digital marketing experts
                will join your hotel management structure and work as an
                integral part of your team. We will handle all the tasks and
                responsibilities related to revenue management and digital
                marketing for your hotel.
              </p>
            </div>
            <div className="col-12 col-md-6 p-0 aboutWhyChooseUsMainR">
              <img src="/images/graph.png" alt="Graph" className="img-fluid w-100" />
            </div>
            <div className="col-12 p-0">
              <div className="whySlogan">
                <h3>
                  Don't waste time or money on ineffective digital marketing
                  techniques.{" "}
                </h3>
                <h2>
                  With Revenue Buzz, you can be confident that you are in good
                  hands.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="whyWeAreHereMain">
          <div className="row m-0 whyWeAreHereInner position-relative">
            <div className="col-md-6 whyWeAreHereInnerL">
              <h5>
                Why We Are <br /> Here?
              </h5>
              <p>
                The hotel sector is among the most dynamic and challenging.
                Hotels, homestays, and other types of lodging must negotiate a
                variety of challenges, including attracting guests, managing
                costs, producing income, and keeping their business viable. Not
                only that, but hotels require an efficient OTA management
                business, as OTAs are becoming a significant source of hotel
                reservations.
                <br />
                <br />
                However, single-individual hotels and homestays confront their
                own set of issues. We identified these obstacles as visibility,
                low economies of scale, a lack of revenue management skills,
                outsourcing issues, and so on. Revenue management and digital
                marketing, in particular, require additional knowledge, which
                many hotels do not have.
                <br />
                <br />
                Established hotels have an advantage over independent hotels.
                The hospitality industry, which is highly competitive, can be
                difficult terrain for beginners. This is where an OTA Management
                Company can assist hoteliers.{" "}
              </p>
            </div>
            <div className="col-md-6 whyWeAreHereInnerR">
              <h5>
                We're Here to <br /> Help.
              </h5>
              <p>
                Understanding these issues, Revenue Buzz was established to
                assist single-property hotels in maintaining and increasing
                profitability. We provide the following services for hotels and
                homestays:{" "}
              </p>

              <div className="keyPointsMain">
                <Link to="/revenuemanagement" className="keyPointsInner">
                  <svg
                    className="stroke"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 35L15 20M5 35L5 26.6667M25 35L25 13.3333M35 35V5"
                      stroke="#292929"
                      stroke-width="3.33333"
                      stroke-linecap="round"
                    />
                    <g clip-path="url(#clip0_530_1482)">
                      <path
                        d="M2.84766 10.6297L6.77267 6.70471C6.88798 6.5894 7.07493 6.5894 7.19024 6.70472L9.13484 8.64931C9.25015 8.76462 9.4371 8.76462 9.55242 8.64931L14.068 4.13376M11.1153 3.54321H14.3632C14.5263 3.54321 14.6585 3.67541 14.6585 3.83848V7.08647"
                        stroke="#292929"
                        stroke-width="1.18109"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_530_1482">
                        <rect
                          width="14.173"
                          height="14.173"
                          fill="white"
                          transform="translate(1.6665)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>Revenue Management</p>
                </Link>
                <Link to="/digital-marketing-agency" className="keyPointsInner">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1891 6.399C12.8392 6.71656 12.4697 7.61663 12.9389 9.49363L12.9422 9.50692C13.5209 11.9119 15.2658 15.0752 17.9682 18.1137C20.6941 21.1549 23.6291 23.2409 25.9356 24.0698L25.9496 24.0748L25.9636 24.0801C27.602 24.7052 28.5145 24.5583 28.9318 24.3057L29.0707 24.1826C29.2754 24.0007 29.4859 23.6485 29.5312 22.9511C29.577 22.2449 29.4396 21.3016 29.0586 20.162C28.2985 17.8886 26.6654 15.1231 24.2901 12.473C21.9124 9.82002 19.3503 7.88691 17.1801 6.87369C16.0922 6.36582 15.1724 6.12154 14.4659 6.08575C13.7724 6.05061 13.3967 6.21643 13.1891 6.399ZM18.4817 4.08575C21.1112 5.31342 23.9952 7.53406 26.5814 10.4194C29.17 13.3075 31.0548 16.4292 31.9767 19.1864C32.4367 20.5621 32.6814 21.9201 32.6015 23.1503C32.537 24.1458 32.2512 25.129 31.6305 25.9305V26.0396L31.1199 26.4981C29.449 27.9985 27.0163 27.7718 24.8809 26.9603C21.9402 25.8994 18.6054 23.4351 15.675 20.1649L15.6712 20.1607C12.7566 16.8844 10.6877 13.2826 9.95224 10.2333C9.39915 8.01516 9.47878 5.59542 11.1366 4.10688L11.1428 4.10115C12.1257 3.22847 13.383 2.95012 14.6216 3.01286C15.851 3.07515 17.1696 3.47314 18.4817 4.08575Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1347 4.83118C12.9107 5.17741 13.259 6.08708 12.9128 6.86297L3.29262 28.4212L3.29118 28.4244C2.49044 30.2079 4.18912 32.1518 6.10425 31.557L6.10672 31.5563L28.6232 24.4403C29.4334 24.1843 30.2977 24.6335 30.5537 25.4436C30.8097 26.2538 30.3606 27.1181 29.5504 27.3741L7.0281 34.4918L7.02229 34.4937C2.62132 35.8654 -1.42108 31.4118 0.483465 27.166C0.483195 27.1666 0.483736 27.1654 0.483465 27.166L10.1031 5.60915C10.4493 4.83325 11.3589 4.48494 12.1347 4.83118Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9038 27.7418C19.7145 27.4875 20.5779 27.9386 20.8321 28.7494L21.9186 32.2137C21.9184 32.2132 21.9187 32.2141 21.9186 32.2137C22.7677 34.9099 21.2529 37.8262 18.5549 38.6767L15.0883 39.7639C15.0879 39.764 15.0888 39.7637 15.0883 39.7639C12.3921 40.613 9.47581 39.0981 8.6255 36.4002L7.53763 32.9315C7.28338 32.1207 7.73445 31.2575 8.54525 31.0032C9.35593 30.7489 10.2192 31.2 10.4734 32.0108L11.5599 35.4752C11.5598 35.4748 11.5601 35.4755 11.5599 35.4752C11.8995 36.5505 13.086 37.1689 14.1634 36.8293L17.6299 35.7422C17.6295 35.7424 17.6303 35.7421 17.6299 35.7422C18.7052 35.4027 19.3236 34.2161 18.9841 33.1388L17.8962 29.6701C17.642 28.8593 18.0931 27.996 18.9038 27.7418Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.7787 2.35248C38.3829 2.94986 38.3884 3.92391 37.791 4.52809L35.9859 6.35371C35.3885 6.95787 34.4145 6.96339 33.8103 6.366C33.206 5.76863 33.2006 4.79457 33.798 4.19039L35.603 2.36478C36.2004 1.76061 37.1745 1.75509 37.7787 2.35248Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.0221 0.138806C28.7954 0.491041 29.1366 1.40338 28.7843 2.17656L27.9434 4.02265C27.5911 4.79584 26.6788 5.13709 25.9056 4.78485C25.1324 4.43262 24.7912 3.52028 25.1434 2.74709L25.9844 0.90101C26.3366 0.127816 27.249 -0.213429 28.0221 0.138806Z"
                      fill="#292929"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.8171 11.8889C40.2184 12.6378 39.9364 13.5702 39.1875 13.9714L37.4645 14.8945C36.7156 15.2958 35.7832 15.0138 35.382 14.2649C34.9807 13.516 35.2626 12.5836 36.0115 12.1824L37.7345 11.2592C38.4834 10.858 39.4158 11.14 39.8171 11.8889Z"
                      fill="#292929"
                    />
                  </svg>

                  <p>Digital Marketing</p>
                </Link>
                <Link to="/website-development" className="keyPointsInner">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 40C20.9205 40 21.6667 39.2538 21.6667 38.3334C21.6667 37.4129 20.9205 36.6667 20 36.6667V40ZM36.6667 20C36.6667 20.9205 37.4128 21.6667 38.3333 21.6667C39.2538 21.6667 40 20.9205 40 20H36.6667ZM2.11826 15.0443C1.22225 15.2552 0.666803 16.1524 0.877628 17.0484C1.08845 17.9445 1.98572 18.4999 2.88172 18.2891L2.11826 15.0443ZM13.3333 20.8334L14.9145 21.3604L13.3333 20.8334ZM11.8426 35.9213C11.431 36.7446 11.7647 37.7457 12.588 38.1574C13.4113 38.569 14.4124 38.2353 14.824 37.412L11.8426 35.9213ZM7.97177 5.03971C7.07322 5.23939 6.50667 6.12968 6.70635 7.02824C6.90602 7.92679 7.79632 8.49334 8.69487 8.29367L7.97177 5.03971ZM20 8.33335L18.9588 9.6348L20 8.33335ZM35.8269 11.4471C36.6261 10.9904 36.9037 9.97233 36.4471 9.17314C35.9904 8.37394 34.9723 8.09628 34.1731 8.55296L35.8269 11.4471ZM37.1548 39.5119C37.8057 40.1627 38.861 40.1627 39.5118 39.5119C40.1627 38.861 40.1627 37.8057 39.5118 37.1548L37.1548 39.5119ZM20 36.6667C10.7952 36.6667 3.33332 29.2048 3.33332 20H-1.01328e-05C-1.01328e-05 31.0457 8.9543 40 20 40V36.6667ZM3.33332 20C3.33332 10.7953 10.7952 3.33335 20 3.33335V2.03848e-05C8.9543 2.03848e-05 -1.01328e-05 8.95433 -1.01328e-05 20H3.33332ZM20 3.33335C29.2047 3.33335 36.6667 10.7953 36.6667 20H40C40 8.95433 31.0457 2.03848e-05 20 2.03848e-05V3.33335ZM2.88172 18.2891C5.1932 17.7452 8.12305 17.3566 10.1394 17.7232C11.1532 17.9075 11.6189 18.2259 11.8015 18.4765C11.9256 18.6466 12.1521 19.1066 11.7522 20.3063L14.9145 21.3604C15.5145 19.5601 15.4772 17.8604 14.4953 16.5132C13.572 15.2464 12.0898 14.6898 10.7356 14.4436C8.01582 13.9491 4.529 14.4771 2.11826 15.0443L2.88172 18.2891ZM11.7522 20.3063C11.1295 22.1743 10.695 23.5281 10.4313 24.5412C10.1735 25.5317 10.027 26.3771 10.1144 27.1632C10.2102 28.026 10.5677 28.6319 10.8725 29.1109C11.1748 29.586 11.4751 30.0104 11.8426 30.7454L14.824 29.2547C14.3582 28.323 13.9293 27.7057 13.6847 27.3214C13.4427 26.941 13.4356 26.8698 13.4273 26.7951C13.4105 26.6438 13.4202 26.2913 13.6572 25.3808C13.8883 24.4928 14.2871 23.2424 14.9145 21.3604L11.7522 20.3063ZM11.8426 30.7454C12.8585 32.7772 12.261 35.0845 11.8426 35.9213L14.824 37.412C15.5167 36.0266 16.4748 32.5562 14.824 29.2547L11.8426 30.7454ZM8.69487 8.29367C9.80515 8.04694 11.7271 7.81386 13.738 7.9543C15.7786 8.09682 17.6746 8.6074 18.9588 9.6348L21.0411 7.03191C18.9921 5.39264 16.3047 4.79211 13.9703 4.62907C11.6062 4.46396 9.3615 4.73088 7.97177 5.03971L8.69487 8.29367ZM18.9588 9.6348C19.8373 10.3376 20.4478 11.1197 21.1773 12.0005C21.8553 12.8193 22.7162 13.831 23.9778 14.4247C25.3147 15.0538 26.8551 15.1164 28.7336 14.6355C30.5756 14.1639 32.8628 13.1409 35.8269 11.4471L34.1731 8.55296C31.3038 10.1925 29.3202 11.0445 27.907 11.4063C26.5303 11.7587 25.8312 11.6129 25.3972 11.4087C24.888 11.1691 24.4467 10.7224 23.7446 9.8745C23.0939 9.08872 22.246 7.9958 21.0411 7.03191L18.9588 9.6348ZM33.7255 28.5294C33.7255 31.3991 31.3991 33.7255 28.5294 33.7255V37.0588C33.2401 37.0588 37.0588 33.2401 37.0588 28.5294H33.7255ZM28.5294 33.7255C25.6597 33.7255 23.3333 31.3991 23.3333 28.5294H20C20 33.2401 23.8187 37.0588 28.5294 37.0588V33.7255ZM23.3333 28.5294C23.3333 25.6597 25.6597 23.3334 28.5294 23.3334V20C23.8187 20 20 23.8188 20 28.5294H23.3333ZM28.5294 23.3334C31.3991 23.3334 33.7255 25.6597 33.7255 28.5294H37.0588C37.0588 23.8188 33.2401 20 28.5294 20V23.3334ZM32.2529 34.6099L37.1548 39.5119L39.5118 37.1548L34.6099 32.2529L32.2529 34.6099Z"
                      fill="#292929"
                    />
                  </svg>

                  <p>Website Development</p>
                </Link>
              </div>

              <p>
                In addition to being an OTA management company, we provide a
                one-stop solution for revenue management and digital marketing
                for hotels, resorts, and homestays. We provide numerous hotel
                services with the assistance of a specialised team of
                specialists, relieving hoteliers of their burdens. Hoteliers can
                use the time to give excellent hotel guest experiences to their
                consumers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
