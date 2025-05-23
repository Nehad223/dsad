import React from 'react'

const Profile_Img = (props) => {
  return (
    <div>
     <img
            src={props.src}
            width="103px"
            height="103px"
            className="Profile_Photo"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
              style={{
    backgroundImage: `url(${props.src})`,
  }}
          />
    </div>
  )
}

export default Profile_Img
