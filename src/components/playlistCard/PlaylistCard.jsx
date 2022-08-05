import { Folder } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { usePlaylist } from '../../Context/playlist-context'
import "./PlaylistCard.css"


const PlaylistCard = () => {
  const { playlist, removePlaylist } = usePlaylist()

  return (
    <div className='file-wrap'>
      {
        playlist.map((i) =>
          <div className='playlist-cont'>
            <Link to={`/playlist/${i._id}`}
              className='playlist-file'
              key={i.id}>
              <Folder id="file" />
              <p className='file-name'>{i.name}</p>
            </Link>
            <button className='btn' onClick={() => removePlaylist(i._id)}>Delete Playlist</button>
          </div>)}
    </div>
  )
}

export { PlaylistCard }
