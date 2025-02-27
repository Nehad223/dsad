import React from 'react'

const Packeges = (props) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
  {props.items.map((item, index) => (
    <div key={index} className="p-2 border">
      {item}
    </div>
  ))}
</div>

    </div>
  )
}

export default Packeges
