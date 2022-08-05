import { Tooltip } from "@material-ui/core";
import {
  Favorite,
  History,
  Home,
  PlaylistPlay,
  WatchLater,
} from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarMenu = ({ icon, to, title }) => {
  return (
    <Tooltip title={title}
      className="icon-container"
    >
      <NavLink to={to} activeClassName="active" className="link">
        {icon}
      </NavLink>
    </Tooltip>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu
        icon={<Home className="icon" />}
        to="/"
        title='Home'
      />
      <SidebarMenu
        icon={<PlaylistPlay className="icon" />}
        to="/playlist"
        title='Playlist'
      />
      <SidebarMenu
        icon={<Favorite className="icon" />}
        to="/liked-videos"
        title='Liked Videos'
      />
      <SidebarMenu
        icon={<WatchLater className="icon" />}
        to="/watchlater"
        title='Watchlater'
      />
      <SidebarMenu
        icon={<History className="icon" />}
        to="/history "
        title='History'
      />
    </div>
  );
};

export { Sidebar };
