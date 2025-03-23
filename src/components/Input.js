import React from 'react'

const Input = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <input type='text' placeholder={props.placeholder}/>
    </div>
  )
}

export default Input
