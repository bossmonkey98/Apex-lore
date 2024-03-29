import React, { useState } from "react";
import "./VideoCard.css";
import { timeSince, toTimestamp } from "../../utils";
import { PlayArrow } from "@material-ui/icons";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "../../Context/History-context";
import { useWatchLater } from "../../Context/watchlater-context";
import Playlistmodal from "../playlistmodal/Playlistmodal";
import { usePlaylist } from "../../Context/playlist-context";
import { useLikedVideos } from "../../Context/LikedVideosContext";
import { useModal } from "../../Context/modalContext";
import { Tooltip } from "@material-ui/core";

const VideoCard = ({ videos, showbtn, id, likedVideo, inhistory, title }) => {
  const { user } = useAuth()
  const [bool, setBool] = useState(false);
  const navigator = useNavigate()
  const { history, AddToHistory, RemoveFromHistory } = useHistory()
  const { watchlater, AddTowatchlater, RemoveFromwatchlater } = useWatchLater()
  const [showModal, setShowModal] = useState(false)
  const [playlistVid, setPlaylistVid] = useState()
  const { removeFromPlaylist } = usePlaylist()
  const { RemoveLikedVideos } = useLikedVideos()
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
              <PlayArrow fontSize="large" onClick={() => {
                if (history.find((vid) => vid._id === videos._id)) {
                  RemoveFromHistory(videos._id, user)
                  setTimeout(() => AddToHistory(videos, user), 1000)
                }
                else {
                  AddToHistory(videos, user)
                }
              }} />
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
        {watchlater.find((vid) => vid._id === videos._id) ?
          <button className="btn"
            onClick={() =>
              RemoveFromwatchlater(videos._id, user)
            }>Remove from watchlater
          </button>
          : <button className="btn" onClick={() => {
            if (user.isUserLoggedIn) {
              AddTowatchlater(videos, user)
            }
            else {
              alert("Please login to continue")
              navigator("/login")
            }
          }}>Add to Watch Later</button>}
        {
          !id &&
          <button className="btn" onClick={() => {
            if (user.isUserLoggedIn) {
              setShowModal(true);
              setPlaylistVid(videos)
            }
            else {
              alert("Please login to continue")
              navigator("/login")
            }
          }}>
            Add to Playlist
          </button>
        }
        {showModal && <Playlistmodal
          functions={[showModal, setShowModal, playlistVid, setPlaylistVid]}
        />}
      </div>
      {showbtn &&
        <Tooltip title={title}>
          <span className="card-badge" onClick={() => {
            if (id) {
              removeFromPlaylist(id, videos._id)
            }
            if (likedVideo) {
              RemoveLikedVideos(videos._id)
            }
            if (inhistory)
              RemoveFromHistory(videos._id)
          }}>
            &times;
          </span>
        </Tooltip>}
    </div>
  );
};

export { VideoCard };
