import { VideoCard } from "../../components/videocard/VideoCard";
import { useWatchLater } from "../../Context/watchlater-context";

const WatchLater = () => {
  const {watchlater} = useWatchLater()
  return <div className="liked-vids">{watchlater.length !== 0?watchlater.map((videos)=>(<VideoCard videos={videos}/>)):<>No videos found in watchlater</>
    }</div>;
};

export default WatchLater;
