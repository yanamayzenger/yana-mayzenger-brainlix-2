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
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);
  const { videoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        let selectedVideoResponse;

        if (videoId) {
          selectedVideoResponse = await axios.get(
            `${api_url}/videos/${videoId}${api_key}`
          );
        } else {
          const videosResponse = await axios.get(`${api_url}/videos${api_key}`);
          const firstVideoId = videosResponse.data[0].id;
          selectedVideoResponse = await axios.get(
            `${api_url}/videos/${firstVideoId}${api_key}`
          );
        }

        setSelectedVideo(selectedVideoResponse.data);
        const videosResponse = await axios.get(`${api_url}/videos${api_key}`);
        setSideVideos(
          videosResponse.data.filter(
            (video) => video.id !== selectedVideoResponse.data.id
          )
        );
      } catch (error) {
        console.error("Error fetching video details: ", error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

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
                videoData={sideVideos}
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
