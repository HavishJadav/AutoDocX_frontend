import React, { useEffect } from 'react';
import './LoginSignup.css'
import { handleFormToggle } from './script';

// import user_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'


export const LoginSignup = () => {
    useEffect(() => {
        handleFormToggle(); // Execute script when component loads
      }, []);
  return (
    <div className="container">
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required></input>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required></input>
                </div>
                <div className="forgot-link">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required></input>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required></input>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required></input>
                </div>
                <button type="submit" class="btn">Register</button>
            </form>
        </div>
        <div className="toggle-box">
            <div className="toggle-panel toggle-left">
                <h1>Hello, Welcome!</h1>
                <p>Don't have an account?</p>
                <button className="btn register-btn">Register</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button className="btn login-btn">Login</button>
            </div>
        </div>
    </div>
  )
}
