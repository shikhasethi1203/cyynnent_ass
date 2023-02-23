import React from "react";
import "./ProductsDel.css";

const ProductsDel = () => {
  return (
    <>
      <div className="products_del">
        <div className="del_heading">
          <h3> Chemicals / Other Hazards</h3>
        </div>
        <div className="del_name">
          <p className="del_box"></p>
          <div className="del1_name">
            <p>CAS</p>
          </div>
          <div className="del2_name">
            <p> Chemical/HazardName</p>
          </div>
          <div className="del3_name">
            <p>Concentration%</p>
          </div>
          <div className="del4_name">
            <p>PhysicalState</p>
          </div>
        </div>
        <div className="del_headings">
          <h1 className="del5_name">Please add chemicals/hazards</h1>
        </div>
      </div>
    </>
  );
};

export default ProductsDel;
