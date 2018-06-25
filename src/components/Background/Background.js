import React,{Component} from 'react'

import './Background.css';

class Background extends Component{
  constructor(){
    super();
    this.state={
      color1:'#ffffff',
      color2:'#ffffff'
    }
  }

  changeBG1 = (event) =>{
    document.body.style = 'background:linear-gradient(to right,'+event.target.value+','+this.state.color2+');'
    this.setState({
      color1:event.target.value
    })
  }

  changeBG2 = (event) =>{
    document.body.style = 'background:linear-gradient(to right,'+this.state.color1+','+event.target.value+');'
    this.setState({
      color2:event.target.value
    })
  }

  render(){
    return(
      <div className='color-block'>
        <p>
          <span className='colorinput-text'>Left:</span>
          <input type='color' className='colorinput' onInput={this.changeBG1}/>
          <span className='colorinput-text'>Right:</span>
          <input type='color' className='colorinput' onInput={this.changeBG2}/>
        </p>
      </div>
    )
  }
}
export default Background;
