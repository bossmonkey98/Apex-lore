import React, { useState } from "react";
import "./auth.css";
import { TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { SignUpHandler } from "../../services/authHandllers/signupHandller";
import { useAuth } from "../../Context/AuthContext";

export default function Signup() {
  const {setUser} = useAuth()
  const navigator = useNavigate()
  const [SignInUser, setSignInUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
      <div className="form-cont">
        <form className="form" onSubmit={(e) => {
              e.preventDefault();
              SignUpHandler(SignInUser,navigator,setUser);
            }}>
          <h1
            className="form-heading"
          >
            SIGN UP
          </h1>
          <TextField
            className="query"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter Your First Name"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, firstName: e.target.val })
            }
          />
          <TextField
            className="query"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Enter Your Last Name"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, lastName: e.target.value })
            }
          />
          <TextField
            className="query"
            type="email"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Enter Your E-mail"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, email: e.target.value })
            }
          />
          <TextField
            className="query"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Enter Password"
            onChange={(e) =>
              setSignInUser({ ...SignInUser, password: e.target.value })
            }
          />
          <button className="btn" style={{ width: "13rem" }} type="submit">
            Sign Up
          </button>
          <p>Already have an account?</p>
          <Link to="/login" style={{color:'inherit'}}>
            Login
          </Link>
        </form>
      </div>
  );
}
