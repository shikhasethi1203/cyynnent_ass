import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <>
    <div className="card">
    <div className="card_heading">
      <h3>Add Chemicals / Other Hazards</h3>
      </div>
     <div className="heading_up">
     <h3 className="head_name">Chemicals</h3>
     <div className="heading_right">
     <h3 className="heads_name">Other Hazards</h3>
     </div>
     </div>
     <div className="inputfiled">
     <img className="search"
          src="Group 2481.png"
          alt="imgaes"
        />
        <p className="search_name">Search</p>
     </div>
   
    </div>
 
 
    </>
  );
};

export default Input;
