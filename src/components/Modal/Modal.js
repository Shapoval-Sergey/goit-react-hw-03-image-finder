import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Modal.module.css";

export default class Modal extends Component {
  state = {
    largeImageURL: "",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
    }
  };

  render() {
    const { largeImageURL } = this.state;
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
