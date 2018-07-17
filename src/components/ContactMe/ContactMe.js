import React from 'react';
import maker from '../../images/maker.jpg'

// Icons
import fb from '../../images/icon/fb.png'
import insta from '../../images/icon/insta.png'
import gmail from '../../images/icon/gmail.png'
import whatsapp from '../../images/icon/whatsapp.png'

import './ContactMe.css'

const ContactMe = () =>{
  return(
    <div>
    <div className='maker-body'><img src={maker} alt='' className='makerimg' width='400px' height='400px'/></div>
    <div className='top_layer'>
      <div className='top_layer1'>
        <div className='top_layer1-title'>Project Info</div>
        <div className='top_layer1-body'>This project is completely powered by react, which is a Javascript library developed and managed by
        Facebook. It's has been amazing experience creating and developing this project. Through this course I have
        learned various aspects of reactjs and it's amazing power to make things simple. I'am happy that this project is complete for now and
        hopefully further updates will be carried in near future.</div>
      <div className='quote-title'>Ending Note:-</div>
      <div className='quote'>"Ends are not bad things, they just mean that something else is about to begin. And there are many things that don't
        really end, anyway, they just begin again in a new way. Ends are not bad and many ends aren't really an ending.<span className='quote-author'>-C. JoyBell C.</span></div>
      </div>
      <div className='top_layer2'><div className='top_layer2 text-box'><div className='top_layer2-text'>Yash Gupta</div></div></div>
      <div className='top_layer3'>
        <div className='follow-text'>Follow me at:</div>
        <div className='icon-head'><div className='icon-body'><img src={fb} alt=''/></div><div className='icon-body text'>/yash.chemicallocha</div></div>
        <div className='icon-head'><div className='icon-body'><img src={insta} alt=''/></div><div className='icon-body text'>/ysh_gpta</div></div>
        <div className='icon-head'><div className='icon-body'><img src={gmail} alt=''/></div><div className='icon-body text'>ysh.gpta8333@gmail.com</div></div>
        <div className='icon-head'><div className='icon-body'><img src={whatsapp} alt=''/></div><div className='icon-body text'>+91-8127078333</div></div>
      </div>
    </div>

    </div>
  )
}
export default ContactMe;
