import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'One', link: 'https://dummyimage.com/600x400' },
  { title: 'Two', link: 'https://dummyimage.com/600x400' },
  { title: 'Three', link: 'https://dummyimage.com/600x400' }
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
    <ul>
      {RenderedImages}
    </ul>
  )
};

export default ImageList;