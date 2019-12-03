import React from "react";
import "./Dashboard.css";
import Logo from "./Logo.jpg";

import { Link } from "react-router-dom";

const Dashboard = props => {
  const iconColor = { color: "#5584ff" };

  return (
    <div className={`dashboard ${props.dashboardClass}`}>
      <div className="dashboard-header">
        {" "}
        <img src="./Logo.jpg" />
        Merkury
      </div>
      <div className="link-item">
        <i class="fas fa-home" style={iconColor}></i> Home
      </div>
      <div className="link-item">
        <i class="fas fa-qrcode" style={iconColor}></i> Workflow
      </div>
      <div className="link-item">
        <i class="far fa-chart-bar" style={iconColor}></i>Statistics
      </div>
      <div className="link-item">
        <i class="far fa-calendar-alt" style={iconColor}></i> Calendar
      </div>
      <div className="link-item">
        <i class="far fa-user" style={iconColor}></i> Users
      </div>
      <div className="link-item">
        <i class="fas fa-cog" style={iconColor}></i> Setttings
      </div>
    </div>
  );
};

export default Dashboard;
