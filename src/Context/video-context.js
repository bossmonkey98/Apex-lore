import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState();
  const url = "/api/videos";
  const fetchdata = async () => {
    const { data } = await axios.get(url);
    setVideo(data.videos);
  };
  useEffect(
    () =>
      setTimeout(() => {
        fetchdata();
      }, 3000),
    []
  );
  console.log(video);
  return (
    <VideoContext.Provider value={{ video }}>{children}</VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
