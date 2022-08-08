import { VideoCard } from "../../components/videocard/VideoCard";
import { useWatchLater } from "../../Context/watchlater-context";

const WatchLater = () => {
  const { watchlater } = useWatchLater()

  return <div>
    <h1>Watch Later Videos</h1>
    <div className="liked-vids">
      {
        watchlater.length !== 0 ?
          watchlater.map((videos) => (
            <VideoCard videos={videos} />
          )) :
          <h3>
            No videos found in watchlater
          </h3>
      }
    </div>
  </div>;
};

export default WatchLater;
