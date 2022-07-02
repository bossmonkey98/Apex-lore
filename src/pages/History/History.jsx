import './History.css'
import { VideoCard } from "../../components/videocard/VideoCard";
import { useHistory } from "../../Context/History-context";
import { useAuth } from '../../Context/AuthContext';

const History = () => {
  const {user} = useAuth()
  const {history ,clearHistory} = useHistory()
  return <div className="liked-vids" id="history">
    {history.length === 0 ? <>No history found</> : history.map((videos) => <VideoCard key={videos.id} videos={videos} showbtn={true} inhistory={true} />)}
  <button className="clr-btn" onClick={()=>clearHistory(user)}>Clear History</button>
  </div>;
};

export default History;
