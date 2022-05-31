import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context';
import {VideoCard} from "../../components/videocard/VideoCard"
const PlaylistVideo = () => {
  const {playlistId} = useParams();
  const {playlist ,newPlaylist,removePlaylist,getSpeciPlaylist,addToPlaylist,removeFromPlaylist} = usePlaylist()
  var list = undefined
  if(playlist){
    list = playlist.find((i)=>i._id === playlistId)
  }
  return (
    <div>
      {playlist?list.videos.map((videos)=>
        <VideoCard videos={videos}/>)
        :<>Loading</>}
    </div>
  )
}

export default PlaylistVideo
