import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../redux/action";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
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
        <h2>Change Password</h2>
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
          <div className="otpstyle">
            <p required>OTP Reception</p>
          </div>
          <div className="radiogroups">
            <div>
              <label>SMS</label>
              <input
                type="radio"
                value="SMS"
                className="radiospace"
                checked={selectedOption === "SMS"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mail</label>
              <input
                type="radio"
                value="Mail"
                className="radiospace"
                checked={selectedOption === "Mail"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Twilio Apps Authy</label>
              <input
                type="radio"
                value="Twilio Apps Authy"
                checked={selectedOption === "Twilio Apps Authy"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h2></h2>
          </div>
          <div className="button-container-change">
            <button type="button" className="save-btn">
              Save
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

export default ChangePassword;