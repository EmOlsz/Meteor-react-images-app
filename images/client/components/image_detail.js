import React from 'react';

const ImageDetail = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.link} />
    </div>
  )
};

export default ImageDetail;

