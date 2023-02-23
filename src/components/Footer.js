import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_page">
        <div className="images">
          <img src="601-6019211_medtronic-logo-png-ansell-logo-clipart.png" />
        </div>
        <div className="footer_heading">
          <div className="lengel_heading">
            <h3>LENGEL</h3>
          </div>
          <div className="border">
            <div className="footer_heading1">
              <div className="heading_name">
                <h3>PrivacyPolicy</h3>
                <h3>Termsofuse</h3>
                <h3>CookiePolicy</h3>
              </div>
            </div>
          </div>
          <div className="footer_headingRight">
            <div className="footer_heading2">
              <h3>Product Disclaimer</h3>
              <h3> Reach Statement</h3>
              <h3> Patents</h3>
            </div>
          </div>
        </div>
        <div className="footer_heading4">
          <div className="contact_name">
            <h3>CONTACT</h3>
          </div>
          <div className="border1">
            <div className=" contact_names">
              <div className="contact_names1">
                <h3 className="name2">
                  Riverside Business Park Block J Blvrd International 55 B-1070
                  Brussels, Belgium +32 2 258 7400
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
