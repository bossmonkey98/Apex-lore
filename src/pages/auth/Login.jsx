import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { LogInHandler } from "../../authHandllers/logHandller";
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
    <div id="log-wrapper">
      <div id="form-container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            LogInHandler(loguser, setUser, navigator);
          }}
        >
          <h1 className="form-heading">APEX LORE / LOGIN</h1>
          <input
            className="query"
            type="text"
            name="username"
            placeholder="Enter Email"
            onChange={(e) => setLoguser({ ...loguser, email: e.target.value })}
          />
          <input
            className="query"
            type="password"
            name="password"
            placeholder="Enter Password"
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
          <Link
            to="/signup"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <button className="sign-btn">No Account? Create One</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
