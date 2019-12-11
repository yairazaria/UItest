import React from "react";
import "./BoxContent.css";

const Tasks = () => {
  return (
    <div className="box">
      <div className="box-header">
        Tasks
        <div className="cycle-container">
          <div className="cycle-div">5</div>
          <div className="cycle-div" style={{ backgroundColor: "#F83C7B" }}>
            2
          </div>
        </div>
      </div>
      <div className="box-content ">
        <div className="cycle-div">N</div>
        <div className="content">
          <p className="p">New website for Symu.co</p>
          <i className="far fa-clock icon-style"> 5 days delays</i>
        </div>
      </div>

      <div className="box-content ">
        <div className="cycle-div">F</div>
        <div className="content">
          <p className="p">Free business PSD Template </p>
          <i className="far fa-clock icon-style"> 2 days delays</i>
        </div>
      </div>
      <div className="box-content ">
        <div className="cycle-div">N</div>
        <div className="content">
          <p className="p">New logo for JCD.pl</p>
          <i className="far fa-clock icon-style" style={{ color: "#DADEE7" }}>
            {" "}
            2 days delays
          </i>
        </div>
      </div>

      <div className="box-content ">
        <div className="cycle-div">F</div>
        <div className="content">
          <p className="p">Free Icons Set vol. 3</p>
          <i className="far fa-clock icon-style" style={{ color: "#DADEE7" }}>
            {" "}
            10 days delays
          </i>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
