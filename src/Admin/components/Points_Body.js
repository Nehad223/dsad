import React, { useState, useEffect } from 'react';
import Input from './Input';
import Btn_Add from './Btn_Add';
import Price_input from './Price_input';
import Image_Input from './Image_Input';
import axios from 'axios';
import Btns_Del_Add from './Btns_Del_Add';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Points_Body = ({ edit = false, olditem = {} }) => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) return; 
    if (edit && olditem) {
      setName(olditem.name || '');
      setDescription(olditem.description || '');
      setPrice(olditem.points || '');
    }
  }, [edit, olditem]);

const sendPoints = async (name, description, price, img) => {
  const formData = new FormData();

  if (!edit) {
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    if (img) formData.append('photo', img);
  } else {
    if (name !== olditem.name) formData.append('name', name);
    if (description !== olditem.description) formData.append('description', description);
    if (price !== String(olditem.points)) formData.append('price', price);
    if (img) formData.append('photo', img); 
  }
    setIsSubmitting(true); 

  try {
    const url = edit
      ? `https://market-cwgu.onrender.com/editpointitem/${olditem.id}/`
      : 'https://market-cwgu.onrender.com/newpointitem/';

    const method = edit ? 'patch' : 'post';

    const response = await axios({
      method,
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setIsSubmitting(false);

    toast.success('تمت العملية بنجاح', {
      onClose: () => navigate(-1),
      autoClose: 1500,
    });
        setDescription('');
    setName('');
    setPrice('');
    setImg(null);
  } catch (error) {
    console.error('Error uploading:', error);
    toast.error('حدث خطأ أثناء الإرسال');
  }
};

const handleDelete = async () => {
  if (!olditem.id) return;

  try {
    const response = await axios.delete(
      `https://market-cwgu.onrender.com/deletepointitem/${olditem.id}/`
    );
 
    setDescription('');
    setName('');
    setPrice('');
    setImg(null);
    setIsSubmitting(false);
          toast.success("تمت العملية بنجاح", {
      onClose: () => navigate(-1),
      autoClose: 1500,
    });
  } catch (error) {
    console.error( error);
    toast.error("حدث خطأ أثناء الإرسال");
  }
};



  const handleSubmit = async () => {
   if (!name || name.trim() === '' || !price || (!edit && !img)) {
    toast.error("يرجى تعبئة جميع الحقول المطلوبة", {
      autoClose: 2000,
    });
    return;
  }


    await sendPoints(name, description, Number(price), img);

    setDescription('');
    setName('');
    setPrice('');
    setImg(null);
  };

  return (
    <div className='mt-5'>
            <ToastContainer rtl position="top-center" autoClose={3000} />
      
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

      {!edit?<Btn_Add onClick={handleSubmit} disabled={isSubmitting} />:<Btns_Del_Add onClick={handleSubmit} deleteClick={handleDelete} />}
      
    </div>
  );
};

export default Points_Body;

