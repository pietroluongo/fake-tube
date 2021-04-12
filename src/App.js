import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
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

    onVideoSelect = (video) => {
      console.log('from app!', video);
      const { selectedVideo } = this.state;
      if (selectedVideo) {
        console.log('ok');
      }
    }

    render() {
      const { videos } = this.state;
      return (
        <div className="ui container">
          <SearchBar onSubmit={this.onSubmit} />
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
        </div>
      );
    }
}

export default App;
