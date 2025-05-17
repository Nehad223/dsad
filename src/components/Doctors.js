import React from 'react';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';

const Doctors_Students = ({ items, doctor_student }) => {
  const navigate = useNavigate();

  const Go_To_Catg = (Num_Item, name, description, id, doctor_student) => {
    navigate(`catg/${id}/${doctor_student}`, {
      state: { name: name, description: description },
    });
  };

  return (
    <div className="catges">
      {items
        .filter((catg) => catg.category_type === doctor_student && catg.items?.length > 0)
        .map((catg, catgId) => (
          <div key={catgId} className="catg">
            <h1
              className="catg_Name"
              onClick={() =>
                Go_To_Catg(
                  catg.items.length,
                  catg.name,
                  catg.description,
                  catg.id,
                  doctor_student
                )
              }
            >
              {catg.name}
            </h1>
            <h3 className="catg_Des">{catg.description}</h3>
            <Slider
              items={catg.items}
              catgId={catg.id}
              catgName={catg.name}
              doctor_student={doctor_student}
              catgDescription={catg.description}
            />
          </div>
        ))}
      <div className="spacer" style={{ height: '75px' }}></div>
    </div>
  );
};

export default Doctors_Students;
