import "./VideoHero.scss";

const VideoHero = ({ videoData }) => {
  return (
    <div className="wrapper">
      <video className="wrapper__player" poster={videoData.image} controls>
        <source src={videoData.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHero;
