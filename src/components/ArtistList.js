import React, { Component } from "react";

class ArtistList extends Component {
  render() {
    return (
      <ul className="artist__list">
        {this.props.artistList.map(entry => {
          return (
            <li key={entry} onClick={() => this.props.onClick(entry)}>
              <span>{entry}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArtistList;
