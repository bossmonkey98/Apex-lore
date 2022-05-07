import React, { useState } from "react";
import "./VideoCard.css";
import { timeSince, toTimestamp } from "../../utils";
import { PlayArrow } from "@material-ui/icons";

const VideoCard = ({ videos }) => {
  const [bool, setBool] = useState(false);
  return (
    <div className="vertical-card">
      <div
        className="img-container"
        onMouseEnter={() => setBool(true)}
        onMouseLeave={() => setBool(false)}
      >
        <img className="vertical-card-img" src={videos.thumbnail} alt="" />
        {bool && (
          <div className="play-btn">
            <div className="play-btn-bg">
              <PlayArrow fontSize="large" />
            </div>
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
        <button className="btn">Watch Later</button>
        <button className="btn">Add to Playlist</button>
      </div>
    </div>
  );
};

export { VideoCard };
