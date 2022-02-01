import React from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import Votes from "./Votes.js";
import CommentArea from "./CommentArea.js";

function App() {
  return (
    <div className="App">
      <iframe
        width="600"
        height="325"
        src={video.embedUrl}
        allowFullScreen
      />
      <Header prop={video}/>
      <Votes upVotes={video.upvotes} downVotes={video.downvotes}/>
      <CommentArea comments={video.comments} />
    </div>
  );
}

export default App;

// function App() {
//   console.log("Here's your data:", video);

//   return (
//     <div className="App">
//       <iframe
//         width="919"
//         height="525"
//         src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//         frameBorder="0"
//         allowFullScreen
//         title="Thinking in React"
//       />
//     </div>
//   );
// }