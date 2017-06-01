import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({searchTerm: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  };

  render() {
    return (
        <div>
          <input
              onChange={this.onInputChange}
              value={this.state.searchTerm}
          />
        </div>
    );
  }
}

export default SearchBar;



