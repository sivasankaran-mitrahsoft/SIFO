import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSendPassword = () => {
        console.log('Password reset request sent to:', email);
    };

    return (
        <div className="login-container">
            <div className="forgot-password-center">
                <h2>Forgot Password</h2>

                <form className="forgot-password-form">
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

                    <div className="button-container">
                        <button type="button" className="back-login-btn" onClick={() => navigate("/")}>
                            Back to Login
                        </button>

                        <button
                            type="button"
                            className="send-password-btn"
                            onClick={handleSendPassword}
                            disabled={!email} 
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
