import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context';
import {VideoCard} from "../../components/videocard/VideoCard"
const PlaylistVideo = () => {
  const {playlistid} = useParams();
  const {playlist ,newPlaylist,removePlaylist,getSpeciPlaylist,addToPlaylist,removeFromPlaylist} = usePlaylist()
  useEffect(()=>{getSpeciPlaylist(playlistid)},[])
  
  return (
    <div>
        {playlist?playlist.map((i)=>(
            i.videos.lenght !==0 &&
            <VideoCard videos={i.videos}/>))
            :<>Loading</>}
    </div>
  )
}

export default PlaylistVideo
