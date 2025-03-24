import React, { useRef } from 'react';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';
const Doctors_Students = (props) => {
  const navigate=useNavigate();
  const Go_To_Catg=(Num_Item,name,description,id,doctor_student)=>{
  
    navigate(`catg/${id}/${doctor_student}`,
      {state:{name:name,description:description}});}
    

  return (
    <div className='catges'>
      {props.items.map((catg, catgId) => {
        return (
          <div key={catgId}>
            {props.doctor_student === "doctor" && catg.limited_doctor_items?.length > 0 ? (
              <div className='catg'>
                <h1
                  className='catg_Name'
                  onClick={()=>{Go_To_Catg(catg.limited_doctor_items.length,catg.name,catg.description,catg.id,props.doctor_student)}}
                 
                >
                  {catg.name}
                </h1>
                <h3 className='catg_Des'>{catg.description}</h3>
                <Slider
                  items={catg.limited_doctor_items}
                  catgId={catg.id}
                  catgName={catg.name}
                  doctor_student={props.doctor_student}
                  catgDescription={catg.description}
                />
              </div>
            ) : props.doctor_student === "student" && catg.limited_student_items?.length > 0 ? (
              <div className='catg'>
                <h1
                  className='catg_Name'
                  onClick={()=>{Go_To_Catg(catg.limited_student_items.length,catg.name,catg.description,catg.id,props.doctor_student)}}
                 
                >
                  {catg.name}
                </h1>
                <h3 className='catg_Des'>{catg.description}</h3>
                <Slider
                  items={catg.limited_student_items}
                  catgId={catg.id}
                  catgName={catg.name}
                  doctor_student={props.doctor_student}
                  catgDescription={catg.description}
                />
              </div>
            ) : null}
          </div>
        );
      })}
      <div className="spacer" style={{ height: "75px" }}></div>
    </div>
  );
};

export default Doctors_Students;
