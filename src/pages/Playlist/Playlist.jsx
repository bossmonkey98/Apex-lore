import { PlaylistCard } from "../../components/playlistCard/PlaylistCard";
import { usePlaylist } from "../../Context/playlist-context";

const Playlist = () => {
  const { playlist } = usePlaylist();

  return (
    <div>
      <h1>Playlist</h1>
      <div className="playlist-container">
        {playlist.length !== 0 ?
          <PlaylistCard key={playlist._id} /> :
          <h3>
            No playlist found
          </h3>}
      </div>
    </div>
  )
};

export default Playlist;
