import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ContactModal from "./ContactModal";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [expanded]);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <ContactModal show={show} handleClose={handleCloseModal} />
      {expanded ? (
        <div
          className="overlay"
          onClick={() => {
            document.querySelector(".menuOnMobView").classList.remove("show");
            setExpanded(false);
          }}
        ></div>
      ) : null}
      <Navbar className="padding-lr-nav" expand="lg">
        <Link to="/">
          <svg
            width="111"
            height="37"
            viewBox="0 0 111 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5005 9.091C14.9937 9.091 12.9555 7.05176 12.9555 4.54602C12.9555 2.04028 14.9947 0 17.5005 0C20.0062 0 22.0455 2.03924 22.0455 4.54498C22.0455 7.05072 20.0062 9.08996 17.5005 9.08996V9.091ZM17.5005 1.18451C15.647 1.18451 14.14 2.69255 14.14 4.54498C14.14 6.39741 15.6481 7.90649 17.5005 7.90649C19.3529 7.90649 20.862 6.39846 20.862 4.54498C20.862 2.6915 19.354 1.18451 17.5005 1.18451Z"
              fill="#33353A"
            />
            <path
              className="gradient"
              d="M12.8919 23.0516C12.6665 23.0516 12.44 23.0078 12.2229 22.917L1.06137 18.2176C0.407013 17.9421 0 17.3295 0 16.6198C0 15.9101 0.407013 15.2975 1.06137 15.022L12.2229 10.3226C12.9806 10.0032 13.8666 10.2652 14.329 10.9446L21.6155 21.6521C21.7731 21.8849 22.0758 21.9736 22.3356 21.865L33.4972 17.1656C33.8332 17.0237 33.8593 16.7116 33.8593 16.6198C33.8593 16.528 33.8332 16.2149 33.4972 16.074L22.3356 11.3745C22.0768 11.266 21.7742 11.3547 21.6155 11.5874L19.8257 14.2195C19.6483 14.4804 19.2935 14.5472 19.0326 14.3708C18.7717 14.1934 18.7049 13.8385 18.8812 13.5776L20.6711 10.9456C21.1334 10.2652 22.0194 10.0032 22.7771 10.3226L33.9386 15.022C34.593 15.2975 35 15.9101 35 16.6198C35 17.3295 34.594 17.9421 33.9386 18.2176L22.7771 22.917C22.0194 23.2364 21.1334 22.9744 20.6711 22.295L13.3845 11.5874C13.2269 11.3547 12.9242 11.265 12.6644 11.3745L1.50386 16.074C1.16781 16.2159 1.14172 16.528 1.14172 16.6198C1.14172 16.7116 1.16781 17.0237 1.50386 17.1656L12.6654 21.865C12.9242 21.9746 13.2269 21.8849 13.3855 21.6521L15.1889 19.0013C15.3663 18.7404 15.7211 18.6736 15.982 18.8511C16.243 19.0285 16.3097 19.3833 16.1323 19.6442L14.329 22.295C13.9992 22.7803 13.4534 23.0527 12.8919 23.0527V23.0516Z"
              fill="#FFC200"
            />
            <path
              d="M17.5068 36.3337C16.9067 36.3337 16.4079 35.8902 16.2054 35.1753L13.6496 24.9676C13.564 24.665 13.7404 24.3508 14.043 24.2653C14.3446 24.1797 14.6598 24.356 14.7454 24.6587L17.3012 34.8664C17.3607 35.073 17.6529 35.073 17.7114 34.8664L20.5469 24.6858C20.6325 24.3832 20.9477 24.2079 21.2493 24.2924C21.5519 24.378 21.7283 24.6931 21.6427 24.9947L18.8072 35.1753C18.6047 35.8902 18.1069 36.3337 17.5058 36.3337H17.5068Z"
              fill="#33353A"
            />
            <path
              d="M49.2794 15.2243L46.8101 10.9854H44.9865V15.2243H42.5791V3.01086H47.4637C48.5916 3.01086 49.5509 3.40616 50.3428 4.19677C51.1334 4.98737 51.5287 5.94136 51.5287 7.05742C51.5287 7.81376 51.3139 8.51476 50.883 9.1591C50.4535 9.80476 49.8829 10.2897 49.174 10.6151L51.8779 15.2217H49.2781L49.2794 15.2243ZM44.9878 5.26144V8.87317H47.465C47.9183 8.87317 48.3083 8.6966 48.6338 8.34083C48.9592 7.98638 49.1226 7.55814 49.1226 7.05874C49.1226 6.55934 48.9592 6.13374 48.6338 5.78456C48.3083 5.43537 47.9183 5.26144 47.465 5.26144H44.9878Z"
              fill="#F9C704"
            />
            <path
              d="M54.6542 11.7864C54.956 12.88 55.7769 13.4269 57.1143 13.4269C57.9747 13.4269 58.6257 13.1356 59.0684 12.5546L60.8828 13.6008C60.0224 14.846 58.7548 15.4679 57.0787 15.4679C55.6359 15.4679 54.479 15.0318 53.6067 14.1595C52.7344 13.2872 52.2982 12.1882 52.2982 10.8627C52.2982 9.5371 52.7278 8.45266 53.5895 7.57377C54.45 6.6962 55.5555 6.2561 56.9048 6.2561C58.1842 6.2561 59.2397 6.69884 60.0711 7.58168C60.9026 8.46583 61.319 9.5595 61.319 10.8614C61.319 11.1526 61.29 11.4609 61.232 11.7864H54.6542ZM54.6186 10.0418H59.0671C58.9393 9.44881 58.6744 9.00608 58.2738 8.71619C57.872 8.42499 57.416 8.28004 56.9048 8.28004C56.3 8.28004 55.7993 8.43421 55.404 8.74254C55.0087 9.05088 54.7464 9.48439 54.6186 10.0418Z"
              fill="#F9C704"
            />
            <path
              d="M68.2802 6.49988H70.7574L67.4422 15.2228H64.878L61.5627 6.49988H64.04L66.1548 12.6046L68.2802 6.49988Z"
              fill="#F9C704"
            />
            <path
              d="M73.3915 11.7864C73.6932 12.88 74.5141 13.4269 75.8516 13.4269C76.712 13.4269 77.3629 13.1356 77.8057 12.5546L79.6201 13.6008C78.7597 14.846 77.4921 15.4679 75.8173 15.4679C74.3745 15.4679 73.2175 15.0318 72.3452 14.1595C71.473 13.2872 71.0368 12.1882 71.0368 10.8627C71.0368 9.5371 71.4664 8.45266 72.3281 7.57377C73.1886 6.6962 74.2941 6.2561 75.6434 6.2561C76.9228 6.2561 77.9783 6.69884 78.8097 7.58168C79.6412 8.46583 80.0576 9.5595 80.0576 10.8614C80.0576 11.1526 80.0286 11.4609 79.9706 11.7864H73.3928H73.3915ZM73.3572 10.0418H77.8057C77.6778 9.44881 77.413 9.00608 77.0124 8.71619C76.6119 8.42499 76.1546 8.28004 75.6434 8.28004C75.0386 8.28004 74.5378 8.43421 74.1425 8.74254C73.7472 9.05088 73.485 9.48439 73.3572 10.0418Z"
              fill="#F9C704"
            />
            <path
              d="M86.4759 6.2561C87.4299 6.2561 88.2179 6.5763 88.8398 7.21537C89.4617 7.85575 89.7727 8.73859 89.7727 9.86783V15.2241H87.5221V10.1472C87.5221 9.56609 87.3653 9.12071 87.0517 8.81238C86.7381 8.50404 86.3191 8.34988 85.796 8.34988C85.2136 8.34988 84.7498 8.5304 84.4006 8.89012C84.0514 9.25116 83.8775 9.79141 83.8775 10.5122V15.2228H81.6269V6.49987H83.8775V7.47758C84.4243 6.66326 85.2913 6.2561 86.4772 6.2561H86.4759Z"
              fill="#F9C704"
            />
            <path
              d="M97.4508 6.49988H99.7013V15.2228H97.4508V14.2464C96.9039 15.0608 96.0382 15.4679 94.851 15.4679C93.897 15.4679 93.109 15.1477 92.4871 14.5087C91.8652 13.8696 91.5542 12.9854 91.5542 11.8562V6.49988H93.8048V11.5769C93.8048 12.1593 93.9616 12.6033 94.2765 12.9116C94.5901 13.22 95.0091 13.3741 95.5322 13.3741C96.1133 13.3741 96.5785 13.1936 96.9276 12.8339C97.2768 12.4742 97.4508 11.9326 97.4508 11.2119V6.5012V6.49988Z"
              fill="#F9C704"
            />
            <path
              d="M103.661 11.7864C103.963 12.88 104.784 13.4269 106.121 13.4269C106.981 13.4269 107.632 13.1356 108.075 12.5546L109.89 13.6008C109.029 14.846 107.761 15.4679 106.085 15.4679C104.643 15.4679 103.486 15.0318 102.613 14.1595C101.741 13.2872 101.305 12.1882 101.305 10.8627C101.305 9.5371 101.734 8.45266 102.596 7.57377C103.457 6.6962 104.562 6.2561 105.912 6.2561C107.191 6.2561 108.246 6.69884 109.078 7.58168C109.909 8.46583 110.326 9.5595 110.326 10.8614C110.326 11.1526 110.297 11.4609 110.239 11.7864H103.661ZM103.627 10.0418H108.075C107.947 9.44881 107.682 9.00608 107.282 8.71619C106.88 8.42499 106.424 8.28004 105.913 8.28004C105.308 8.28004 104.807 8.43421 104.412 8.74254C104.017 9.05088 103.754 9.48439 103.627 10.0418Z"
              fill="#F9C704"
            />
            <path
              d="M49.9607 24.6838C51.0307 25.3004 51.5656 26.2307 51.5656 27.4759C51.5656 28.5116 51.1993 29.3602 50.4667 30.023C49.7341 30.6858 48.8328 31.0178 47.7629 31.0178H42.5818V18.8057H47.3965C48.4428 18.8057 49.3243 19.1285 50.0398 19.7742C50.7553 20.4198 51.1124 21.242 51.1124 22.2435C51.1124 23.2449 50.7289 24.0697 49.9607 24.6864V24.6838ZM47.3952 21.0549H44.9878V23.7416H47.3952C47.7668 23.7416 48.0778 23.6138 48.3281 23.3582C48.5785 23.1026 48.7037 22.7824 48.7037 22.3989C48.7037 22.0155 48.5811 21.6953 48.3374 21.4397C48.0936 21.1841 47.7787 21.0562 47.3952 21.0562V21.0549ZM47.7629 28.7659C48.17 28.7659 48.5073 28.6289 48.7748 28.3561C49.0423 28.0834 49.1754 27.7368 49.1754 27.3178C49.1754 26.8988 49.041 26.5707 48.7748 26.2966C48.5073 26.0238 48.17 25.8868 47.7629 25.8868H44.9892V28.7659H47.7629Z"
              fill="#292929"
            />
            <path
              d="M58.9801 22.2936H61.2307V31.0165H58.9801V30.0388C58.4333 30.8531 57.5676 31.2603 56.3804 31.2603C55.4264 31.2603 54.6384 30.9401 54.0165 30.301C53.3945 29.662 53.0836 28.7778 53.0836 27.6486V22.2922H55.3341V27.3692C55.3341 27.9516 55.4909 28.3957 55.8059 28.704C56.1195 29.0123 56.5385 29.1665 57.0616 29.1665C57.6427 29.1665 58.1078 28.986 58.457 28.6263C58.8062 28.2652 58.9801 27.725 58.9801 27.0042V22.2936Z"
              fill="#292929"
            />
            <path
              d="M66.0191 28.9055H69.8917V31.0164H63.0122V29.5182L66.6898 24.4044H63.1835V22.2935H69.7191V23.789L66.0178 28.9055H66.0191Z"
              fill="#292929"
            />
            <path
              d="M74.0965 28.9055H77.9691V31.0164H71.0895V29.5182L74.7685 24.4044H71.2622V22.2935H77.7978V23.789L74.0965 28.9055Z"
              fill="#292929"
            />
          </svg>
        </Link>
        <button
          className="openMenu"
          onClick={() => {
            document.querySelector(".menuOnMobView").classList.toggle("show");
            setExpanded(!expanded);
          }}
        ></button>
        <>
          <Navbar.Collapse>
            <ul className="d-flex align-items-center">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Our Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/revenuemanagement">
                      Revenue Management
                    </Dropdown.Item>
                    <Dropdown.Item href="/digital-marketing-agency">
                      Digital Marketing
                    </Dropdown.Item>
                    <Dropdown.Item href="/website-development">
                      Website Development
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/revenuemanagement">Revenue Management</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/digital-marketing-agency">Digital Marketing</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/website-development">Web Development</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/">Blogs</Link>
              </li>
              <li
                onClick={() => {
                  setExpanded(false);
                  setShow(true);
                }}
                className="after991px"
              >
                <button>Contact Us</button>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <button className="letsGrow" onClick={() => setShow(true)}>
                  Lets Grow
                </button>
              </li>
              <div className="after991px headerContactInfo">
                <img
                  src="/images/white_logo.png"
                  alt="Logo"
                  className="img-fluid"
                />
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
            </ul>
          </Navbar.Collapse>
          <div className={`menuOnMobView ${expanded ? "show" : ""}`}>
            <ul className="d-flex">
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/revenuemanagement">Revenue Management</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/digital-marketing-agency">Digital Marketing</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/website-development">Web Development</Link>
              </li>
              <li onClick={() => setExpanded(false)} className="after991px">
                <Link to="/">Blogs</Link>
              </li>
              <li
                onClick={() => {
                  setExpanded(false);
                  setShow(true);
                }}
                className="after991px"
              >
                <button>Contact Us</button>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <button className="letsGrow" onClick={() => setShow(true)}>
                  Lets Grow
                </button>
              </li>
              <div className="after991px headerContactInfo">
                <img
                  src="/images/white_logo.svg"
                  alt="Logo"
                  className="img-fluid"
                />
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
            </ul>
          </div>
          {/* {expanded ? (
          ) : null} */}
        </>
      </Navbar>
    </>
  );
};

export default Header;
