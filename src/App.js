import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
        <div className='cover'><Cover/></div>
        <div className='date'>{this.state.date}</div>
        <div className='weather-text'>Crazy about weather update</div>
        <div className='weather-text'>Know it <Link to='/weather'>here</Link></div>
      </div>
    );
  }
}

export default App;
