import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  { title: 'One', link: 'https://dummyimage.com/600x400' },
  { title: 'Two', link: 'https://dummyimage.com/600x400' },
  { title: 'Three', link: 'https://dummyimage.com/600x400' }
];

const ImageList = () => {
  return (
    <ul>
      <ImageDetail />
    </ul>
  )
};

export default ImageList;