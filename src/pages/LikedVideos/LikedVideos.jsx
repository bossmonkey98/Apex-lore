import { VideoCard } from "../../components/videocard/VideoCard";
import { useLikedVideos } from "../../Context/LikedVideosContext";
import './LikedVideos.css'
const LikedVideos = () => {
  const { LikedVideos } = useLikedVideos()

  return (
    <div>
      <h1>Liked Videos</h1>
      <div className="liked-vids">
        {LikedVideos.length !== 0 ?
          LikedVideos.map((videos) =>
          (<VideoCard videos=
            {videos}
            showbtn={true}
            likedVideo={true}
            title='remove from liked videos'
          />)) :
          <h3>
            Browse Videos and like them to see your favorite videos
          </h3>
        }
      </div>
    </div>
  )
};

export default LikedVideos;
