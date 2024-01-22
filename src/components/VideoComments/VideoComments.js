import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import "./VideoComments.scss";
import submitIcon from "../../assets/Icons/add_comment.svg";
const VideoComments = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__avatar-wrapper">
        <img className="form__avatar" src={profileImage} alt="Mogan muruge" />
      </div>
      <div className="form__body">
        <label className="form__label" htmlFor="comment">
          JOIN THE CONVERSATION
        </label>
        <textarea
          rows="3"
          className="form__input"
          name="comment"
          placeholder="Write comment here"
        />
        <button className="form__submit" type="submit">
          <img
            className="form__submit-icon"
            src={submitIcon}
            alt="submit icon"
          />
          COMMENT
        </button>
      </div>
    </form>
  );
};
export default VideoComments;
