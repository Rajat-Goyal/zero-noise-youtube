import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAZbcHvfb7_T0IZc_822pRwWH1Nk0kVg04';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'react-redux'}, (videos) => {
      this.setState({videos: videos});
    });
  }

  render() {
    return (
        <div>
          <SearchBar/>
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));