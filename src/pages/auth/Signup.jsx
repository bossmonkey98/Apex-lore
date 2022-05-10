import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { SignUpHandler } from "../../authHandllers/signupHandller";

export default function Signup() {
  const [SignInUser, setSignInUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <div id="log-wrapper">
      <div id="form-container">
        <form className="form">
          <h1
            className="form-heading"
            onSubmit={(e) => {
              e.preventDefault();
              SignUpHandler(SignInUser);
            }}
          >
            APEX LORE / SIGN UP
          </h1>
          <input
            className="query"
            type="text"
            name="Name"
            placeholder="Enter Your First Name"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, firstName: e.target.val })
            }
          />
          <input
            className="query"
            type="text"
            name="LastName"
            placeholder="Enter Your Last Name"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, lastName: e.target.value })
            }
          />
          <input
            className="query"
            type="email"
            name="email"
            placeholder="Enter Your E-mail"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, email: e.target.value })
            }
          />
          <input
            className="query"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, password: e.target.value })
            }
          />
          <button className="btn" style={{ width: "13rem" }}>
            Sign Up
          </button>
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="sign-btn">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
