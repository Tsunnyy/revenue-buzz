import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ServiceIntro from "./../common/ServiceIntro";
import Commitment from "./../common/Commitment";
import ContactModal from "./../common/ContactModal";

const WebsiteDevelopment = () => {
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
      title: "Asset Utilisation",
      description:
        "Our team utilizes high-quality images, graphics, and layouts to transform the website into an effective marketing tool. We also integrate a seamless booking engine into the website, simplifying the reservation process for guests.",
      iconPath: "/images/service/website/1.svg",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "This another key focus area in hotel website development. We optimize websites with strategic keyword placement, meta tags, image optimization, & other on-page SEO practices to improve search engine rankings, visibility, and website traffic.",
      iconPath: "/images/service/website/2.svg",
    },
    {
      title: "Social Media Promotion",
      description:
        "In addition to website development and SEO, we leverage social media platforms such as Facebook, Instagram and LinkedIn to promote hotel websites, expanding their reach and driving more reservations.",
      iconPath: "/images/service/website/3.svg",
    },
  ];

  return (
    <>
      <ContactModal show={show} handleClose={handleCloseModal} />
      <div className="websiteDevelopementMain">
        <ServiceIntro
          maintitle="Website Development"
          title="Hotel"
          subtitle="Establish a new platform for your Hotel"
          heroImage="/images/service/website.png"
          heroMobImage="/images/service/website_mob.png"
          description="For a hotel business to thrive, having a website that not only looks appealing but also ranks high on search engines is crucial. A website serves as a vital tool for hotels to establish an online presence, attract direct bookings, and reduce additional costs. Therefore, hotel website development plays a pivotal role in driving the growth of the hotel business."
        />
        <div className="serviceKeyFeaturesMain">
          <div className="serviceKeyFeatures">
            <div className="text-center">
              <small>
                Revenue Buzz understands the significance of a well-crafted
                website that leaves a lasting impression on visitors. Our
                comprehensive approach ensures that hotels receive a one-stop
                solution for all their website-related needs
              </small>
            </div>
            <h6>
              We specialize in creating aesthetically pleasing, user-friendly
              websites that resonate with the hotel's brand identity.
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
            </div>
            <div className="text-md-center">
              <button className="letsGrow" onClick={() => setShow(true)}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="websitePerformanceSection">
          <div className="websitePerformanceMain row m-0 position-relative">
            <div className="websitePerformanceL col-md-7 p-0">
              <img
                src="/images/footer_logo.svg"
                alt="Phone Image"
                className="img-fluid"
              />
              <p>
                We also monitor website performance through tools like Google
                Search Console, making necessary enhancements to ensure optimal
                results.
              </p>
              {/* <div className="d-flex spanWithImage"> */}
              <span>
                Revenue Buzz is a leading hotel website development company
                dedicated to enhancing online presence and revenue growth for
                hotels. Our commitment to designing engaging, mobile-friendly
                websites with fast loading speeds, coupled with top-notch SEO
                content, makes us the preferred choice for hotels looking to
                elevate their digital presence.
              </span>
              {/* <div className="d-md-none">
                <img
                  src="/images/mobile.png"
                  alt="Phone Image"
                  className="img-fluid"
                />
              </div> */}
              {/* </div> */}
            </div>
            <div className="websitePerformanceR col-md-5 p-0 d-md-block">
              <img
                src="/images/mobile.png"
                alt="Phone Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <Commitment
          logo="/images/like.svg"
          text="Contact Revenue Buzz today for unparalleled digital expertise that sets your hotel apart and takes your online presence to new heights. Let us help you achieve success in the competitive hospitality industry"
        />
      </div>
    </>
  );
};

export default WebsiteDevelopment;
