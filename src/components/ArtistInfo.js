import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ArtistEventsContainer from "../containers/ArtistEventsContainer";

/**
 * Method responsible for adding the 'hide' class name
 */
const getClassName = props => {
  let classNames = ["artist__info"];

  if (!props.name) {
    classNames.push("hide");
  }

  return classNames;
};

/**
 * Method for adding the facebook icon
 */
const getFacebookIcon = props => {
  if (props.facebook_page_url) {
    return (
      <a href={props.facebook_page_url} target="_blank">
        <img className="artist__fb" />
      </a>
    );
  }
};

class ArtistInfo extends Component {
  render() {
    return (
      <div>
        <Toolbar name={this.props.name} />
        <div className={getClassName(this.props).join(" ")}>
          <img
            className="artist__icon"
            src={this.props.thumb_url}
            alt="artist icon"
          />
          {getFacebookIcon(this.props)}
        </div>
        <ArtistEventsContainer />
      </div>
    );
  }
}

export default ArtistInfo;
