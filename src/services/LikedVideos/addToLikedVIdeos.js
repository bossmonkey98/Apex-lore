import axios from "axios";

export const AddToLikedVideos = async(video,user) =>{
    try{
        const {data} = await axios.post(
            "/api/user/likes",
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
            console.error("Unable to add to liked videos",error)
        }
}