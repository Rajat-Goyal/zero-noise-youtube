import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAZbcHvfb7_T0IZc_822pRwWH1Nk0kVg04';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchVideo("surfboards")
  }

  searchVideo = (searchTerm) => {
    YTSearch({key: API_KEY, term:searchTerm}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
    });
  };

  searchTermChange = (newTerm) => {
    this.searchVideo(newTerm);
  };

  throttledSearch = _.debounce((nterm) => {this.searchTermChange(nterm)}, 300);

  onVideoSelect = (selectVideo) => {
    this.setState({selectedVideo: selectVideo});
  };

  render() {
    return (
        <div>
          <SearchBar onSearchTermChange = {this.throttledSearch} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect = {this.onVideoSelect}
              videos={this.state.videos}
          />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));