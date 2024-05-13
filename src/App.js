import React from "react";
import video_1 from "./assets/video_1.mp4";
import "./App.css";
const App = () => {
  return (
    <div className="video-main-div">
      <video
        autoPlay={true}
        loop={true}
        className="video1"
        disablePictureInPicture={true}
        src={video_1}
      />
      <div className="text-div">
        <h1 className="text1">Infinity Export</h1>
      </div>
    </div>
  );
};

export default App;
