import React, { useEffect, useState } from 'react';
import { onJustReducerUpdate } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGIN_DETAILS } from '../../constant/constant';
import { onGetLoginDetails } from '../../services';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const profileDetails = useSelector((state) => state.loginDetails);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login details:', { email, password });
    
  };

  const dispatch = useDispatch();
  useEffect(() => {
    onGetLoginDetails().then((res) => {
      dispatch(onJustReducerUpdate(res.data, LOGIN_DETAILS));
      localStorage.setItem(LOGIN_DETAILS, JSON.stringify(res.data));
    });
  }, [dispatch]);

  const togglePasswordVisibility = () => {
    if(password !== ''){
      setShowPassword(!showPassword);
    }
  
  };

  const isFormValid = email !== '' && password !== ''; 

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
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'} 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span onClick={ togglePasswordVisibility} className="eye-icon">
                {showPassword ? <FaEye />  : <FaEyeSlash />}  
              </span>
            </div>
          </div>
          <button type="submit" className="login-btn" disabled={!isFormValid}> 
            Login
          </button>
        </form>
        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
