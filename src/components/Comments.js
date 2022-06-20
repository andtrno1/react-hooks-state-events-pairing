import { useState } from "react";

const Comments = (props) => {
  const [comment, setComment] = useState(true);

  let HideComments = (e) => {
    setComment(!comment);
  };

  return (
    <div>
      <button onClick={HideComments}>
        {comment ? "Hide Comments" : "Show Comments"}
      </button>
      {comment ? <h2>{props.comments.length} Comments</h2> : ""}
      {comment
        ? props.comments.map((comment) => {
            return (
              <>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default Comments;