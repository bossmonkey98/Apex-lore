import { createContext, useContext, useEffect, useState } from "react"
import { addHistory } from "../services/history/addHistory"
import { getHistory } from "../services/history/getHistory"
import { removeHistory } from "../services/history/removeHistory"
import { useAuth } from "./AuthContext"
import {clearAll} from "../services/history/clearAll"

const HistoryContext = createContext()

const useHistory = () => useContext(HistoryContext)

const HistoryProvider = ({children})=>{
    const {user} = useAuth()
    const [history , sethistory] = useState([])
    useEffect(()=>{
        if(user.isUserLoggedIn){
            (async()=>{
                const data = await getHistory(user);
                if(data){
                    sethistory(data.history)
                }
            })()}
    },[user])
    const AddToHistory = async(videos,user)=>{
        const video = await addHistory(videos,user)
        if(video)
        sethistory(video.history)
    }
    const RemoveFromHistory = async(id ,user)=>{
        const removeVideos = await removeHistory(id,user)
        if(removeVideos)
        sethistory(removeVideos.history)
    }
    const clearHistory = async()=>{
        const clear = await clearAll(user)
         await sethistory(clear.history)
    }
    return(
    <HistoryContext.Provider value={{history,AddToHistory,RemoveFromHistory,clearHistory}}>
        {children}
    </HistoryContext.Provider>
)
}

export {useHistory,HistoryProvider}