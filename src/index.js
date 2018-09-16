import React from 'react';
import ReactDOM from 'react-dom';
import PhoneListContainer from "./components/PhoneListContainer.js";
import './index.css';

class App extends React.Component {
  render() {
    return (
      <PhoneListContainer></PhoneListContainer>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

