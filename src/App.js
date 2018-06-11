import React, { Component } from "react";
import "./App.css";

import ArtistInfoContainer from "./containers/ArtistInfoContainer";

class App extends Component {
  elem = document.getElementById("root");
  render() {
    return (
      <div className="App">
        <ArtistInfoContainer />
      </div>
    );
  }
}

export default App;
