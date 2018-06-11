import React, { Component } from "react";
import SearchContainer from "../containers/SearchContainer";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar__container">
        <SearchContainer />
        <span className="artist__name">{this.props.name}</span>
      </div>
    );
  }
}

export default Toolbar;
