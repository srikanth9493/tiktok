import React, { useState } from "react";
import "./VIdeoSider.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSider({ likes, shares }) {
  const [liked, setliked] = useState(false);
  return (
    <div className="videosidebar">
      <div class="videosidebar__button">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={(e) => setliked(false)}
          ></FavoriteIcon>
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(true)}
          ></FavoriteBorderIcon>
        )}

        <p>{liked ? 101 : 100}</p>
      </div>
      <div class="videosidebar__button">
        <MessageIcon></MessageIcon>
        <p>200</p>
      </div>
      <div class="videosidebar__button">
        <ShareIcon></ShareIcon>
        <p>10</p>
      </div>
      <div class="videosidebar__button">
        <img src="https://static.vecteezy.com/system/resources/previews/001/208/094/original/music-cd-png.png"></img>
      </div>
    </div>
  );
}

export default VideoSider;
