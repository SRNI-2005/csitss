import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from "../Modal/Modal";

const ImageCarousel = ({ urls, height, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const widthValue = typeof width === 'string' ? parseInt(width) : width;
  const heightValue = height;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % urls.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + urls.length) % urls.length);
  };

  const handleImageClick = (index) => {
    setSelectedImage(urls[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ImageCarouselStyle = {
    height: heightValue,
    maxWidth: typeof widthValue === 'number' ? `${2 * widthValue}vw` : width,
  };

  const ImageStyle = (index) => {
    return {
      height: heightValue,
      maxWidth: typeof widthValue === 'number' ? `${widthValue}vw` : width,
      transform: `translateX(${(index - activeIndex) * (100+2)}%) scale(${index === activeIndex ? 1 : 0.95})`,
      filter: index !== activeIndex ? "brightness(30%)" : "brightness(100%)",
      cursor: "pointer"
    };
  };

  return (
    <>
      <div className={styles["image-carousel"]} style={ImageCarouselStyle}>
        {urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className={styles["image"]}
            style={ImageStyle(index)}
            onClick={() => handleImageClick(index)}
          />
        ))}
        <button onClick={prevImage} className={styles["carousel-button-left"]}>
          <ArrowBackIcon />
        </button>
        <button onClick={nextImage} className={styles["carousel-button-right"]}>
          <ArrowForwardIcon />
        </button>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected image"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", 
              borderRadius: "0.5rem" 
            }}
          />
        )}
      </Modal>
    </>
  );
};

export default ImageCarousel;