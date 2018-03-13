import React from 'react';
import ProgressBar from './progress_bar';

const ImageDetail = (props) => {

  const { title, link, description, ups, downs } = props.image;

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{title}</h4>
        <p>{description}</p>
        <ProgressBar
          ups={ups}
          downs={downs}
        />
      </div>
    </li>
  )
};

export default ImageDetail;

