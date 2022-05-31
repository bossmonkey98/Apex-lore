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
import MockmanEs from "mockman-js";
import Video from "./pages/videopage/Video";
import PlaylistVideo from "./pages/playlistVideo/PlaylistVideo";
import Error404 from "./pages/Error404";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/mockman" element={<MockmanEs/>}/>
          <Route path = "/video/:videoId" element={<Video/>}/>
          <Route path = "/playlist/:playlistId" element={<PlaylistVideo/>}/>
          <Route path = "*" element ={<Error404/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
