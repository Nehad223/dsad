import React from 'react'

const Price_input = ({ value, placeholder, setValue ,val_in})  => {
      const handleChange = (e) => {
    setValue(Number(e.target.value))
  }
  return (
    <div>
        <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-4'>
        <input
          type='number'
          value={val_in} 
          placeholder={placeholder}
          onChange={handleChange}
         
        />
      </div>
        <div className='col-1 mt-1 yy'>
          <h1 className='text'>{value}</h1>
        </div>

    </div>
    </div>
  )
}

export default Price_input
