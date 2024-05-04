import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import { formValidation } from "./../../formValidation";

const ContactModal = ({ show, handleClose }) => {
  const [revenueManagementChecked, setRevenueManagementChecked] =
    useState(false);
  const [socialMarketingChecked, setSocialMarketingChecked] = useState(false);
  const [webDevChecked, setWebDevChecked] = useState(false);

  let initialValues = {
    name: "",
    email: "",
    message: "",
    company: "",
    mobile: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formValidation,
      onSubmit: (data) => {
        console.log(data);
      },
    });

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
            <div className="footerPartOneL position-relative">
              <h2>Contact Us</h2>
              <p>
                Experience growth effortlessly! Take that first step towards
                success with just one click.
              </p>
              <span>Don't miss out!</span>
              <div className="quickContact">
                <a href="mailto:info@revenuebuzz.in">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.65 28.27H10.55C6.62 28.27 4 26.305 4 21.72V12.55C4 7.965 6.62 6 10.55 6H23.65C27.58 6 30.2 7.965 30.2 12.55V21.72C30.2 26.305 27.58 28.27 23.65 28.27Z"
                      stroke="white"
                      stroke-width="1.31"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.0647 7.96497L19.5497 16.48C18.2004 17.5542 15.9865 17.5542 14.6372 16.48L6.12219 7.96497"
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
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.96 10.55V23.65C27.96 28.89 26.65 30.2 21.41 30.2H13.55C8.31 30.2 7 28.89 7 23.65V10.55C7 5.31 8.31 4 13.55 4H21.41C26.65 4 27.96 5.31 27.96 10.55Z"
                      stroke="white"
                      stroke-width="1.31"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.1 8.58496H14.86"
                      stroke="white"
                      stroke-width="1.31"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.48 26.401C18.6014 26.401 19.5105 25.4919 19.5105 24.3705C19.5105 23.2491 18.6014 22.34 17.48 22.34C16.3586 22.34 15.4495 23.2491 15.4495 24.3705C15.4495 25.4919 16.3586 26.401 17.48 26.401Z"
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
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2958 18.9732C19.5531 18.9732 21.383 17.1433 21.383 14.886C21.383 12.6287 19.5531 10.7988 17.2958 10.7988C15.0385 10.7988 13.2086 12.6287 13.2086 14.886C13.2086 17.1433 15.0385 18.9732 17.2958 18.9732Z"
                      stroke="white"
                      stroke-width="1.31"
                    />
                    <path
                      d="M6.31801 12.5019C8.89871 1.1573 25.706 1.1704 28.2736 12.515C29.7801 19.1698 25.6405 24.8028 22.0118 28.2874C19.3787 30.8288 15.2129 30.8288 12.5667 28.2874C8.95111 24.8028 4.81151 19.1567 6.31801 12.5019Z"
                      stroke="white"
                      stroke-width="1.31"
                    />
                  </svg>
                  Mumbai, Maharshatra
                </p>
              </div>
              <img
                src="/images/footer_logo.svg"
                alt="Footer Logo"
                className="img-fluid absLogo"
              />
            </div>
            <div className="footerPartOneR">
              <form onSubmit={handleSubmit}>
                <div className="row m-0 gapClass">
                  <div className="col-md-6 ps-0">
                    <div className="formInner">
                      <label htmlFor="name">
                        Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        id="name"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <span className="error">{errors.name}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 pe-0">
                    <div className="formInner">
                      <label htmlFor="email">
                        Email<span>*</span>
                      </label>
                      <input
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <span className="error">{errors.email}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 ps-0">
                    <div className="formInner">
                      <label htmlFor="mobile">
                        Phone No<span>*</span>
                      </label>
                      <input
                        type="tel"
                        autoComplete="off"
                        placeholder="Phone No"
                        id="mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.mobile && touched.mobile ? (
                        <span className="error">{errors.mobile}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 pe-0">
                    <div className="formInner">
                      <label htmlFor="company_or_hotel">Company or Hotel</label>
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Company or Hotel"
                        id="company_or_hotel"
                        name="company_or_hotel"
                        value={values.company_or_hotel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-0">
                    <div className="formInner">
                      <label htmlFor="message">
                        Message<span>*</span>
                      </label>
                      <textarea
                        autoComplete="off"
                        placeholder="Message"
                        id="message"
                        name="message"
                        rows="3"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      {errors.message && touched.message ? (
                        <span className="error">{errors.message}</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="serviceOptions">
                  <div className="serviceOptionsInner">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={revenueManagementChecked ? "#0BE264" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={revenueManagementChecked ? "#fff" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={revenueManagementChecked ? "#fff" : "#787878"}
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
                      fill={socialMarketingChecked ? "#0BE264" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={socialMarketingChecked ? "#fff" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={socialMarketingChecked ? "#fff" : "#787878"}
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
                      fill={webDevChecked ? "#0BE264" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke={webDevChecked ? "#fff" : "#787878"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke={webDevChecked ? "#fff" : "#787878"}
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
    </>
  );
};

export default ContactModal;
