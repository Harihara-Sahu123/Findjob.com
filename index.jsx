import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../logout/styles.css"; 
function LogoutForm(props) {
  const handleLogout = () => {
    // Add your logout logic here
    // For example, you can call an API to log the user out
    // or clear the user's session.
  };
  const navigate = useNavigate();

  return (
    <div className="logout-form">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <br/>
      <button onClick={handleLogout}><Link to="/" className="lo">
      
              Welcome To Home Page!!!!!.......
            </Link></button>
      
    </div>
  );
}

export default LogoutForm;
