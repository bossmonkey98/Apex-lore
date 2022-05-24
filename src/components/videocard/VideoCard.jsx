import React, { useState } from "react";
import "./VideoCard.css";
import { timeSince, toTimestamp } from "../../utils";
import { PlayArrow } from "@material-ui/icons";
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "../../Context/History-context";
import { useWatchLater } from "../../Context/watchlater-context";

const VideoCard = ({ videos }) => {
  const {user} = useAuth()
  const [bool, setBool] = useState(false);
  const navigator = useNavigate()
  const {history ,AddToHistory, RemoveFromHistory} = useHistory()
  const {watchlater,AddTowatchlater,RemoveFromwatchlater} = useWatchLater()
  return (
    <div className="vertical-card">
      <div
        className="img-container"
        onMouseEnter={() => setBool(true)}
        onMouseLeave={() => setBool(false)}
      >
        <img
          className="vertical-card-img"
          src={videos.thumbnail}
          alt="thumbnail"
        />
        {bool && (
          <div className="play-btn">
            <Link to={`/video/${videos._id}`} className="play-btn-bg">
              <PlayArrow fontSize="large" onClick={()=>{
                if(user.isUserLoggedIn){
                  if(history.find((vid)=>vid._id === videos._id)){
                  RemoveFromHistory(videos._id,user)
                  setTimeout(()=>AddToHistory(videos,user),1000)
                }
                else
                  AddToHistory(videos,user)
              }
                else{
                  alert("please Login to continue")
                  navigator("/login")
                }
              }}/>
            </Link>
          </div>
        )}
      </div>
      <div className="vertical-card-content">
        <div className="vid-title">
          <h3>{videos.title}</h3>
          <div className="date-views">
            <p>Uploaded:{timeSince(toTimestamp(videos.publishedon))} ago</p>
            <p>views: {videos.views}</p>
          </div>
        </div>
        <div className="video-creator">
          <div className="xs-img-avatar">
            <img src={videos.avatar} alt="" className="avatar-img4" />
          </div>
          <div className="creator-name">{videos.creator}</div>
        </div>
        { watchlater.find((vid)=>vid._id === videos._id)?
        <button className="btn" onClick={()=>RemoveFromwatchlater(videos._id,user)}>Remove from watchlater</button>
        :<button className="btn" onClick={()=>{
          if(user.isUserLoggedIn){
            AddTowatchlater(videos,user)
          }
          else{
            alert("Please login to continue")
            navigator("/login")
          }
        }}>Add to watchlater</button>}
        <button className="btn">Add to Playlist</button>
      </div>
    </div>
  );
};

export { VideoCard };
