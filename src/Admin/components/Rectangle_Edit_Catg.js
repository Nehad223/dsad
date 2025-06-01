import React from 'react'
import { useNavigate } from 'react-router-dom'

const Rectangle_Edit_Catg = (props) => {
    const navigate=useNavigate();
      const handlbutton=()=>{
    navigate(`${props.redrict}`)
  }
  return (
    <div>
        <button className=' mt-5 rectangle_edit mb-1' onClick={handlbutton}>{props.value}</button>
    </div>
  )
}

export default Rectangle_Edit_Catg;
