import { VideoCard } from "../../components/videocard/VideoCard";
import { useLikedVideos } from "../../Context/LikedVideosContext";
import './LikedVideos.css'
const LikedVideos = () => {
  const {LikedVideos} = useLikedVideos()
  console.log(LikedVideos)
  return <div className="liked-vids">{LikedVideos!== []?LikedVideos.map((videos)=>(<VideoCard videos={videos}/>)):<>Browse Videos and like them to see your favorite videos</>
    }</div>;
};

export default LikedVideos;
