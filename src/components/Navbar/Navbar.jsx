import { Search } from "@material-ui/icons";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="Navbar">
        <div className="app-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-txt">pex-Lore</h1>
        </div>
        <div className="searchbar">
          <Search className="search" />
          <input type="text" className="query" placeholder="Enter text here" />
        </div>
        <div className="auth">
          <Link to="/login">
            <button className="navbtn">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
