import {
  Favorite,
  History,
  Home,
  PlaylistPlay,
  WatchLater,
} from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ value, icon, to }) => {
  return (
    <NavLink to={to} activeClassName="active" className="link">
      <div className="icon-container">
        {icon}
        <h5>{value}</h5>
      </div>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu value="Home" icon={<Home className="icon" />} to="/" />
      <SidebarMenu
        value="Playlist"
        icon={<PlaylistPlay className="icon" />}
        to="/playlist"
      />
      <SidebarMenu
        value="Liked Videos"
        icon={<Favorite className="icon" />}
        to="/liked-videos"
      />
      <SidebarMenu
        value="Watch Later"
        icon={<WatchLater className="icon" />}
        to="/watchlater"
      />
      <SidebarMenu
        value="History"
        icon={<History className="icon" />}
        to="/history "
      />
    </div>
  );
};

export { Sidebar };
