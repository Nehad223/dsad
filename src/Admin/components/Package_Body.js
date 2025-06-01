import React, { useState } from 'react'
import Input from './Input'
import Image_Input from './Image_Input';
import Price_input from './Price_input';
import Btn_Add from './Btn_Add';
import axios from 'axios';
import Selector_Cat from './Selector_Cat';
const Package_Body = (props) => {
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [price, setPrice] = useState(0); 
      const[img,setImg]=useState('');
      const[catg,setCatg]=useState(0);
      
    const sendPackage = async (name, description, price, img) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('photo', img);


  try {
    const response = await axios.post('https://market-cwgu.onrender.com/newpackage/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error uploading:', error);
  }
};
const senMoney = async (name, description, price, img ,catg) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('photo', img);
  formData.append('category', catg);
console.log("name:",name,"description:",description,"price:",price,"photo:",img,"category:",catg)



  try {
    const response = await axios.post('https://market-cwgu.onrender.com/newitem/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error uploading:', error);
  }
};

    const handleSubmit =async () => {
      if(props.money){
        senMoney(name,description,price,img,catg)
      }
      else{sendPackage(name,description,price,img)}
    
      
    setDescription('');
    setName('');
    setImg('');
    setPrice(0);
    setCatg('اختر الكاتيغوري');
  }

  
  return (
    <div className='mt-1'>
            <Input
        value={`الاسم`}
       
        placeholder="ادخل الاسم"
        setValue={setName}
      />
      <Input
        value={"وصف"}
        placeholder="ادخل الوصف"
        setValue={setDescription}
      />
      {props.money?<Selector_Cat value={catg} setValue={setCatg}/>:<div></div>}
            <Price_input
        value={"السعر"}
        placeholder="ادخل السعر"
        setValue={setPrice}
      />
                  <Image_Input
        value={"الصورة"}
        placeholder="ادخل الصورة"
        setValue={setImg}
      />
     <Btn_Add onClick={handleSubmit} />
    </div>
  )
}

export default Package_Body
