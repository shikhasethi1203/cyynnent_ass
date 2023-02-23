import React from "react";
import "./Container.css";

const Container = () => {
  return (
    <>
      <div className="container">
        <div className="insideContainer">
          
          <p className="container1">step 1</p>
          <h2 className="container2">Select Primary Hazards</h2>
        </div>
        <div className="insideContainer">
          <p className="container3">step 2</p>
          <h2 className="container4">Enter Application Details</h2>
        </div>

        <div className="insideContainer">
          <p className="container5">step 3</p>
          <h2 className="container6">Select Secondary Hazards</h2>
        </div>

        <div className="insideContainer">
        
          <p className="container7">step 4</p>
          <h2 className="container8">View Products</h2>
        </div>
      </div>
      <div className="paragraph">
        <p className="paragraphs">
          You may select up to five hazards. However, it is recommended to limit
          the number of hazards and select only those pertinent to a specific
          task for better product suggestions. For the best product suggestions,
          enter a single hazard.
        </p>
      </div>
    </>
  );
};

export default Container;
