import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSider from "./VideoSider";
function Video({ videolink, channel, song, likes, desc, shares }) {
  const videoref = useRef("");
  const [playing, setplaying] = useState(false);
  useEffect(() => {
    videoref.current.play();
  }, []);
  const handleVideoPress = () => {
    if (playing) {
      videoref.current.pause();
      setplaying(false);
    } else {
      videoref.current.play();
      setplaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={handleVideoPress}
        ref={videoref}
        src={videolink}
      ></video>
      <VideoFooter channel={channel} desc={desc} song={song}></VideoFooter>
      <VideoSider likes={likes} shares={shares}></VideoSider>
    </div>
  );
}

export default Video;
