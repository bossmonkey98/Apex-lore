import { useParams } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context';
import { VideoCard } from "../../components/videocard/VideoCard"

const PlaylistVideo = () => {
  const { playlistId } = useParams();
  const { specificPlaylistVideos,
    getSpeciPlaylist,
  } = usePlaylist()
  getSpeciPlaylist(playlistId)

  return (
    specificPlaylistVideos ? <div className='liked-vids'>
      {specificPlaylistVideos.map(
        (videos) => <VideoCard
          videos={videos}
          showbtn={true}
          id={playlistId}
          title='Remove from playlist' />
      )}
    </div> :
      <div>NO videos found</div>
  )
}

export default PlaylistVideo
