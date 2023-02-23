import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="appHeader">
      <div className="headerLeft">
        <div className="bar_header">
          <img src="bars-regular.png" alt="imgaes" />
        </div>
        <div className="title_header">
          <img
            src="Ansell Guardian Chemical Logo_Website-01 (1).png"
            alt="imgaes"
          />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerResources">
          <div>Resources</div>
          <div>
            {" "}
            <img
              className="circle"
              src="circle-question-regular.png"
              alt="Resources"
            />
          </div>
          <div>
            <img src="Path 103.png" alt="Resources" />
          </div>
        </div>

        <div className="headerContactUs">
          <div>Contact Us</div>
          <img src="envelope-regular.png" alt="Meassage" />
        </div>
        <div className="headerSignIn">
          <div>Sign in/Register</div>
          <img src="circle-user-regular.png" alt="Icon" />
        </div>
        <div className="icon1">
          <img src="Group 16299.png" alt="Icon" />
        </div>
        <div className="resoures1">
          <img src="Path 103.png" alt="Resources" />
        </div>
      </div>
    </div>
  );
};

export default Header;
