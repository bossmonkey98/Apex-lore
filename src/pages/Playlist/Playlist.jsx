import { PlaylistCard } from "../../components/playlistCard/PlaylistCard";
import { usePlaylist } from "../../Context/playlist-context";

const Playlist = () => {
  const {playlist ,newPlaylist,removePlaylist,getSpeciPlaylist,addToPlaylist,removeFromPlaylist} = usePlaylist();
  return <div className="playlist-container">
    {playlist.length !==0 ?<PlaylistCard key={playlist._id}/>:<>No playlist found</>}
  </div>;
};

export default Playlist;
