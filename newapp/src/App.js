import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <h1>hello , this is a class:{this.props.name}</h1>
    );
  }
}

App.defaultProps = {
  name:'rootname'
};


export default App;
