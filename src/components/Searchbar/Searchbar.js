import React from "react";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

const Searchbar = (onSubmit) => (
  <header className="Searchbar">
    <form className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
