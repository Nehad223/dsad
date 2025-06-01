import React from 'react'
import Header from '../components/Header'
import Selector_Cat from '../components/Selector_Cat'
import Package_Body from '../components/Package_Body'

const Add_Money = () => {
  return (
    <div>
      <Header/>
      <h1 className='add_text mt-1'> إضافة بضاعة بسعر</h1>
      <Package_Body money={true}/>
      
      
    </div>
  )
}

export default Add_Money
