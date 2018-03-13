import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {

  const { images } = props;

  console.log(images);

  const RenderedImages = images
    .filter(image => {
      return !image.is_album
    })
    .map(image => {
      return (
        <ImageDetail
          key={image.id}
          image={image}
        />
      )
  });

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  )
};

export default ImageList;