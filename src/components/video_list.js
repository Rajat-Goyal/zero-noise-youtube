import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = function(props) {
  const videolist = props.videos.map((video) => {
    return (
        <VideoListItem
            key = {video.etag}
            video = {video}
        />
    );
  });

  return (
      <div>
        {videolist}
      </div>
  );
};

export default VideoList;