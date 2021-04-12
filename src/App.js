import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

    onSubmit = async (term) => {
      const res = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      this.setState({ videos: res.data.items });
    }

    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
      const { selectedVideo } = this.state;
      if (selectedVideo) {
        console.log('ok');
      }
    }

    render() {
      const { videos, selectedVideo } = this.state;
      return (
        <div className="ui container">
          <SearchBar onSubmit={this.onSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVideo} />

              </div>
              <div className="five wide column">
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
