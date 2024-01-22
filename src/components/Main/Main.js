import { Component } from "react";
import VideoHero from "../VideoHero/VideoHero";
import Dataset from "../../Data/video-details.json";
import "./Main.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import SideVideos from "../SideVideos/SideVideos";

class Main extends Component {
  state = {
    videoData: Dataset,
    selected: Dataset[0],
  };

  handleClick = (id) => {
    const selected = this.state.videoData.find((video) => video.id === id);
    this.setState({ selected: selected });
  };

  render() {
    return (
      <main className="main">
        <section className="main__hero">
          <VideoHero videoData={this.state.selected} />
        </section>
        <section className="main__body">
          <div className="main__body-left">
            <VideoDetails selected={this.state.selected} />
            <Comments selected={this.state.selected} />
          </div>
          <div className="main__body-right">
            <SideVideos
              videoData={this.state.videoData}
              selected={this.state.selected}
              handleClick={this.handleClick}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
