import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { LogInHandler } from "../../services/authHandllers/logHandller";
import "./auth.css";

const Login = () => {
  const { user, setUser } = useAuth();
  const [loguser, setLoguser] = useState({ email: "", password: "" });
  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const navigator = useNavigate();
  return (
    <div className="form-cont">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          LogInHandler(loguser, setUser, navigator);
        }}
      >
        <h1 className="form-heading">LOGIN</h1>
        <TextField
          className="query"
          placeholder="Enter Email"
          variant="outlined"
          fullWidth
          size="small"
          onChange={(e) => setLoguser({ ...loguser, email: e.target.value })}
        />
        <TextField
          className="query"
          type="password"
          variant="outlined"
          placeholder="Enter Password"
          fullWidth
          size="small"
          onChange={(e) => setLoguser({ ...loguser, password: e.target.value })}
        />
        <p className="log-cred" style={{ cursor: "context-menu" }}>
          <span>
            <input type="radio" />
            Remember me
          </span>
        </p>
        <div className="log-btn">
          <button className="btn" type="submit">
            Login
          </button>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              LogInHandler(guestUser, setUser, navigator);
            }}
          >
            Login as Guest
          </button>
        </div>
        <div>
          No Account?
          <Link
            to="/signup"
            style={{color:'inherit'}}
          >
            Create One
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
