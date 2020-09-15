import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => (
  <ul className={s.imageGallery}>
    {images.map(({ id, ...prop }) => (
      <ImageGalleryItem key={id} {...prop} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;
