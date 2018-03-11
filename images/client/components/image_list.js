import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'One', link: 'https://dummyimage.com/200x125' },
  { title: 'Two', link: 'https://dummyimage.com/200x125' },
  { title: 'Three', link: 'https://dummyimage.com/200x125' }
];

const ImageList = () => {

  const RenderedImages = IMAGES.map(image => {
    return (
      <ImageDetail
        title={image.title}
        link={image.link}
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