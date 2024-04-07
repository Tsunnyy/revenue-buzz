import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import heroImage from "/images/service/management.png";
import heroMobImage from "/images/service/management_mob.png";
import ServiceIntro from "./../common/ServiceIntro";
import Commitment from "./../common/Commitment";

const Management = () => {
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
  const services = [
    {
      iconPath: "/images/service/management/1.svg",
      title: "Revenue and Yield Management",
      description:
        "Yield management involves tactical changes in pricing and cancellation policies, while revenue management encompasses strategic decisions related to room inventory distribution, rates, and room offerings.",
    },
    {
      iconPath: "/images/service/management/2.svg",
      title: "Demand Forecasting and Seasonal Adaptation",
      description:
        "In addition to yield management, demand forecasting is crucial for adapting prices, policies, and strategies based on seasonality, such as off-season, peak season, and holiday season.",
    },
    {
      iconPath: "/images/service/management/3.svg",
      title: "Addressing OTA Issues",
      description:
        "We handle OTA issues for hosts, from payments to listing management and competitive pricing, ensuring a seamless experience and optimizing RevPar performance while managing social media presence.",
    },
    {
      iconPath: "/images/service/management/4.svg",
      title: "Expertise in Revenue Management",
      description:
        "As an external hotel revenue agency, we offer specialized expertise in revenue and yield management, allowing us to effectively consolidate and allocate revenue sources to maximize profitability for our clients.",
    },
    {
      iconPath: "/images/service/management/5.svg",
      title: "Ongoing Performance Tracking and Adaptation",
      description:
        "We monitor property performance, adjust OTA rates, and develop strategies for revenue optimization, ensuring our services evolve to meet market demands effectively and consistently.",
    },
  ];

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

      <div className="hotelRevenueManagement">
        {/* <div className="first_hero_section text-center">
          <div className="page_head_text">
            <h1>
              <strong>Hotel</strong> Revenue Management
            </h1>
            <p>Get the Best Potential out of your Hotel</p>
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
          <small>
            Hotel Revenue Management is all about maximizing revenue by selling
            the right rooms, at the right prices, through the right channels,{" "}
            <br /> to the right customers. Revenue management refers to applying
            disciplined data analytics to maximize a Hotel’s profitability.
          </small>
          <div className="verticleLine"></div>
        </div> */}
        <ServiceIntro
          maintitle="Revenue Management"
          title="Hotel"
          subtitle="Get the Best Potential out of your Hotel"
          heroImage="/images/service/management.png"
          heroMobImage="/images/service/management_mob.png"
          description="Hotel Revenue Management is all about maximizing revenue by selling
          the right rooms, at the right prices, through the right channels,
          to the right customers. Revenue management refers to applying
          disciplined data analytics to maximize a Hotel’s profitability."
        />
        <div className="serviceKeyFeaturesMain">
          <div className="serviceKeyFeatures">
            <div className="text-center">
              <small>
                To boost hotel revenue, various factors like room types,
                seasonal trends, guest numbers, cancellation policies, and more
                need careful consideration.
              </small>
            </div>
            <h6>
              Our aim is to guide hoteliers through the complexities of revenue
              and yield management, ensuring profitability.
            </h6>
            <div className="serviceGrid">
              {services.map((val) => {
                return (
                  <>
                    <div className="serviceGridInner">
                      <img src={val.iconPath} alt="Icon" />
                      <h5>{val.title}</h5>
                      <p>{val.description}</p>
                    </div>
                  </>
                );
              })}
              <div className="logoDiv h-100 justify-content-center align-items-center">
                <img
                  src="/images/logo_black.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="text-md-center">
              <button className="letsGrow" onClick={() => setShow(true)}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Commitment
          logo="/images/cup.svg"
          text="Through our commitment to excellence, we have established
              ourselves as one of the premier revenue management companies in
              Mumbai, providing comprehensive solutions to drive revenue and
              profitability for our clients."
        />
      </div>
    </>
  );
};

export default Management;
