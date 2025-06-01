import React, { useState, useEffect } from 'react';
import Input from './Input';
import Btn_Add from './Btn_Add';
import Price_input from './Price_input';
import Image_Input from './Image_Input';
import axios from 'axios';
import Btns_Del_Add from './Btns_Del_Add';
const Points_Body = ({ edit = false, olditem = {} }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (edit && olditem) {
      setName(olditem.name || '');
      setDescription(olditem.description || '');
      setPrice(olditem.points || '');
    }
  }, [edit, olditem]);

const sendPoints = async (name, description, price, img) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  if (img) formData.append('photo', img);

  try {
    const url = edit
      ? `https://market-cwgu.onrender.com/updatepointitem/${olditem.id}/`
      : 'https://market-cwgu.onrender.com/newpointitem/';

    const method = edit ? 'put' : 'post';

    const response = await axios({
      method: method,
      url: url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error uploading:', error);
  }
};
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



  const handleSubmit = async () => {
    await sendPoints(name, description, price, img);

    setDescription('');
    setName('');
    setPrice('');
    setImg(null);
  };

  return (
    <div className='mt-5'>
      <Input
        value='الاسم'
        val_in={name}
        placeholder='ادخل الاسم'
        setValue={setName}
      />
      <Input
        value='وصف'
        placeholder='ادخل الوصف'
        val_in={description}
        setValue={setDescription}
      />
      <Price_input
        value='النقاط'
        placeholder='ادخل النقاط'
        setValue={setPrice}
        val_in={price}

      />
<Image_Input
  value='الصورة'
  placeholder='ادخل الصورة'
  setValue={setImg}
  val_in={img}
  oldImage={edit && olditem.photo}
/>

      {!edit?<Btn_Add onClick={handleSubmit} />:<Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />}
      
    </div>
  );
};

export default Points_Body;

