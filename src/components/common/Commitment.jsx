import React from "react";

const Commitment = ({ text, logo }) => {
  return (
    <>
      <div className="commitments">
        <div className="commitmentsInner  d-flex justify-content-center align-items-start">
          <img src={logo} alt="Cup" className="img-fluid" />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Commitment;
