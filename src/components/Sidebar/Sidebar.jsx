import {
  Favorite,
  History,
  Home,
  PlaylistPlay,
  WatchLater,
} from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" activeClassName="active" className="link">
        <div className="icon-container">
          <Home className="icon" />
          <h3>Home</h3>
        </div>
      </NavLink>
      <NavLink to="/playlist" activeClassName="active" className="link">
        <div className="icon-container">
          <PlaylistPlay className="icon" />
          <h3>Playlist</h3>
        </div>
      </NavLink>
      <NavLink to="/liked-videos" activeClassName="active" className="link">
        <div className="icon-container">
          <Favorite className="icon" />
          <h3>Liked Videos</h3>
        </div>
      </NavLink>
      <NavLink to="/watchlater" activeClassName="active" className="link">
        <div className="icon-container">
          <WatchLater className="icon" />
          <h3>Watch Later</h3>
        </div>
      </NavLink>
      <NavLink to="/history " activeClassName="active" className="link">
        <div className="icon-container">
          <History className="icon" />
          <h3>History</h3>
        </div>
      </NavLink>
    </div>
  );
};

export { Sidebar };
