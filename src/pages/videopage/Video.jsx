import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useVideo } from '../../Context/video-context';
import {Loader} from '../../components/loader/Loader';
import { timeSince ,toTimestamp } from '../../utils';
import "./Video.css"
import { PlaylistAdd, ThumbDown, ThumbUp, ThumbUpOutlined, WatchLater } from '@material-ui/icons';
import { useLikedVideos } from '../../Context/LikedVideosContext';
import { useAuth } from '../../Context/AuthContext';
import { useWatchLater } from '../../Context/watchlater-context';

function findVideo(video , id){
    if(video)
    return video.find((item)=>item._id === id)
}

const Video = () => {
    const {videoId} = useParams();
    const {video} = useVideo();
    var singleVideo = findVideo(video,videoId)
    const {user} = useAuth()
    const navigator = useNavigate()
    const {LikedVideos,AddLikedVideos,RemoveLikedVideos} = useLikedVideos()
    const {watchlater,AddTowatchlater} = useWatchLater()
  return (
    <div className='video-page'>
      {singleVideo?<>
      <iframe src={singleVideo.link} frameBorder="0" className='video'></iframe>
      <div className='video-data'>
                <h1 style={{margin:"1rem"}}>{singleVideo.title}</h1>
      <div className='vid-data'>
        <div className="video-creatorr">
          <div className="xs-img-avatarr">
            <img src={singleVideo.avatar} alt="avatar" className="avatar-img4" />
          </div>
          <div className="creator-namee">{singleVideo.creator}</div>
        </div>
          <div className="date-viewss">
            <p>Uploaded:{timeSince(toTimestamp(singleVideo.publishedon))} ago</p>
            <p> views: {singleVideo.views}</p>
          </div>
          <div className='icons'>
            {LikedVideos.find((item)=>item._id === singleVideo._id)?
          <ThumbUp className='icon' fontSize='large'onClick ={()=>RemoveLikedVideos(singleVideo._id,user)}/>:
          <ThumbUpOutlined className='icon' fontSize='large' onClick={()=>{
            if(user.isUserLoggedIn)
            AddLikedVideos(singleVideo,user)
            else{
              alert("Please Login to continue!!!")
              navigator("/login")
            }
          }}/>}
          <ThumbDown  className='icon' fontSize='large'/>
          <PlaylistAdd className='icon' fontSize='large'/>
          <WatchLater className='icon' fontSize='large' onClick={()=>{
            if(watchlater.find((vid)=>vid._id === singleVideo._id)){
              alert("video already found in watch later")
            }
            else
            AddTowatchlater(singleVideo,user)
          }}/>
          </div>
          </div>
            <p className="desc">
            Description : {singleVideo.desc}
            </p >
        </div></>:<Loader/>}
    </div>
  )
}

export default Video