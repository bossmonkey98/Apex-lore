import axios from "axios";

export const addWatchLater = async(video,user) =>{
    try{
        const {data} = await axios.post(
            "/api/user/watchlater",
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
            console.error("Unable to add to watch later",error)
        }
}