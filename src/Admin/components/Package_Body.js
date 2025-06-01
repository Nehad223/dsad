import React, { useState } from 'react'
import Input from './Input'
import Image_Input from './Image_Input';
import Price_input from './Price_input';
import Btn_Add from './Btn_Add';
import axios from 'axios';
import { useEffect } from 'react';
import Selector_Cat from './Selector_Cat';
import Btns_Del_Add from './Btns_Del_Add';
const Package_Body = (props) => {
   const { edit = false, olditem = {}, money = false } = props;
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [price, setPrice] = useState(''); 
      const[img,setImg]=useState('');
      const[catg,setCatg]=useState('اختر الكاتيغوري');
        useEffect(() => {
          if (edit && olditem) {
            setName(olditem.name || '');
            setDescription(olditem.description || '');
            setPrice(olditem.price || '');
            setCatg(olditem.category || 'اختر الكاتيغوري' )
          }
        }, [edit, olditem]);
      
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
    setPrice('');
    setCatg('اختر الكاتيغوري');
  }

  const handleDelete = async () => {
  if (!olditem.id) return;

  try {
    const response = await axios.delete(
      `https://market-cwgu.onrender.com/deletepointitem/${olditem.id}/`
    );
    console.log('Deleted:', response.data);

    // تفريغ الحقول بعد الحذف
    setDescription('');
    setName('');
    setPrice('');
    setImg(null);
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};

  return (
    <div className='mt-1'>
            <Input
        value={`الاسم`}
       val_in={name}
        placeholder="ادخل الاسم"
        setValue={setName}
      />
      <Input
        value={"وصف"}
        placeholder="ادخل الوصف"
        setValue={setDescription}
        val_in={description}
      />
      {props.money?<Selector_Cat value={catg} setValue={setCatg}/>:<div></div>}
            <Price_input
        value={"السعر"}
        placeholder="ادخل السعر"
        setValue={setPrice}
        val_in={price}

      />
                  <Image_Input
        value={"الصورة"}
        placeholder="ادخل الصورة"
        setValue={setImg}
        val_in={img}
  oldImage={edit && olditem.photo}
      />
           {!edit?<Btn_Add onClick={handleSubmit} />:<Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />}
      
    </div>
  )
}

export default Package_Body
