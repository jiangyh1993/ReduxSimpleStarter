import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyD0TGlqKr779XW0BfjAOLZico3abSeSiK4";

//create new component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch(
      {
        key: API_KEY,
        term: "surfboards"
      },
      videos => {
        this.setState({ videos });
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));
