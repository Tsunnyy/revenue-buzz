import React from "react";

const ServiceIntro = ({
  maintitle,
  title,
  subtitle,
  heroImage,
  heroMobImage,
  description,
}) => {
  return (
    <>
      <div className="first_hero_section text-center">
        <div className="page_head_text">
          <h1>
            <strong>{title}</strong> {maintitle}
          </h1>
          <p>{subtitle}</p>
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
        <small>{description}</small>
        <div className="verticleLine"></div>
      </div>
    </>
  );
};

export default ServiceIntro;
