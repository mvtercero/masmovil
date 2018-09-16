import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index-reducers.js';
//import PhoneListContainer from "./components/PhoneListContainer.js";


let store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

