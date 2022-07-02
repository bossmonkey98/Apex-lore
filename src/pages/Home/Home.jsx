import { useState } from "react";
import { Loader, VideoCard } from "../../components";
import { useVideo } from "../../Context/video-context";
import { filterByCatagory } from "../../utils";
import "./Home.css";

const Home = () => {
  const { video } = useVideo();
  const [catagory, setCatagory] = useState("All");
  return (
    <div>
      <div className="chips">
        <button
          className={catagory === "All" ? "chip-btn-visited" : "chip-btn"}
          onClick={() => {
            setCatagory("All");
          }}
        >
          All
        </button>
        <button
          className={catagory === "trailers" ? "chip-btn-visited" : "chip-btn"}
          onClick={() => {
            setCatagory("trailers");
          }}
        >
          Trailers
        </button>
        <button
          className={
            catagory === "Outland Stories" ? "chip-btn-visited" : "chip-btn"
          }
          onClick={() => {
            setCatagory("Outland Stories");
          }}
        >
          Stories of Outlands
        </button>
        <button
          className={
            catagory === "Battle Pass" ? "chip-btn-visited" : "chip-btn"
          }
          onClick={() => {
            setCatagory("Battle Pass");
          }}
        >
          Battle Pass
        </button>
        <button
          className={catagory === "titanfall" ? "chip-btn-visited" : "chip-btn"}
          onClick={() => {
            setCatagory("titanfall");
          }}
        >
          Titanfall
        </button>
        <button
          className={catagory === "other" ? "chip-btn-visited" : "chip-btn"}
          onClick={() => {
            setCatagory("other");
          }}
        >
          Other
        </button>
      </div>
      <div className="home">
        {!video ? (
          <Loader />
        ) : (
          <>
            {filterByCatagory(video, catagory).map((videos) => (
              <VideoCard key={videos.id} videos={videos} />
            ))}
          </>
          )}
      </div>
    </div>
  );
};

export default Home;
