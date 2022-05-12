import axios from "axios"

export const clearAll =async(user)=>{
    try{
        const {data} =await axios .delete(
            "/api/user/history/all",
    
            {
              headers: { authorization: user.tokenVal },
            }
          )
            console.log(data)
        return data
    }
    catch(error){
        console.error("Unable to clear histroy",error)
    }
}