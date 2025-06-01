import React from 'react'

const Price_input = ({ value, placeholder, setValue })  => {
      const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
        <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-5'>
        <input
          type='number'
          placeholder={placeholder}
          onChange={handleChange}
         
        />
      </div>
        <div className='col-3 mt-1 yy'>
          <h1 className='text'>{value}</h1>
        </div>

    </div>
    </div>
  )
}

export default Price_input
