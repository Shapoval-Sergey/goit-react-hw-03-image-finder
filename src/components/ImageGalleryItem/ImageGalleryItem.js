import React from "react";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => (
  <li className={s.imageGalleryItem} key={id} onClick={onClick}>
    <img src={webformatURL} alt={tags} className={s.imageGalleryItemImage} />
  </li>
);

export default ImageGalleryItem;
