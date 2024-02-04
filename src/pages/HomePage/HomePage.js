import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import VideoHero from "../../components/VideoHero/VideoHero";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import SideVideos from "../../components/SideVideos/SideVideos";
import { api_url, api_key } from "../../components/API/API";
import "./HomePage.scss";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${api_url}/videos${api_key}`)
      .then((response) => setVideos(response.data))
      .catch((error) => console.error("Error fetching videos list: ", error));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const currentVideoId = videoId || videos[0].id;
      axios
        .get(`${api_url}/videos/${currentVideoId}${api_key}`)
        .then((response) => setSelectedVideo(response.data))
        .catch((error) =>
          console.error("Error fetching selected video details: ", error)
        );
    }
  }, [videoId, videos]);

  const handleVideoSelect = (id) => {
    navigate(`/video/${id}`);
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
                videoData={videos.filter(
                  (video) => video.id !== selectedVideo.id
                )}
                selected={selectedVideo}
                onVideoSelect={handleVideoSelect}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default HomePage;
