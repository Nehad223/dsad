import React from 'react';
import Rectangle from './Rectangle';
import Delev_Rectangle from './Delev_Rectangle';
const Body_Orders_All = (props) => {
  return (
    <div>
              <div className='grid-container'>
        {props.data.map((item,index)=>{
          return(
            <div key={item.id}>
              {item.status=="pending"?(<Rectangle value={index+1} redrict={`${index+1}/${item.id}`}/>):<Delev_Rectangle value={index+1} redrict={`${index+1}/${item.id}`} />}
            </div>
          )
        })}
      </div>
      
      
    </div>
  )
}

export default Body_Orders_All
