import axios from "axios";

export const addHistory = async(video,user) =>{
    try{
        const {data} = await axios.post(
            "/api/user/history",
            JSON.stringify({
              video,
            }),
            {
              headers: { authorization: user.tokenVal },
            }
          )
        return data
    }
        catch(error){
            console.error("Unable to add videos to history",error)
        }
}