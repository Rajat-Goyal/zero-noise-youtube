import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

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
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));