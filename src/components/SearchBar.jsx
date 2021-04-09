import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="videoSearch">Video Search</label>
            <input type="text" id="videoSearch" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
