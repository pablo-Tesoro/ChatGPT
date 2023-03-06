import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className='login-container'>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <label htmlFor=""><input type="checkbox" />Remember Me</label>
              <div className="forgot-pwd">
                <Link to='/sign-up' className='register-button'>
                  Forgot Password
                </Link>
              </div>
            </div>
            <button>Log in</button>
            <div className="register">
              <p>Don't have an account? </p>
              <Link to='/sign-up' className='register-button'>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
