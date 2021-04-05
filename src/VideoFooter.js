import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function VideoFooter({ channel, desc, song }) {
  return (
    <div className="videofooter">
      <div class="videofooter__text">
        <h3> @{channel}</h3>
        <p>{desc}</p>
        <div className="videofooter__ticker">
          <MusicNoteIcon className="videofooter__icon"></MusicNoteIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
