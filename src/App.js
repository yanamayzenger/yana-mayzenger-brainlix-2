import React, { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/navbar/Navbar";
import SideVideos from "./components/SideVideos/SideVideos";

function App() {
  const initialMainVideoData = {};
  const initialCommentList = [];
  const [mainVideo, setMainVideo] = useState(initialMainVideoData);
  const [comments, setComments] = useState(initialCommentList);
  const initialSideVideoList = [];
  const [sideVideoData, setSideVideoData] = useState(initialSideVideoList);
  const handleSideVideoSelect = (selectedVideoId) => {
    const selectedVideo = sideVideoData.find(
      (video) => video.id === selectedVideoId
    );
    if (selectedVideo) {
      setSideVideoData([
        selectedVideo,
        ...sideVideoData.filter((video) => video.id !== selectedVideoId),
      ]);
    }
  };

  const updateMainVideo = (videoData) => {
    setMainVideo(videoData);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <Main
        mainVideo={mainVideo}
        updateMainVideo={updateMainVideo}
        comments={comments}
        addComment={addComment}
      />
      <SideVideos
        videoData={sideVideoData}
        selected={mainVideo}
        handleClick={handleSideVideoSelect}
      />
    </>
  );
}

export default App;
