import React from 'react'

const Input = ({ value, placeholder, TwoWord, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='row input mt-1'>
      <div className='col-4'></div>
      <div className='col-4'>
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleChange}
         
        />
      </div>
      {TwoWord ? (
        <div className='col-2 mt-1'>
          <h1 className='text'>{value}</h1>
        </div>
      ) : (
        <div className='col-1 mt-1'>
          <h1 className='text'>{value}</h1>
        </div>
      )}
    </div>
  )
}

export default Input
