import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/video-context";
import { AuthProvider } from "./Context/AuthContext";
import { LikedVideosProvider } from "./Context/LikedVideosContext";
import { HistoryProvider } from "./Context/History-context";
import { WatchLaterProvider } from "./Context/watchlater-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <LikedVideosProvider>
            <HistoryProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </HistoryProvider>
          </LikedVideosProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
