import React from "react";
import img from "./user.png";

const Navbar = props => {
  const width = () => (props.isDashboardOpen ? "calc(100% - 222px)" : "100%");
  const iconColor = { fontSize: "15px" };


  return (
    <div className="navbar">
      <div style={{ width: width() }} className="navbar-content">
        <div className="navbar-header">
          <div className="icon-container">
            <i
            
              className="fas fa-bars"
              onClick={() => props.toggleDashboard()}
            ></i>{" "}
            {""}
          </div>
          <div>
            <i className="fas fa-search"></i>
            <input type="text" hidden />
            {""}
          </div>
        </div>
        <div className="navbar-rest">
          <div className="icon-container">
            <button type="button" className="navbar-btn">
              + Add project
            </button>
          </div>
          <div className="icon-container">
            <i className="fas fa-envelope"></i>{" "}
          </div>
          <div className="icon-container">
            <i className="fas fa-bell"></i>
          </div>

          <div className="img-container">
            <img src={img} width="30px" height="30px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
