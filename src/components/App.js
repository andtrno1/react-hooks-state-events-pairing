import video from "../data/video.js";
import Comments from "./Comments.js";
import DislikeButton from "./DislikeButton.js";
import LikeButton from "./LikeButton.js";
import RenderVideo from "./RenderVideo.js";



function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <RenderVideo title={video.title} video={video.embedUrl} views={video.views} upload={video.createdAt}/>
      <LikeButton upvotes={video.upvotes}/>
      <DislikeButton downvotes={video.downvotes}/>
      <Comments comments={video.comments}/>

      
    </div>
  );
}

export default App;