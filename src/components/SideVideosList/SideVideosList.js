import "./SideVideosList.scss";

const SideVideosList = ({ videoData, handleClick }) => {
  return (
    <article className="card" onClick={handleClick}>
      <img
        className="card__image"
        src={videoData.image}
        alt={videoData.title}
      />
      <div className="card__text-wrapper">
        <p className="card__title">{videoData.title}</p>
        <p className="card__creator">{videoData.channel}</p>
      </div>
    </article>
  );
};

export default SideVideosList;
