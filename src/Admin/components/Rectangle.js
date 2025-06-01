import React from 'react'
import { useNavigate } from 'react-router-dom'
const Rectangle = (props) => {
  const navigate=useNavigate();
  const handlbutton=()=>{
    navigate(`${props.redrict}`)
  }
  return (
    <div  >
        <button className=' mt-5 rectangle mb-1' onClick={handlbutton}>{props.value}</button>
      
    </div>
  )
}

export default Rectangle
