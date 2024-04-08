import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ServiceIntro from "./../common/ServiceIntro";
import Commitment from "./../common/Commitment";
import ContactModal from "./../common/ContactModal";

const DigitalMarketing = () => {
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
      <ContactModal show={show} handleClose={handleCloseModal} />

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
