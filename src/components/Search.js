import React, { Component } from "react";
import ArtistListContainer from "../containers/ArtistListContainer";

/**
 * Handler for form submit event
 *
 * @param {Object} event
 * @param {Object} props
 */
const formSubmitCall = (event, props) => {
  event.preventDefault();
  props.onSubmit(event.target[0].value);
};

/**
 * handler for onChange event
 *
 * @param {Object} event
 * @param {Object} props
 */
const onChangeHandler = (event, props) => {
  let value = event.target.value;

  if (value.length === 0) {
    props.onChange(value, []);
  }

  props.onChange(value, getFilteredLocalStorageKeys(value));
};

/**
 * Method for teurning the localStorage keys
 * 
 * @param {string} value
 * @returns {Array}
 */
export const getFilteredLocalStorageKeys = value => {
  return Object.keys(localStorage).filter(elem => {
    return elem.indexOf(value) !== -1;
  });
};

class Search extends Component {
  render() {
    return (
      <div className="searchContainer">
        <form
          onSubmit={event => formSubmitCall(event, this.props)}
          className="form-wrapper cf"
        >
          <input
            placeholder="Search for Artists here "
            onChange={event => onChangeHandler(event, this.props)}
            value={this.props.searchName}
          />
        </form>
        <ArtistListContainer />
      </div>
    );
  }
}

export default Search;
