import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

    onSubmit = async (term) => {
      console.log(youtube);
      console.log(process.env.YOUTUBE_API_KEY);

      const res = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      this.setState({ videos: res.data.items });
    }

    render() {
      return (
        <div className="ui container">
          <SearchBar onSubmit={this.onSubmit} />
          <p>I have loaded {this.state.videos.length} videos.</p>
        </div>
      );
    }
}

export default App;
