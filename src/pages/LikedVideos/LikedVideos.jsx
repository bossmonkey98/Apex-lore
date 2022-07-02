import { VideoCard } from "../../components/videocard/VideoCard";
import { useLikedVideos } from "../../Context/LikedVideosContext";
import './LikedVideos.css'
const LikedVideos = () => {
  const {LikedVideos} = useLikedVideos()
  return <div className="liked-vids">{LikedVideos.length !== 0 ? LikedVideos.map((videos) => (<VideoCard videos={videos} showbtn={true} />)):<>Browse Videos and like them to see your favorite videos</>
    }</div>;
};

export default LikedVideos;
