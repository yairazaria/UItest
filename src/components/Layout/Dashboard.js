import React from "react";
import "./Dashboard.scss";
import Logo from "./Logo.jpg";

import { Link } from "react-router-dom";

const Dashboard = ({ dashboardClass }) => {
  const iconColor = { color: "#5584ff" };

  return (
    <div className={`dashboard ${dashboardClass}`}>
      <div className="dashboard-header">
        <img src={Logo} width="35px" height="35px" />
        <p className="header-title"> Merkury</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="fas fa-home" style={iconColor}></i>
        <p className="header-title"> Home</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="fas fa-qrcode test" style={iconColor}></i>
        <p className="header-title"> Workflow</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="far fa-chart-bar" style={iconColor}></i>
        <p className="header-title"> Statistics</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="far fa-calendar-alt" style={iconColor}></i>
        <p className="header-title"> Calendar</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="far fa-user" style={iconColor}></i>
        <p className="header-title"> Users</p>
      </div>
      <div className="link-item">
        <div className="left-div"></div>
        <i class="fas fa-cog" style={iconColor}></i>
        <p className="header-title"> Setttings</p>
      </div>
    </div>
  );
};

export default Dashboard;
