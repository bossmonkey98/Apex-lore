import axios from "axios"

export const removeHistory =async(id,user)=>{
    try{
        const {data} =await axios .delete(
            `/api/user/history/${id}`,
    
            {
              headers: { authorization: user.tokenVal },
            }
          )
    
        return data
    }
    catch(error){
        console.error("Unable to remove videos from histroy",error)
    }
}