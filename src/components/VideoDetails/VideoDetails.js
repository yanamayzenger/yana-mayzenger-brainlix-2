import dateConvertor from "../DateConvertor/DateConvertor";
import ViewIcon from "../../assets/Icons/views.svg";
import LikeIcon from "../../assets/Icons/likes.svg";
import "./VideoDetails.scss";

const VideoDetails = ({ selected }) => {
  return (
    <section className="details">
      <h1 className="details__title">{selected.title}</h1>
      <article className="details__author">
        <div className="details__subtitle">
          <h2 className="details__creator">By {selected.channel}</h2>
          <p className="details__date">{dateConvertor(selected.timestamp)}</p>
        </div>
        <div className="details__wrapper">
          <div className="details__wrapper-view">
            <img
              className="details__view-icon"
              src={ViewIcon}
              alt="view icon"
            />
            <p className="details__view-num">{selected.views}</p>
          </div>
          <div className="details__wrapper-like">
            <img
              className="details__like-icon"
              src={LikeIcon}
              alt="view icon"
            />
            <p className="details__like-num">{selected.likes}</p>
          </div>
        </div>
      </article>
      <p className="details__text">{selected.description}</p>
    </section>
  );
};

export default VideoDetails;
