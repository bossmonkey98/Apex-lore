import {
  Favorite,
  History,
  Home,
  PlaylistPlay,
  WatchLater,
} from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ icon, to }) => {
  return (
    <NavLink to={to} activeClassName="active" className="link">
      <div className="icon-container">
        {icon}
      </div>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu icon={<Home className="icon" />} to="/" />
      <SidebarMenu
        icon={<PlaylistPlay className="icon" />}
        to="/playlist"
      />
      <SidebarMenu
        icon={<Favorite className="icon" />}
        to="/liked-videos"
      />
      <SidebarMenu
        icon={<WatchLater className="icon" />}
        to="/watchlater"
      />
      <SidebarMenu
        icon={<History className="icon" />}
        to="/history "
      />
    </div>
  );
};

export { Sidebar };
