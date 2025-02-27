import React from 'react'
import Slider from './Slider'

const Doctors_Students = (props) => {
  return (
    <div className='catges'>
      {props.items.map((catg,catgId)=>{
        return(
            <div key={catgId} >
                
                {props.doctor_student == 1 && catg.limited_doctor_items?.length > 0 ? (
                    <div className='catg'>
                        <h1 className='catg_Name '>{catg.name}</h1>
                        <h3 className='catg_Des' >{catg.description}</h3>
                        <Slider items={catg.limited_doctor_items} />
                    </div>
) : props.doctor_student == 2 && catg.limited_student_items?.length > 0 ? (
    <div className='catg'>
    <h1 className='catg_Name'>{catg.name}</h1>
    <h3 className='catg_Des' >{catg.description}</h3>
    <Slider items={catg.limited_student_items} />
</div>
) : null}

            </div>
        )
      })}
    </div>
  )
}

export default Doctors_Students

