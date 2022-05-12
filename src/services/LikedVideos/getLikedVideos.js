import axios from "axios"

export const getLikedVideos = async(user) =>{
    try{
        const {data} = await axios.get("/api/user/likes", {
            headers: { authorization: user.tokenVal },
          })
        return data
    }
    catch(error){
        console.error("Something went wrong with likes",error);
    }
}
