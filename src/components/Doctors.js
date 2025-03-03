import React from 'react';
import Slider from './Slider';

const Doctors_Students = ({ items, doctor_student }) => {
  return (
    <div className='catges'>
      {items.map((catg, catgId) => {
        const filteredItems =
          doctor_student === 1 ? catg.limited_doctor_items : catg.limited_student_items;

        return filteredItems?.length > 0 ? (
          <div key={catgId} className='catg'>
            <h1 className='catg_Name'>{catg.name}</h1>
            <h3 className='catg_Des'>{catg.description}</h3>
            <Slider items={filteredItems} catgId={catg.id} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Doctors_Students;
