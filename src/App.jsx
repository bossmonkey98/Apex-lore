import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home/Home";
import Playlist from "./pages/Playlist/Playlist";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import Watchlater from "./pages/WatchLater/Watchlater";
import History from "./pages/History/History";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Layout from "./layout/Layout";
import Video from "./pages/videopage/Video";
import PlaylistVideo from "./pages/playlistVideo/PlaylistVideo";
import Error404 from "./pages/Error404/Error404";
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PrivateRoute PrivateItem={<Playlist />} />} />
          <Route path="/liked-videos" element={<PrivateRoute PrivateItem={<LikedVideos />} />} />
          <Route path="/watchlater" element={<PrivateRoute PrivateItem={<Watchlater />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/video/:videoId" element={<PrivateRoute PrivateItem={<Video />} />} />
          <Route path="/playlist/:playlistId" element={<PrivateRoute PrivateItem={<PlaylistVideo />} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
