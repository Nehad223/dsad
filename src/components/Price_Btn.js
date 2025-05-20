import React from 'react'

const Price_Btn = (props) => {
  return (
          <div>
        <button className='Price_btn'>
            <div className="num_points">{props.points}
            </div>
            <div className="name_points">{props.title} </div>
        </button>
      
    </div>

  )
}

export default Price_Btn
