import React, { useState } from 'react';
import { Navigate, useNavigate  } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSendPassword = () => {
    console.log('Password reset request sent to:', email);
  };

  // Function to handle back to login
  
  return (
    <div className="login-container">
         <div className="forgot-password-center">
      <h2>Forgot Password</h2>

      <form className="forgot-password-form">
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Buttons positioned left and right */}
        <div className="button-container">
          {/* Back to Login Button */}
          <button type="button" className="back-login-btn" onClick={()=>navigate("/")}>
            Back to Login
          </button>

          {/* Send New Password Button */}
          <button
            type="button"
            className="send-password-btn"
            onClick={handleSendPassword}
            disabled={!email} // Disable the button if email is empty
          >
            Send New Password
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
