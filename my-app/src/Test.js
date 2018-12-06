import React, { Component } from 'react';


class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
     
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
      }
    render(){
        return(
            <div>
                <button onClick={activeL}>this is a btn</button>
            
            </div>
        );
    }
}

export default Test;