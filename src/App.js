import logo from "./logo.svg";
import "./App.css";
import Video from "./Video";
import axios from "./axis";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("/v2/posts")
      .then((data) => {
        console.log(data.data);
        setdata(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // let link1 =
  //   "https://player.vimeo.com/external/396571288.sd.mp4?s=52ff206e8611ddeebc52447baa94ad0a103a5222&profile_id=165&oauth2_token_id=57447761";
  // let link2 =
  //   "https://player.vimeo.com/external/451821983.sd.mp4?s=e1f1efd92e89b9aa4326d3cb1e02c2c8e0d80351&profile_id=165&oauth2_token_id=57447761";
  return (
    <div className="App">
      <div class="app__videos">
        {data?.map((data) => (
          <Video
            videolink={data.url}
            channel={data.channel}
            song={data.song}
            likes={data.likes}
            desc={data.desc}
            shares={data.shares}
          ></Video>
        ))}
      </div>
    </div>
  );
}

export default App;
// videolink, channel, song, likes, desc, shares;

//  url:
//     "https://player.vimeo.com/external/451821983.sd.mp4?s=e1f1efd92e89b9aa4326d3cb1e02c2c8e0d80351&profile_id=165&oauth2_token_id=57447761",
//   channel: "satish",
//   song: "this is freefire",
//   likes: "34",
//   messages: "33",
//   desc: "Thei si second desc",
//   shares: "200",
