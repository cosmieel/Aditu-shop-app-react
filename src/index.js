import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css'
import './fonts/fonts.css'
import './style.css'
import App from './components/app/index'
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

serviceWorker.register();