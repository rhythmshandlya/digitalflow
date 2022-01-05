import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Signup = () => {
  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form acrylic">
          <span>DigitalFlow</span>
          <input type="text" autocomplete="off" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button id="SignUp">Signup</button>
          <p class="message">
            <Link to="/login">
              <p>Already have an account?</p>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
