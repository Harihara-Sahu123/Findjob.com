//import React, { useState, useEffect, useContext } from "react";
import React from 'react';
import "./dashboard.css"; // Import the CSS file
import { Link } from 'react-router-dom'; 
import axios from "../../connector";
//import { CurrentUserContext } from "../../index";
import Header from "../header";
import UserForm from "./form";
import CustomDrawer from "../../components/drawer";



function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Dashboard</title>
        <link rel="stylesheet" href="styel.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <div className='b'>
        <div className="co">
          <div className='n'>
          
            <ul>
              <li>
              <Link to="/dashboard" className="l">
                <span className="na-item">DashBoard</span>
              </Link>
            </li>
            <br/>
            <br/>
            <li>
              <Link to="/dashboard/home" className="w">
                <i className="fas fa-home"></i>
                <span className="na-item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="w">
                <i className="fas fa-user"></i>
                <span className="na-item">Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/application-tracker" className="w">
                <i className="fas fa-tasks"></i>
                <span className="na-item">Application Tracker</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/help" className="w">
                <i className="fas fa-question-circle"></i>
                <span className="na-item">Help</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/faqpage" className="w">
                <i className="fas fa-palette"></i>
                <span className="na-item">FAQ</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/logout"  className="logout">
              <i className="fas fa-sign-out-alt"></i>
                <span className="na-item" href="./pages/login">Log out</span>
            </Link>
            </li>
          </ul>
        </div>
          
          <section className="m">
            <div className="m-top">
              <h1>Jobs</h1>
              <i className="fas fa-user-cog"></i>
              
            </div>
            <div className="m-skills">
              <div className="card">
                <i className="fas fa-laptop-code"></i>
                <h3>Apply For MNC Job</h3>
                <p>Join Over 1 million Students.</p>
                <Link to="/dashboard/jobprofileweb">
                <button>More Details..</button>
                </Link>
              </div>
              
              <div className="card">
                <i className="fas fa-palette"></i>
                <h3>Apply For Start-Up Job</h3>
                <p>Join Over 2 million Students.</p>
                <Link to="/dashboard/jobprofile1cyber">
                <button>More Details..</button>
                </Link>
              </div>

              <div className="card">
                <i className="fab fa-wordpress"></i>
                <h3>Apply for Other Sectors</h3>
                <p>Join Over 3 million Students.</p>
                <Link to="/dashboard/jobprofile2bank">
                <button>More Details..</button>
                </Link>
              </div>

              
            </div>
          </section>
        </div>

      </div>
    </html>
  );
}

export default App;
