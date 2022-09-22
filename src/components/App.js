import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import handleVideoSearch from '../actions/search.js'
import {dispatch} from 'redux';

class App extends React.Component {

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer /* getYouTubeVideos={this.getYouTubeVideos} *//>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer /* video={this.state.currentVideo} *//>
          </div>
          <div className="col-md-5">
            <VideoListContainer
              /* handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos} */
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
