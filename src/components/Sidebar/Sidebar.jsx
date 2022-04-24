import {
  Favorite,
  History,
  Home,
  PlaylistPlay,
  WatchLater,
} from "@material-ui/icons";

import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="icon-container">
          <Home className="icon" />
          <h3>Home</h3>
        </div>
      </Link>
      <Link to="/playlist">
        <div className="icon-container">
          <PlaylistPlay className="icon" />
          <h3>Playlist</h3>
        </div>
      </Link>
      <Link to="/liked-videos">
        <div className="icon-container">
          <Favorite className="icon" />
          <h3>Liked Videos</h3>
        </div>
      </Link>
      <Link to="/watchlater">
        <div className="icon-container">
          <WatchLater className="icon" />
          <h3>Watch Later</h3>
        </div>
      </Link>
      <Link to="/history">
        <div className="icon-container">
          <History className="icon" />
          <h3>History</h3>
        </div>
      </Link>
    </div>
  );
};

export { Sidebar };
