import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useVideo } from '../../Context/video-context';
import { Loader } from '../../components/loader/Loader';
import { timeSince, toTimestamp } from '../../utils';
import "./Video.css"
import { PlaylistAdd, ThumbUp, ThumbUpOutlined, WatchLater } from '@material-ui/icons';
import { useLikedVideos } from '../../Context/LikedVideosContext';
import { useAuth } from '../../Context/AuthContext';
import { useWatchLater } from '../../Context/watchlater-context';
import { Playlistmodal } from '../../components'

function findVideo(video, id) {
  if (video)
    return video.find((item) => item._id === id)
}

const Video = () => {
  const { videoId } = useParams();
  const { video } = useVideo();
  var singleVideo = findVideo(video, videoId)
  const { user } = useAuth()
  const navigator = useNavigate()
  const { LikedVideos, AddLikedVideos, RemoveLikedVideos } = useLikedVideos()
  const { watchlater, AddTowatchlater } = useWatchLater()
  const [playlistVid, setPlaylistVid] = useState()
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='video-page'>
      {singleVideo ? <>
        <iframe src={singleVideo.link} frameBorder="0" className='video'></iframe>
        <div className='video-data'>
          <h1 style={{ margin: "10px", fontSize: "1.3rem" }}>{singleVideo.title}</h1>
          <section className='vid-data'>
            <section className="video-creatorr">
              <span className="xs-img-avatarr">
                <img src={singleVideo.avatar} alt="avatar" className="avatar-img4" />
              </span>
              <span className="creator-namee">{singleVideo.creator}</span>
            </section>
            <div style={{display:"flex", justifyContent:"space-between" ,flex:"1" ,margin:"0 1rem" }}>
              <section className="date-viewss">
                <div>
                  <p>Uploaded:{timeSince(toTimestamp(singleVideo.publishedon))} ago</p>
                  <p> views: {singleVideo.views}</p>
                </div >
              </section>
              <section className='icons'>
                {LikedVideos.find((item) => item._id === singleVideo._id) ?
                  <ThumbUp className='icon' fontSize='large' onClick={() => RemoveLikedVideos(singleVideo._id, user)} /> :
                  <ThumbUpOutlined className='icon' fontSize='large' onClick={() => {
                    if (user.isUserLoggedIn)
                      AddLikedVideos(singleVideo, user)
                    else {
                      alert("Please Login to continue!!!")
                      navigator("/login")
                    }
                  }} />}
                <PlaylistAdd className='icon' fontSize='large' onClick={
                  () => { setShowModal(true); setPlaylistVid(singleVideo) }} />
                {showModal && <Playlistmodal functions={[showModal, setShowModal, playlistVid, setPlaylistVid]} />}
                <WatchLater className='icon' fontSize='large' onClick={() => {
                  if (watchlater.find((vid) => vid._id === singleVideo._id)) {
                    alert("video already found in watch later")
                  }
                  else
                    AddTowatchlater(singleVideo, user)
                }} />
              </section>
            </div>
          </section>
          <p className="desc">
            Description : {singleVideo.desc}
          </p >
        </div></> : <Loader />}
    </div>
  )
}

export default Video