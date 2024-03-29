import React, { useState } from 'react'
import { usePlaylist } from '../../Context/playlist-context'
import "./Playlistmodal.css"



const Playlistmodal = ({ functions }) => {
    const [showModal, setShowModal, playlistVid, setPlaylistVid] = functions

    const CreatePlaylist = ({ playlistVid }) => {
        const { playlist, newPlaylist, addToPlaylist } = usePlaylist()
        const [playlistData, setPlaylistData] = useState({ name: "", description: "" })
        return (
            <div className="modal-content">
                <span className='close' onClick={() => setShowModal(false)}>&times;</span>
                <div className='playlist'>
                    <h4>PLaylists</h4>
                    {playlist ? playlist.length !== 0 &&
                        playlist.map((i) => (
                            <div>
                                <input
                                    type='checkbox'
                                    key={i.id}
                                    onChange={() => {
                                        addToPlaylist(i._id, playlistVid)
                                        alert("video added to playlist")
                                        setShowModal(false)
                                    }} />
                                <span>{i.name}</span>
                            </div>))
                        : <p>No Playlists Found</p>}
                </div>
                <form action="submit" onSubmit={(e) => {
                    e.preventDefault();
                    if (playlistData.name.length !== 0 && playlistData.description.length !== 0) {
                        if (playlist) {
                            if (playlist.filter((item) => item.name === playlistData.name).length === 0)
                                newPlaylist(playlistData)
                            else
                                alert("playlist already exist")
                        }
                        else
                            newPlaylist(playlistData)
                    }
                    else {
                        alert('Please fill Name and Description to create playlist')
                    }
                    e.target.reset()
                }}>
                    Name:<input type="text" className="data"
                        onChange={(e) => {
                            e.preventDefault();
                            setPlaylistData({ ...playlistData, name: e.target.value })
                        }} />
                    Description:<input type="text" className="data"
                        onChange={(e) => {
                            e.preventDefault();
                            setPlaylistData({ ...playlistData, description: e.target.value })
                        }} />
                    <button type='submit'
                        className='navbtn'
                        style={{ marginTop: "8px" }}
                    >
                        Create playlist
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="modal">
            <CreatePlaylist playlistVid={playlistVid} />
        </div>
    )
}

export default Playlistmodal
