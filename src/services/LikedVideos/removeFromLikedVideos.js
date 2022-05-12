import axios from "axios"

export const removeFromLikedVideos =async(id,user)=>{
    try{
        const {data} =await axios .delete(
            `/api/user/likes/${id}`,
    
            {
              headers: { authorization: user.tokenVal },
            }
          )
    
        return data
    }
    catch(error){
        console.error("Unable to remove videos from liked videos",error)
    }
}