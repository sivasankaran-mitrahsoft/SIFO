import React, { useState } from 'react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSendPassword = () => {
    console.log('Password reset request sent to:', email);
  };

  // Function to handle back to login
  const handleBackToLogin = () => {
    console.log('Redirecting to login...');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>

      <form className="forgot-password-form">
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
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
          <button type="button" className="back-login-btn" onClick={handleBackToLogin}>
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
  );
};

export default ForgotPassword;
