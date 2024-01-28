import React, { useState, useEffect } from "react";
import VideoHero from "../VideoHero/VideoHero";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import SideVideos from "../SideVideos/SideVideos";
import videoDetailsData from "../../Data/video-details.json";
import videosData from "../../Data/videos.json";
import "./Main.scss";

const Main = () => {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    const combinedData = videosData.map((video) => ({
      ...videoDetailsData.find((detail) => detail.id === video.id),
      ...video,
    }));

    setVideoData(combinedData);
    setSelectedVideo(combinedData[0]);
    setSideVideos(combinedData.slice(1));
  }, []);

  const handleClick = (id) => {
    const selected = videoData.find((video) => video.id === id);
    setSelectedVideo(selected);
    setSideVideos(videoData.filter((video) => video.id !== id));
  };

  return (
    <main className="main">
      {selectedVideo && (
        <>
          <section className="main__hero">
            <VideoHero videoData={selectedVideo} />
          </section>
          <section className="main__body">
            <div className="main__body-left">
              <VideoDetails selected={selectedVideo} />
              <Comments selected={selectedVideo} />
            </div>
            <div className="main__body-right">
              <SideVideos
                videoData={sideVideos}
                selected={selectedVideo}
                handleClick={handleClick}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;
