import dateConvertor from "../DateConvertor/DateConvertor";
import "./CommentsInput.scss";

const CommentsInput = ({ commentData }) => {
  return (
    <article className="comments__card">
      <div className="comments__avatar"></div>
      <div className="comments__body">
        <p className="comments__user">{commentData.name}</p>
        <p className="comments__date">{dateConvertor(commentData.timestamp)}</p>
        <p className="comments__text">{commentData.comment}</p>
      </div>
    </article>
  );
};

export default CommentsInput;
