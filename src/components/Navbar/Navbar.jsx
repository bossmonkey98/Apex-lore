import { Search } from "@material-ui/icons";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
const Navbar = () => {
  return (
    <div>
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
          <button className="btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
