import React, { useState } from 'react';

const Nav = ({ onSelect }) => {
const[x,setX]=useState(null);
  return (
    <div>
      {x==2 ? (
        <h1>dsa</h1>
      ): <h1>adskj</h1>
      
      }
    
    </div>
  );
};

export default Nav;
