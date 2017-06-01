import React from 'react';

const VideoListItem = function(props) {
  const vid = props.video;
  return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object"
                 src={vid.snippet.thumbnails.default.url}/>
          </div>

          <div className="media-body">
            <h5 className="media-heading"> {vid.snippet.title} </h5>
          </div>

        </div>
      </li>
  );
};

export default VideoListItem;