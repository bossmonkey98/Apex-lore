import axios from "axios"

export const getWatchLater = async(user) =>{
    try{
        const {data} = await axios.get("/api/user/watchlater", {
            headers: { authorization: user.tokenVal },
          })
        return data
    }
    catch(error){
        console.error("Something went wrong with watch later",error);
    }
}
