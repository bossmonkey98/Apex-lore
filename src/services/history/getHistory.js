import axios from "axios"

export const getHistory = async(user) =>{
    try{
        const {data} = await axios.get("/api/user/history", {
            headers: { authorization: user.tokenVal },
          })
        return data
    }
    catch(error){
        console.error("Something went wrong with history",error);
    }
}
