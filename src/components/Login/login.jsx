import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Make sure to adjust the file name if needed

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the form is being submitted from the login page
    const isLoginPage = window.location.pathname === '/login'; // Adjust the path if needed

    // If the form is being submitted from the login page, reload the page
    if (isLoginPage) {
      window.location.reload();
    }

    // Handle login logic
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleUniversityLogin = () => {
    // Handle University login
  };

  return (
    <>
    <div className="login-container">
      <h2>Login to get your Certificate</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="login-options">
        <button onClick={handleGoogleLogin} className="google-btn">

          Login with Google
        </button>
        <button onClick={handleUniversityLogin} className="university-btn">
          Login with University ID
        </button>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
    </>
  );
};

export default Login;
