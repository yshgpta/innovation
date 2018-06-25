import React, { Component } from 'react';
import './App.css';

//Components

import Cover from './components/Cover/Cover';



class App extends Component {
  constructor(){
    super();
    this.state={
      date:''
    }
  }


  render() {
    setInterval(()=>{
      this.setState({date: new Date().toLocaleTimeString()})}, 1000)
    return (
      <div>
        <Cover/>
        <div>{this.state.date}</div>
      </div>
    );
  }
}

export default App;
