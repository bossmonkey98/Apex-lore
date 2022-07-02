import { createContext, useContext, useEffect, useState } from "react";
import { getPlaylist } from "../services/playlist/getPlaylist";
import { createNewPlaylist } from "../services/playlist/createNewPlaylist";
import {deletePlaylist } from "../services/playlist/deletePlaylist";
import {addVideoToPlaylist } from "../services/playlist/addVideoToPlaylist";
import {removeVideoFromPlaylist } from "../services/playlist/removeVideoFromPlaylist";
import {getSpecificPlaylist } from "../services/playlist/getSpecificPlaylist";
import { useAuth } from "./AuthContext";

const PlaylistContext = createContext()
const usePlaylist = ()=>useContext(PlaylistContext)
const PlaylistProvider =({children})=>{
    const {user} = useAuth()
    const [playlist , setPlaylist] = useState([])
    const [specificPlaylistVideos ,setSpecificPlaylistVideos] =useState()
    useEffect(()=>{
        if(user.isUserLoggedIn){
            (async()=>{
                const data = await getPlaylist(user.tokenVal);
                if(data){
                    setPlaylist(data.playlists)
                }
            })()}
            else{
                setPlaylist([])
            }
    },[user])
    
    const getSpeciPlaylist = async(playlistId)=>{
        const data = await getSpecificPlaylist(playlistId,user.tokenVal)
        if(data)
            setSpecificPlaylistVideos(data.playlist.videos)

    }

    const newPlaylist = async(playlistData)=>{
        const data = await createNewPlaylist(playlistData,user.tokenVal)
        if(data)
        setPlaylist(data.playlists)
    }

    const removePlaylist = async(id)=>{
        const data = await deletePlaylist(id,user.tokenVal)
        if(data)
        setPlaylist(data.playlists)
    }

    const addToPlaylist = async(playlistid,video)=>{
        const data = await addVideoToPlaylist(playlistid, video, user.tokenVal)
        const info = await getPlaylist(user.tokenVal)
        if (info)
            setPlaylist(info.playlists)
    }

    const removeFromPlaylist = async(playlistid,videoid)=>{
        const data = await removeVideoFromPlaylist(playlistid,videoid,user.tokenVal)
        if(data)
        setPlaylist(data.playlists)
    }
    
    return(
    <PlaylistContext.Provider value={{specificPlaylistVideos,playlist,newPlaylist,removePlaylist,getSpeciPlaylist,addToPlaylist,removeFromPlaylist}}>
        {children}
    </PlaylistContext.Provider>
)
}

export {usePlaylist,PlaylistProvider}