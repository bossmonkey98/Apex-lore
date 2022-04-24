import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  History,
  Home,
  LikedVideos,
  Login,
  Playlist,
  Signup,
  Watchlater,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/playlist" element={<Playlist />} />
        <Route to="/likedvideos" element={<LikedVideos />} />
        <Route to="/watch-later" element={<Watchlater />} />
        <Route to="/login" element={<Login />} />
        <Route to="/signup" element={<Signup />} />
        <Route to="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
