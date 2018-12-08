import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

function HelloM(props){
    return <h1>this is a test </h1>;
}

const element = <HelloM name="robot"/>;


ReactDOM.render(<div>element<App /></div>, document.getElementById('root'));

serviceWorker.unregister();
