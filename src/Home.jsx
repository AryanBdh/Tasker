import React from "react";
import taskerLogo from "./assets/taskLogo.png";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="left-bar">
          <div className="logo">
            <img src={taskerLogo} alt="Tasker" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="task">Tasks</Link> 
              </li>
              
              
            </ul>
          </div>
        </div>

        
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
