import React from 'react';

const ImageDetail = (props) => {

  const { title, link } = props.image;

  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{title}</h4>
      </div>
    </li>
  )
};

export default ImageDetail;

