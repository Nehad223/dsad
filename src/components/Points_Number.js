import React from 'react'

const Points_Number = (props) => {
  return (
    <div>
        <button className='points_btn'>
            <div className="num_points">{props.points}
            </div>
            <div className="name_points">{props.title} </div>
        </button>
      
    </div>
  )
}

export default Points_Number;
