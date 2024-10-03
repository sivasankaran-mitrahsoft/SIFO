import React, { useEffect, useState } from 'react';
import { fetchUsers, onJustReducerUpdate } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link } from 'react-router-dom';
import { FETCH_LOGIN_SUCCESS, LOGIN_DETAILS } from '../../constant/constant';
import { onGetLoginDetails } from '../../services';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const profileDetails = useSelector((state) => state.loginDetails)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login details:', { email, password });
    // Add your login logic here
  };
  const dispatch = useDispatch();
  useEffect(() => {
    onGetLoginDetails().then(res => {
      dispatch(onJustReducerUpdate(res.data,LOGIN_DETAILS))
      localStorage.setItem(LOGIN_DETAILS, JSON.stringify(res.data))
      return
  })
   
    // dispatch(fetchUsers())
  }, [])

  console.log("profileDetails",profileDetails)
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
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
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
