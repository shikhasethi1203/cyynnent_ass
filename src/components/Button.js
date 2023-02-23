import React from "react";
import "./Button.css"

const Button = () => {
  return (
    <>
      <div className="button">
        <img
          className="cancel_button"
          src="xmark-regular (1).png"
          alt="imgaes"
        />
        <p className="cancel">Cancel</p>
      </div>
     
    <div className="arrowbutton">
    <div className="arrownButtonName">Application Details</div>
    <div>
    <img  
          src="arrow-right-long-regular (1).png"
          alt="imgaes"
        />
    </div>
    </div>
    </>
  );
};

export default Button;
