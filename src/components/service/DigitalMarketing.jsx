import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ServiceIntro from "./../common/ServiceIntro";
import Commitment from "./../common/Commitment";

const DigitalMarketing = () => {
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
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your online visibility with our custom SEO services tailored to your industry. Our experienced team specializes in crafting data-driven SEO strategies to expand your reach and generate qualified leads.",
      iconPath: "/images/service/marketing/1.svg",
    },
    {
      title: "Web Design and Development",
      description:
        "Your website's design directly impacts customer engagement and conversions. Our expert web design team ensures your website reflects the latest industry trends and best practices to keep your audience engaged.",
      iconPath: "/images/service/marketing/2.svg",
    },
    {
      title: "Social Media Marketing",
      description:
        "Leverage the power of social media with our growth-focused strategies across all platforms. Our social media services help establish your brand with highly engaging content to grow your community and connect with your audience.",
      iconPath: "/images/service/marketing/3.svg",
    },
    {
      title: "Google My Business (GMB) Management",
      description:
        "Partner with Revenue Buzz to optimize your Google My Business listing for enhanced customer engagement, lead conversion, and sustained business growth.",
      iconPath: "/images/service/marketing/8.svg",
    },
    {
      title: "Pay-Per-Click (PPC)",
      description:
        "Maximize your revenue with our cost-effective PPC advertising services. Our professionals have extensive experience in managing successful advertising campaigns across various industries.",
      iconPath: "/images/service/marketing/4.svg",
    },
    {
      title: "Online Reputation Management",
      description:
        "Build and maintain a positive online reputation with our comprehensive ORM assistance. We help you establish a solid brand identity to set you apart in the competitive market.",
      iconPath: "/images/service/marketing/5.svg",
    },
    {
      title: "Content Writing",
      description:
        "High-quality content is essential for online success. Our team of content creators crafts relevant and compelling marketing copy to position your business as an authority in the industry.",
      iconPath: "/images/service/marketing/6.svg",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Our CRO strategies are designed to increase your conversions across all marketing efforts, from SEO to PPC, to drive tangible results for your business.",
      iconPath: "/images/service/marketing/7.svg",
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

      <div className="digitalMarketingAgencyMain">
        <ServiceIntro
          maintitle="Digital Marketing Agency"
          title="Hotels"
          subtitle="Become the Best Hotel in the Town"
          heroImage="/images/service/marketing.png"
          heroMobImage="/images/service/marketing_mob.png"
          description="In today's digital age, the hospitality industry relies heavily on effective online strategies to maximize visibility and attract guests. Research shows that 75 percent of travelers now book hotels online, with over 50 percent gathering information directly from hotel websites."
        />

        <div className="serviceKeyFeatures">
          <div className="text-center">
            <small>
              At Revenue Buzz, we understand the crucial role that digital
              marketing plays in driving bookings and enhancing guest
              experiences. Revenue Buzz is a leading digital marketing agency
              specializing in tailored solutions for hotels and accommodations.
            </small>
          </div>
          <h6>
            Our data-driven methodologies ensure that your hotel not only climbs
            search rankings but also establishes a compelling online presence
            that captivates your target audience.
          </h6>
          <div className="text-center mb-5">
            <small>
              Hotels digital marketing services Create a Strong Online Presence
              to Increase Guest Bookings. <br /> At Revenue Buzz, we offer a
              comprehensive range of hotel digital marketing services to cater
              to all your business needs.
            </small>
          </div>

          <div className="serviceGrid">
            {services.map((val, index) => {
              // if (index === 5) {
              //   return (
              //     <>
              //       <div className="logoDiv h-100 justify-content-center align-items-center">
              //         <img
              //           src="/images/logo_black.svg"
              //           alt="Logo"
              //           className="img-fluid"
              //         />
              //       </div>
              //     </>
              //   );
              // } else {
              //   return (
              //     <div className="serviceGridInner">
              //       <img src={val.iconPath} alt="Icon" />
              //       <h5>{val.title}</h5>
              //       <p>{val.description}</p>
              //     </div>
              //   );
              // }
              return (
                <div className="serviceGridInner">
                  <img src={val.iconPath} alt="Icon" />
                  <h5>{val.title}</h5>
                  <p>{val.description}</p>
                </div>
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

        <Commitment
          logo="/images/rank.svg"
          text="Experience Exponential Business Growth and Increased Revenue with Revenue Buzz - Your Trusted Hotels Digital Marketing Company. Contact Us Today to Get Started!"
        />
      </div>
    </>
  );
};

export default DigitalMarketing;
