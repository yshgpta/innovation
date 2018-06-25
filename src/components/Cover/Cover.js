import React from 'react';
import {Link} from 'react-router-dom';

import BackgroundImage from '../../images/background2.jpg';
import Cloud from '../../images/clouds.png';
import Fog from '../../images/fog-low.png'

import './Cover.css'

const Cover = () =>{
  return(
    <div className='wrapper'>
      <img src={BackgroundImage} className='cover-image' alt='mountains'/>
      <div className='cover-image-fade'></div>
      <div className='navbar'><Link to='/sign_up'><span className='navbar-item sign-up'>Sign in</span></Link><Link to='/contact_me'><span className='navbar-item'>Contact Me</span></Link><a href='https://yshgpta.blogspot.com/'><span className='navbar-item'>My Blog</span></a><Link to='/gallery'>
        <span className='navbar-item'>Gallery</span></Link><Link to='/'><span className='navbar-item'>Home</span></Link></div>
      <div className='title'><span className='title-1'>We are made</span><span className='title-2'>of</span><span className='title-3'>Ideas</span><span className='title-4'>See for yourself</span></div>
      <div><img src={Fog} className='fog' alt='fog'/></div>
      <div  className='moving-clouds-block'><img src={Cloud} className='moving-clouds' alt='clouds'/></div>
    </div>
  )
}

export default Cover;
