import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import "./App.css";
import Dashboard from "./components/Layout/Dashboard";

import Tasks from "./components/Tasks";
import Messages from "./components/Messages";
import Activity from "./components/Activity";

function App() {
  const [dashboardOpen, setDeshboardOpen] = useState(true);
  const toggleDashboard = () => {
    const isOpen = dashboardOpen ? false : true;
    setDeshboardOpen(isOpen);
  };
  const getDashboardClassName = () =>
    dashboardOpen ? "dashboard-open" : "dashboard-close";
  const contentWrapperWidth = () =>
    dashboardOpen ? "calc(100% - 300px)" : "100%";
  return (
    <div className="App">
      <Dashboard dashboardClass={getDashboardClassName()} />
      <div style={{ width: contentWrapperWidth() }} className="content-wrapper">
        <Navbar
          isDashboardOpen={dashboardOpen}
          toggleDashboard={toggleDashboard}
        />
        <div className="page-content">
          <h1>Hello John!</h1>
          <div className="boxess flexbox">
            <Tasks />
            <Messages />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
