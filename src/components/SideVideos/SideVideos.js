import SideVideosList from "../SideVideosList/SideVideosList";

import "./SideVideos.scss";

const SideVideos = ({ videoData, selected, handleClick }) => {
  return (
    <section className="list">
      <h2 className="list__title">NEXT VIDEO</h2>
      {videoData.map((video) => {
        if (video !== selected) {
          return (
            <SideVideosList
              key={video.id}
              videoData={video}
              handleClick={() => handleClick(video.id)}
            />
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};

export default SideVideos;
