import './History.css'
import { VideoCard } from "../../components/videocard/VideoCard";
import { useHistory } from "../../Context/History-context";
import { useAuth } from '../../Context/AuthContext';

const History = () => {
  const { user } = useAuth()
  const { history, clearHistory } = useHistory()

  return (
    <div id="history">
      <h1>History</h1>
      <div className="liked-vids">
        {
          history.length === 0 ?
            <h3>
              No history found
            </h3> :
            history.map((videos) =>
              <VideoCard
                key={videos.id}
                videos={videos}
                showbtn={true}
                inhistory={true}
                title='remove from history'
              />)}
        <button className="clr-btn" onClick={() => clearHistory(user)}>Clear History</button>
      </div>
    </div>
  )
};

export default History;
