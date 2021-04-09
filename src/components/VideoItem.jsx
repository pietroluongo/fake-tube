import React from 'react';

const VideoItem = ({ videoData }) => (
  <div key={videoData.id.videoId}>
    <img src={videoData.snippet.thumbnails.medium.url} alt="" />
    <h3>{videoData.snippet.title}</h3>
    <p>{videoData.snippet.description}</p>
  </div>
);

export default VideoItem;
