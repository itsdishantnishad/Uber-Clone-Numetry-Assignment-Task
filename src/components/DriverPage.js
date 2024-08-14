// src/components/DriverPage.js

import React, { useState } from "react";
import Login from "./driverLogin";
import SignUp from "./driverSignUp";
import "./DriverPage.css";

const DriverPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage(""); // Clear any messages when toggling forms
  };

  const handleLoginSuccess = (email) => {
    // Check if email is defined and not empty
    if (email) {
      // Simulate successful login
      setIsLoggedIn(true);
      setUserName(email.split('@')[0]); // Extract user name from email for display
      setMessage(""); // Clear any previous messages
    } else {
      setMessage("Login failed: Invalid email.");
    }
  };

  const handleSignUpSuccess = () => {
    // Set a success message and switch to login form
    setMessage("Sign-up successful! Please log in.");
    setIsLogin(true);
  };

  const handleLogout = () => {
    // Simulate logout
    setIsLoggedIn(false);
    setUserName("");
    setMessage("You have logged out successfully.");
  };

  return (
    <div className="driver-page-container">
      <h1 className="driver-page-header">Driver Portal</h1>
      <div className="driver-page-section">
        {!isLoggedIn ? (
          <>
            {message && <p className="success-message">{message}</p>}
            {isLogin ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <SignUp onSignUpSuccess={handleSignUpSuccess} />
            )}
            <button onClick={toggleForm} className="driver-page-toggle-button">
              {isLogin ? "Need an account? Sign Up" : "Already have an account? Log In"}
            </button>
          </>
        ) : (
          <>
            <h2>Welcome, {userName}!</h2>
            <p>You are now logged in as a driver.</p>
            <button onClick={handleLogout} className="driver-page-toggle-button">
              Logout
            </button>
            <div className="driver-options">
              {/* Add options or links for drivers here */}
              <p>Start Driving</p>
              <p>View Schedule</p>
              <p>Driver Support</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DriverPage;
