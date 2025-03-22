import React, { useRef } from 'react';
import Slider from './Slider';

const Doctors_Students = (props) => {
  // نستخدم useRef لتخزين الـ Slider ref
  const slidersRef = useRef({});

  const handleCategoryClick = (catgName) => {
    // الوصول إلى الـ Slider عن طريق الـ Ref الخاص بالكاتيغوري
    const slider = slidersRef.current[catgName];
    if (slider) {
      slider.scrollToLastSlide(); // التمرير إلى آخر شريحة
    }
  };

  return (
    <div className='catges'>
      {props.items.map((catg, catgId) => {
        return (
          <div key={catgId}>
            {props.doctor_student === 1 && catg.limited_doctor_items?.length > 0 ? (
              <div className='catg'>
                <h1
                  className='catg_Name'
                  onClick={() => handleCategoryClick(catg.name)} // الضغط على الكاتيغوري
                >
                  {catg.name}
                </h1>
                <h3 className='catg_Des'>{catg.description}</h3>
                <Slider
                  ref={(el) => (slidersRef.current[catg.name] = el)} // حفظ الـ ref لكل كاتيغوري
                  items={catg.limited_doctor_items}
                  catgId={catg.id}
                  catgName={catg.name}
                />
              </div>
            ) : props.doctor_student === 2 && catg.limited_student_items?.length > 0 ? (
              <div className='catg'>
                <h1
                  className='catg_Name'
                  onClick={() => handleCategoryClick(catg.name)} // الضغط على الكاتيغوري
                >
                  {catg.name}
                </h1>
                <h3 className='catg_Des'>{catg.description}</h3>
                <Slider
                  ref={(el) => (slidersRef.current[catg.name] = el)} // حفظ الـ ref لكل كاتيغوري
                  items={catg.limited_student_items}
                  catgId={catg.id}
                  catgName={catg.name}
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
