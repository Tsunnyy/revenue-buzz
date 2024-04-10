import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import heroImage from "/images/service/management.png";
import heroMobImage from "/images/service/management_mob.png";
import ServiceIntro from "./../common/ServiceIntro";
import Commitment from "./../common/Commitment";
import ContactModal from "./../common/ContactModal";

const Management = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
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
      <ContactModal show={show} handleClose={handleCloseModal} />

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
