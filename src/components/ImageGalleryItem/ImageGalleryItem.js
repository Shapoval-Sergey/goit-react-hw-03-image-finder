import React from "react";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImgURL,
  tags,
  onClickLargeImg,
}) => {
  const handleClick = (e) => onClickLargeImg(e.target.dataset.source);
  return (
    <li className={s.imageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.imageGalleryItemImage}
        data-source={largeImgURL}
        data-id={id}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImgURL: PropTypes.string.isRequired,
  id: PropTypes.number,
  tags: PropTypes.string,
  onClickLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
