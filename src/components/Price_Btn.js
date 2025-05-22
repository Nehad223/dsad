import React from 'react'
const Price_Btn = (props) => {
const x=100000000;

  return (
          <div>
        <button className='Price_btn'>
            <div className="num_price">{props.points.toLocaleString()} sp</div>
            <div className="name_points">{props.title} </div>
        </button>
      
    </div>

  )
}

export default Price_Btn
