import CreateComment from "./CreateComment.js";
export default function Comment(props) {
  return (
    <div>
      <div
        style={
          props.color === "reply"
            ? { background: "rgba(0,0,0,.2)" }
            : { background: "rgba(0,0,0,.5" }
        }
      >
        <div>{props.comment.body}</div>
      </div>
      <CreateComment
        /* Include props.post so the notify knows where to send user */
        type="reply"
        to={props.comment.id}
        post={props.post}
        user={props.user}
        comment={props.comment}
      />
      <hr />
      <hr />
      {props.data.comments.map((comment) => {
        if (props.comment.id === comment.to) {
          return (
            <Comment
              color={"reply"}
              data={props.data}
              comment={comment}
              user={props.user}
              key={comment.id}
            />
          );
        }
      })}
    </div>
  );
}
