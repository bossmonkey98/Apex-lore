import { useParams } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context';
import {VideoCard} from "../../components/videocard/VideoCard"
const PlaylistVideo = () => {
  const {playlistId} = useParams();
  const {specificPlaylistVideos,getSpeciPlaylist,removeFromPlaylist,playlist} = usePlaylist()
  getSpeciPlaylist(playlistId)
  return (
    specificPlaylistVideos ? <>
      {specificPlaylistVideos.map(
        (videos) => <VideoCard videos={videos} showbtn={true} id={playlistId} />
      )}
    </> :
      <div>NO videos found</div>
  )
}

export default PlaylistVideo
