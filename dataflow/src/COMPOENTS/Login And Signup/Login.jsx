import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form acrylic">
          <span>DigitalFlow</span>
          <input type="text" autocomplete="off" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button id="LogIn">Login</button>
          <p class="message">
            <Link to="/signup">
              <p>Already have an account?</p>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
