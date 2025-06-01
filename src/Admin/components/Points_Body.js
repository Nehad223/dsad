import React from 'react'
import Input from './Input';
import Btn_Add from './Btn_Add';
import Price_input from './Price_input';
import Image_Input from './Image_Input';
import axios from 'axios';
import { useState} from 'react';
const Points_Body = () => {
          const [name, setName] = useState('');
          const [description, setDescription] = useState('');
          const [price, setPrice] = useState(0); 
          const[img,setImg]=useState("");
              const sendPoints = async (name, description, price, img) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('photo', img);


  try {
    const response = await axios.post('https://market-cwgu.onrender.com/newpointitem/', formData, {
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

sendPoints();

    setDescription('');
    setName('');
    setPrice(0);
  }
  return (
    <div className='mt-5'>
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
            <Price_input
        value={"النقاط"}
        placeholder="ادخل النقاط"
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

export default Points_Body
