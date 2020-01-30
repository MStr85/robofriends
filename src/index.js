import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots.js';  // bo nie ma export default w robots.js 

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
