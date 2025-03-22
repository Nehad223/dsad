import React from 'react'

const Profile_Btns = (props) => {
  return (
    <div>
           <button className="pro_btton" onClick={props.action}> {props.title} </button>  
    </div>
  )
}

export default Profile_Btns
