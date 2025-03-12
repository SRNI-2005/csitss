import React, { useState } from 'react';
import ImageCarousel from "./ImageCarousel/ImageCarousel";

const Gallery = () => {
  
  const imgLinks = [
    '/gallery/image_1.webp',
    '/gallery/image_2.webp',
    '/gallery/image_3.webp',
    '/gallery/image_4.webp',
    '/gallery/image_5.webp',
    '/gallery/image_6.webp',
    '/gallery/image_7.webp',
    '/gallery/image_8.webp',
    '/gallery/image_9.webp',
    '/gallery/image_10.webp',
    '/gallery/image_11.webp',
    '/gallery/image_12.webp',
    '/gallery/image_13.webp',
    '/gallery/image_14.webp',
    '/gallery/image_15.webp',
    '/gallery/image_16.webp',
    '/gallery/image_17.webp',
    '/gallery/image_18.webp',
    '/gallery/image_19.webp',
    '/gallery/image_20.webp',
    '/gallery/image_21.webp',
    '/gallery/image_22.webp',
    '/gallery/image_23.webp',
    '/gallery/image_24.webp',
    '/gallery/image_25.webp',
    '/gallery/image_26.webp',
    '/gallery/image_27.webp'
  ];

  

  return (
    <ImageCarousel urls={imgLinks} height={"70vh"} width={"45"}/>
  );
};

export default Gallery;