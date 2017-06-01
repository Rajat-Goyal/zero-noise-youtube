import React from 'react';

const VideoList = function(props) {
  const videolist = props.videos.map((video) => {
    return (
        <div key={video.etag}>
          {video.etag}
        </div>
    );
  });

  return (
      <div>
        {videolist}
      </div>
  );
};

export default VideoList;