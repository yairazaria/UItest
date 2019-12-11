import React from "react";
import "./BoxContent.css";
import img from "./Layout/user.png";

const Messages = () => {
  return (
    <div className="box">
      <div className="box-header">
        Messages
        <div className="cycle-container">
          <div className="cycle-div">2</div>
        </div>
      </div>
      <div className="box-content" style={{ backgroundColor: "#ebebeb" }}>
        <img
          src={img}
          width="30px"
          height="30px"
          style={{ borderRadius: "50%" }}
        />{" "}
        <div className="content">
          <p className="p">New website for Symu.co</p>
          <i className="far fa-clock icon-style"> 5 days delays</i>
        </div>
      </div>
      <div className="box-content" style={{ backgroundColor: "#ebebeb" }}>
        test
      </div>
      <div className="box-content ">test</div>
      <div className="box-content ">test</div>
    </div>
  );
};

export default Messages;
