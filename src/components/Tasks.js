import React from "react";
import "./BoxContent.css";

const Tasks = () => {
  return (
    <div className="boxes">
      <div className="box-header">
        <h2>Tasks</h2>{" "}
        {/* <div className="test">5</div>{" "}
        <div className="test" style={{ backgroundColor: "red" }}>
          2
        </div> */}
      </div>
      <div className="links">
        <div className="cycle-div">N</div>
        <p>test</p>
      </div>

      <div className="links">
        <div className="cycle-div">F</div>
        <p>test</p>
      </div>
      <div className="links">
        <div className="cycle-div">N</div>
        <p>test</p>
      </div>

      <div className="links">
        <div className="cycle-div">F</div>
        <p>test</p>
      </div>
    </div>
  );
};

export default Tasks;
