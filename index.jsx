import React, { useState } from "react";
import axios from "axios";
import "../Signup/styles.css";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field
    mobile: "",
    dob: "",
    gender: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signupService = async (values) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:5000/user/signup";
      const { data } = await axios.post(url, values);
      const { status, cls, msg, payload } = data;
      setIsLoading(false);
      console.log("API Response:", data);
      if (status === "success") {
        // Registration successful, navigate to the thank you page
        console.log("Navigating to /user/signup/thankyou"); // Add this line for debugging
        navigate("/user/signup/thankyou");
      } else {
        alert("Registration failed. " + msg);
      }
    } catch (e) {
      setIsLoading(false);
      console.error("Error", e);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Check if passwords match before making the API call
    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      alert("Password and confirmation do not match.");
    } else {
      // Remove confirmPassword from the data sent to the API
      const { confirmPassword, ...dataToSend } = formData;
      signupService(dataToSend);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="container">
        <div className="signup-container">
          <h1 style={{ color: "#225183" }}>Sign Up</h1>
          <h1>
            <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Logo" />
          </h1>
          <h2 style={{ color: "#225183", textAlign: "center" }}>
            Welcome To Find Job Community
          </h2>
          <form className="signup-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              placeholder="Enter your mobile number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <input
              type="date"
              placeholder="Enter your Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
            <label style={{ color: "black" }}>Gender:</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            <label htmlFor="male" style={{ color: "black" }}>
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            <label htmlFor="female" style={{ color: "black" }}>
              Female
            </label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleInputChange}
            />
            <label htmlFor="other" style={{ color: "black" }}>
              Other
            </label>
            <button
                  type="submit"
                       className="signup-button"
                           disabled={isLoading}>
                              {isLoading ? (
                            <div className="loading-spinner"></div>
                               ) : (
                                    "Sign Up"
                                    )}
            </button>

            {/* Link to Login Page */}
            <Link to="/user/login" className="login-link">
              Already have an account? Log in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
