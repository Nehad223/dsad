import React from 'react'

const Input = ({ value, placeholder, TwoWord, val_in, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-4 d-flex justify-content-end'>
        <input
          type='text'
          placeholder={placeholder}
          value={val_in} 
          onChange={handleChange}
        />
      </div>
        <div className='col-2 mt-1'>
          <h1 className='text text-start'>{value}</h1>
        </div>
    </div>
  )
}

export default Input

