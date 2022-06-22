import axios from "axios";

export const getPlaylist = async (token) => {
  try {
    const {data} = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};