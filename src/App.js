import React from "react";
import Header from "./components/Header.js"
import PhoneListContainer from "./components/PhoneListContainer.js";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhoneListContainer />
      </div>
    )
  }
}

export default App;