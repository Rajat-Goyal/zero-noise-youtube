import React, {Component} from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return (
        <div>
          Loading ...
        </div>
    );
  }
  const video_id = props.video.id.videoId;
  const videosrc = `https://www.youtube.com/embed/${video_id}`;
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videosrc}/>
        </div>

        <div className="details">
          <h4>{props.video.snippet.title}</h4>
          <div>{props.video.snippet.description}</div>
        </div>
      </div>
  );
};

export default VideoDetail;