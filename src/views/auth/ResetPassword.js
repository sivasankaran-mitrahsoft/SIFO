import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/action";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
    const [oldpassword, setOldpassword] = useState();
    const [newpassword, setNewpassword] = useState();
    const [repeatpassword, setRepeatpassword] = useState();
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log("called");
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Reset Password</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="oldpassword">Old Password</label>
                        <input
                            type="password"
                            id="oldpassword"
                            value={oldpassword}
                            onChange={(e) => setOldpassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newpassword">New Password</label>
                        <input
                            type="password"
                            id="newpassword"
                            value={newpassword}
                            onChange={(e) => setNewpassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="repeatpassword">Repeat Password</label>
                        <input
                            type="password"
                            id="repeatpassword"
                            value={repeatpassword}
                            onChange={(e) => setRepeatpassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="button-container-change">
                        <button type="button" className="save-btn">
                            Change Password
                        </button>
                        <button type="button" className="cancel-btn">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;