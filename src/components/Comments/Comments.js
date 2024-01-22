import VideoComments from "../VideoComments/VideoComments";
import CommentsInput from "../CommentsInput/CommentsInput";
import "./Comments.scss";

const Comments = ({ selected }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="comment">
      <h3 className="comment__title">3 Comments</h3>
      <VideoComments handleSubmit={handleSubmit} />

      {selected.comments.map((comment) => {
        return <CommentsInput key={comment.id} commentData={comment} />;
      })}
    </section>
  );
};

export default Comments;
