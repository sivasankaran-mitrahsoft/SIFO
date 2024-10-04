import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
        selectedOption: "SMS",
    });
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        repeatPassword: false,
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = (field) => {
        if (field === "oldPassword") {
            if (formData.oldPassword !== '') {
                setShowPassword({ ...showPassword, oldPassword: !showPassword.oldPassword });
            }
        } else if (field === "newPassword") {
            if (formData.newPassword !== '') {
                setShowPassword({ ...showPassword, newPassword: !showPassword.newPassword });
            }
        } else if (field === "repeatPassword") {
            if (formData.repeatPassword !== '') {
                setShowPassword({ ...showPassword, repeatPassword: !showPassword.repeatPassword });
            }
        }
    };

    const isFormValid = () => {
        const { oldPassword, newPassword, repeatPassword, selectedOption } = formData;
        return (
            oldPassword.trim() !== "" &&
            newPassword.trim() !== "" &&
            repeatPassword.trim() !== "" &&
            selectedOption.trim() !== "" &&
            newPassword === repeatPassword
        );
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Change Password</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="oldPassword">Old Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword.oldPassword ? "text" : "password"}
                                name="oldPassword"
                                value={formData.oldPassword}
                                placeholder="Enter your old password"
                                onChange={handleInputChange}
                                required
                            />
                            <span
                                onClick={() => togglePasswordVisibility("oldPassword")}
                                className={`password-toggle`}
                            >
                                {!showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="newPassword">New Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword.newPassword ? "text" : "password"}
                                name="newPassword"
                                placeholder="Enter your new password"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                required
                                disabled={formData.oldPassword.trim() === ""} 
                            />
                            <span
                                onClick={() => togglePasswordVisibility("newPassword")}
                                className={`password-toggle`}
                            >
                                {!showPassword.newPassword  ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword.repeatPassword ? "text" : "password"}
                                name="repeatPassword"
                                placeholder="Enter your repeat password"
                                value={formData.repeatPassword}
                                onChange={handleInputChange}
                                required
                                disabled={formData.newPassword.trim() === ""} 
                            />
                            <span
                                onClick={() => togglePasswordVisibility("repeatPassword")}
                                className={`password-toggle`}
                            >
                                {!showPassword.repeatPassword  ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="otpstyle">
                        <p required>OTP Reception</p>
                    </div>

                    <div className="radiogroups">
                        <div>
                            <label>SMS</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="SMS"
                                checked={formData.selectedOption === "SMS"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Mail</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="Mail"
                                checked={formData.selectedOption === "Mail"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Twilio Apps Authy</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="Twilio Apps Authy"
                                checked={formData.selectedOption === "Twilio Apps Authy"}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="button-container-change">
                        <button
                            type="button"
                            className="save-btn"
                            disabled={!isFormValid()}
                        >
                            Save
                        </button>
                        <button type="button" className="cancel-btn" onClick={() => navigate("/")}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
