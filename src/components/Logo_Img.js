import React from 'react'
import logo from '../Assests/logo.png';
const Logo_Img = (props) => {
  return (
    <div>
         <img src={logo} width="92px" height="41px" className={`${props.class}`}/>
    </div>
  )
}

export default Logo_Img
