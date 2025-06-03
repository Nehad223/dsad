import React from 'react'
import { useNavigate } from 'react-router-dom'
const Delev_Rectangle = (props) => {
    const navigate = useNavigate();
      const handlbutton=()=>{
    navigate(`${props.redrict}`)
  }
  return (
    <div>
            <button className=' mt-5 rectangle_Delve mb-1' onClick={handlbutton}>{props.value}</button>
      
    </div>
  )
}

export default Delev_Rectangle
