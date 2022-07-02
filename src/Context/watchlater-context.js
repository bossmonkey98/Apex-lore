import { createContext, useContext, useEffect, useState } from "react";
import { addWatchLater } from "../services/watchlater/addWatchLater";
import { getWatchLater } from "../services/watchlater/getWatchLater";
import { removeWatchLater } from "../services/watchlater/removeWatchLater";
import { useAuth } from "./AuthContext";

const WatchLaterContext = createContext()

const useWatchLater = () => useContext(WatchLaterContext)

const WatchLaterProvider = ({children})=>{
    const {user} = useAuth()
    const [watchlater , setwatchlater] = useState([])
    useEffect(()=>{
        if(user.isUserLoggedIn){
            (async()=>{
                const data = await getWatchLater(user);
                if(data){
                    setwatchlater(data.watchlater)
                }
            })()}
    },[user])
    const AddTowatchlater = async(videos,user)=>{
        const video = await addWatchLater(videos,user)
        if(video)
        setwatchlater(video.watchlater)
    }
    const RemoveFromwatchlater = async(id ,user)=>{
        const removeVideos = await removeWatchLater(id,user)
        if(removeVideos)
        setwatchlater(removeVideos.watchlater)
    }
    return(
    <WatchLaterContext.Provider value={{watchlater,AddTowatchlater,RemoveFromwatchlater}}>
        {children}
    </WatchLaterContext.Provider>
)
}

export {useWatchLater,WatchLaterProvider}