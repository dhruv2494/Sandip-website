import React from "react";
import video1 from "./../assets/videos/video_1.mp4";

const HomeVideoComponent = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture={true}
        className="video-1"
        src={video1}
      />
    </div>
  );
};

export default HomeVideoComponent;
