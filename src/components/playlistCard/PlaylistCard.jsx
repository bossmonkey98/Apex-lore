import { Folder } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context'
import "./PlaylistCard.css"
const PlaylistCard = () => {
    const {playlist,removePlaylist} =usePlaylist()
  return (
    <div className='file-wrap'>
        {playlist.map((i)=><Link to={`/playlist/${i._id}`} className='playlist-file' key={i.id}><Folder id= "file"/>
        <p className='txt'>{i.name}</p>
        <button className='navbtn'onClick={()=>removePlaylist(i._id)}>Delete Playlist</button>
        </Link>)}
    </div>
  )
}

export {PlaylistCard}
