import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Test from './Test';

ReactDOM.render(<div><App /><Test /></div>, document.getElementById('root'));


serviceWorker.unregister();
