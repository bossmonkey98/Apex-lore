import axios from "axios"

export const removeWatchLater =async(id,user)=>{
    try{
        const {data} =await axios .delete(
            `/api/user/watchlater/${id}`,
    
            {
              headers: { authorization: user.tokenVal },
            }
          )
    
        return data
    }
    catch(error){
        console.error("Unable to remove videos from watch later",error)
    }
}