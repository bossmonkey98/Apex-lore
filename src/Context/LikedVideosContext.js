import { createContext, useContext, useEffect, useState } from "react";
import { AddToLikedVideos } from "../services/LikedVideos/addToLikedVIdeos";
import { getLikedVideos } from "../services/LikedVideos/getLikedVideos";
import { removeFromLikedVideos } from "../services/LikedVideos/removeFromLikedVideos";
import { useAuth } from "./AuthContext";

const LikedVideosContext = createContext()
const useLikedVideos = ()=>useContext(LikedVideosContext)
const LikedVideosProvider =({children})=>{
    const { user } = useAuth()
    const [LikedVideos , setLikedVideos] = useState([])
    useEffect(()=>{
        if(user.isUserLoggedIn){
            (async()=>{
                const data = await getLikedVideos(user);
                if(data){
                    setLikedVideos(data.likes)
                }
            })()}
            else{
                setLikedVideos([])
            }
    },[user])
    const AddLikedVideos = async(videos,user)=>{
        const video = await AddToLikedVideos(videos,user)
        if(video)
        setLikedVideos(video.likes)
    }
    const RemoveLikedVideos = async(id)=>{
        const removeVideos = await removeFromLikedVideos(id,user)
        if(removeVideos)
        setLikedVideos(removeVideos.likes)
    }
    return(
    <LikedVideosContext.Provider value={{LikedVideos,setLikedVideos,AddLikedVideos,RemoveLikedVideos}}>
        {children}
    </LikedVideosContext.Provider>
)
}

export {useLikedVideos,LikedVideosProvider}