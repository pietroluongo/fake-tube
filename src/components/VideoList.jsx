import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => <VideoItem videoData={video} />);
  console.log(videos);
  return (
    <div>
      {renderedList}
    </div>
  );
};

export default VideoList;
